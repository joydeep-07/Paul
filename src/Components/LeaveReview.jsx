import React, { useState, useRef } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import Cropper from "react-easy-crop";

const LeaveReview = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  // Crop states
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null);

  /* -------------------- React Hook Form -------------------- */
 const {
   register,
   handleSubmit,
   reset,
   formState: { errors },
 } = useForm();

  // const imageFile = watch("image");

  /* -------------------- Mobile Focus Only -------------------- */
  const handleFocus = (e) => {
    if (window.innerWidth >= 768) return;

    requestAnimationFrame(() => {
      setTimeout(() => {
        e.target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 250);
    });
  };

  /* -------------------- Submit -------------------- */
  const onSubmit = async (data) => {
    setLoading(true);

    let imageUrl = null;

    try {
      /* ---------- Upload Image if provided ---------- */
     if (croppedFile) {
       const file = croppedFile;
       const fileExt = file.name.split(".").pop();
       const fileName = `${Date.now()}-${Math.random()
         .toString(36)
         .substring(2)}.${fileExt}`;

       const { error: uploadError } = await supabase.storage
         .from("review-images")
         .upload(fileName, file, {
           cacheControl: "3600",
           upsert: false,
         });

       if (uploadError) throw uploadError;

       const { data: publicUrlData } = supabase.storage
         .from("review-images")
         .getPublicUrl(fileName);

       imageUrl = publicUrlData.publicUrl;
     }

      /* ---------- Insert Review ---------- */
      const { error } = await supabase.from("reviews").insert([
        {
          name: data.name,
          role: data.role,
          image_url: imageUrl,
          review: data.review,
        },
      ]);

      if (error) throw error;

      toast.success("Review submitted successfully 🎉");
      reset();
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  /*------------------- Image selection handler ---------------------- */ 

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);

      // Mobile browsers sometimes need a small delay
      setTimeout(() => {
        setCropModalOpen(true);
      }, 150);
    };

    reader.readAsDataURL(file);
  };

  const onCropComplete = (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };


  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();

      image.crossOrigin = "anonymous";

      image.onload = () => resolve(image);
      image.onerror = reject;

      image.src = url;
    });

  const getCroppedImg = async (imageSrc, pixelCrop) => {
    const image = await createImage(imageSrc);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const file = new File([blob], `review-${Date.now()}.jpg`, {
          type: "image/jpeg",
        });

        resolve(file);
      }, "image/jpeg");
    });
  };


 const handleCropSave = async () => {
   const file = await getCroppedImg(imageSrc, croppedAreaPixels);

   setCroppedFile(file);
   setCropModalOpen(false);

   setCrop({ x: 0, y: 0 });
   setZoom(1);

   toast.success("Image selected");
 };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="my-7 cursor-pointer relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-[0.1em]
        text-[var(--text-main)] hover:text-[var(--accent-primary)]
        hover:bg-[var(--accent-primary)]/5
        border border-[var(--border-light)]
        shadow-sm transition-all duration-500"
      >
        <span className="text-[10px] sm:text-xs">LEAVE REVIEW</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md px-4"
        >
          <div
            ref={formRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl rounded-2xl
            bg-[var(--bg-main)] border border-[var(--border-light)]
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6">
              <h2 className="text-3xl heading-font font-medium ">
                Share Your{" "}
                <span className="text-[var(--accent-primary)]">Experience</span>
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Your feedback helps us grow and improve.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name + Image */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    onFocus={handleFocus}
                    placeholder="Enter your name"
                    className="w-full border-b border-[var(--border-light)]
                    bg-transparent px-4 py-3 text-sm outline-none
                    focus:border-[var(--accent-primary)]/50 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Image Upload */}
                <label
                  htmlFor="profile-image-upload"
                  className="cursor-pointer border border-dashed border-[var(--border-light)]
                  rounded-xl px-6 py-3 flex flex-col items-center justify-center
                  text-center bg-[var(--bg-secondary)]/40
                  hover:bg-[var(--bg-secondary)]/70
                  hover:border-[var(--accent-primary)]/60
                  transition-all"
                >
                  {croppedFile ? (
                    <p className="mt-1 text-sm text-[var(--accent-primary)] font-medium">
                      {croppedFile.name}
                    </p>
                  ) : (
                    <p className="text-sm font-medium uppercase text-[var(--text-main)]">
                      Profile Photo
                    </p>
                  )}

                  <p className="mt-1 text-[11px] text-[var(--text-secondary)]/70">
                    Optional : This image will be displayed on the website
                  </p>

                  <input
                    id="profile-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Job Role */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Job Role
                </label>
                <input
                  {...register("role", { required: "Role is required" })}
                  onFocus={handleFocus}
                  placeholder="Senior Software Developer"
                  className="w-full border-b border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm outline-none  focus:border-[var(--accent-primary)]/50"
                />
                {errors.role && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>

              {/* Review */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Review
                </label>
                <textarea
                  {...register("review", { required: "Review is required" })}
                  onFocus={handleFocus}
                  rows="5"
                  placeholder="Write your experience..."
                  className="w-full rounded-xl border border-[var(--border-light)]
                  bg-transparent px-4 py-3 text-sm resize-none outline-none  focus:border-[var(--accent-primary)]/50"
                />
                {errors.review && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.review.message}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="md:col-span-2 flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 rounded-full text-sm
                  bg-[var(--bg-secondary)] border border-[var(--border-light)]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-full text-sm
                  bg-[var(--accent-primary)] text-white disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {cropModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xl p-4">
          <div
            className="
    w-full max-w-xl overflow-hidden
    rounded-xl h-[75vh] md:h-auto
    border border-white/10
    bg-[var(--bg-main)]/95
    shadow-[0_30px_80px_rgba(0,0,0,0.45)]
  "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-[var(--border-light)]">
              <div>
                <h3 className="text-xl heading-font text-[var(--accent-primary)] font-medium tracking-tight">
                  Crop Profile Photo
                </h3>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Drag to reposition your image
                </p>
              </div>

              {/* <button
                onClick={() => setCropModalOpen(false)}
                className="h-10 w-10 rounded-full hover:bg-white/5 transition-all"
              >
                ✕
              </button> */}
            </div>

            {/* Crop Area */}
            <div className="p-6">
              <div
                className=" relative overflow-hidden h-auto w-full aspect-square rounded border border-[var(--border-light)] bg-[var(--bg-main)] "
              >
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  cropShape="round"
                  showGrid={true}
                  zoomWithScroll
                  // objectFit="cover"
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>

              <p className="mt-4 text-center text-[8px] tracking-wide text-[var(--text-secondary)] uppercase">
                Pinch or scroll to zoom • Drag to reposition
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-5 border-t border-[var(--border-light)]">
              <button
                onClick={() => setCropModalOpen(false)}
                className="
            px-6 py-2.5 rounded-full
            border border-[var(--border-light)]
            bg-[var(--bg-secondary)]
            text-sm
            transition-all
            hover:bg-[var(--bg-secondary)]/70
          "
              >
                Cancel
              </button>

              <button
                onClick={handleCropSave}
                className="
            px-7 py-2.5 rounded-full
            bg-[var(--accent-primary)]
            text-white text-sm
            shadow-lg
            hover:opacity-90
            transition-all
          "
              >
                Save Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaveReview;
