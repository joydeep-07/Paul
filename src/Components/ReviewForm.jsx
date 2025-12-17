import React from "react";

const ReviewForm = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-main)]">
        Leave a Review
      </h2>

      <form className="flex flex-col gap-4 flex-1">
        <input
          type="text"
          placeholder="Your Name"
          className="border px-4 py-3 rounded-lg bg-transparent outline-none"
        />

        <textarea
          placeholder="Your Review"
          className="border px-4 py-3 rounded-lg bg-transparent outline-none resize-none flex-1"
        />

        <button className="self-end px-6 py-3 rounded-full border-2 border-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-white transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
