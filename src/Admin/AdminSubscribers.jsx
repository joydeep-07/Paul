import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { FaCrown, FaTrash, FaEnvelope, FaUser } from "react-icons/fa";
import DeleteModal from "../Components/DeleteModal";

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  // State to track the subscriber targeted for deletion by the modal
  const [subscriberToDelete, setSubscriberToDelete] = useState(null);

  // Fetch subscribers from Supabase on component mount
  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error(error.message);
      } else {
        setSubscribers(data || []);
      }
    } catch (err) {
      toast.error("Failed to fetch subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // Open the Delete Modal for a specific subscriber
  const promptDelete = (sub) => {
    setSubscriberToDelete(sub);
  };

  // Confirm and execute deleting a subscriber
  const handleDeleteConfirm = async () => {
    if (!subscriberToDelete) return;

    const id = subscriberToDelete.id;

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .delete()
        .eq("id", id);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Subscriber removed successfully");
        setSubscribers((prev) => prev.filter((sub) => sub.id !== id));
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSubscriberToDelete(null);
    }
  };

  return (
    <div className="w-full relative">
      {/* CONTENT */}
      {loading ? (
        <div className="flex justify-center items-center py-16 border border-[var(--border-light)]/50 rounded-lg bg-[var(--bg-secondary)]/50">
          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest animate-pulse">
            Loading subscribers...
          </p>
        </div>
      ) : subscribers.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-[var(--border-light)] rounded-lg bg-[var(--bg-secondary)]/50 px-4">
          <p className="text-xs text-[var(--text-secondary)]">
            No subscribers found yet.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {subscribers.map((sub, index) => (
            <div
              key={sub.id || index}
              className="flex items-center justify-between gap-4 p-4 border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-lg hover:border-[var(--accent-primary)]/30 transition-colors"
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)]">
                  <FaUser size={14} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-semibold text-sm sm:text-base text-[var(--text-main)] truncate">
                    {sub.name || "Anonymous Subscriber"}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] truncate opacity-90">
                    {sub.email}
                  </p>
                  {sub.created_at && (
                    <p className="text-[10px] text-[var(--text-secondary)]/60 mt-0.5 uppercase tracking-wider">
                      Joined: {new Date(sub.created_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => promptDelete(sub)}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-md text-xs font-medium transition-colors cursor-pointer"
                title="Remove Subscriber"
              >
                <FaTrash size={12} />
                <span className="hidden sm:inline">Remove</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* DELETE MODAL OVERLAY */}
      {subscriberToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <DeleteModal
            onCancel={() => setSubscriberToDelete(null)}
            onConfirm={handleDeleteConfirm}
          />
        </div>
      )}
    </div>
  );
};

export default AdminSubscribers;
