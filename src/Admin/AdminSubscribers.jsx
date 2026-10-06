import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { FaTrash, FaUser } from "react-icons/fa";
import DeleteModal from "../Components/DeleteModal";
import { Trash2, User } from "lucide-react";

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
    <div className="w-full flex flex-col items-center">
      {/* CONTENT */}
      {loading ? (
        <div className="w-full flex justify-center items-center py-16 border border-[var(--border-light)]/40 rounded-xl bg-[var(--bg-secondary)]/30">
          <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest animate-pulse font-medium">
            Loading subscribers...
          </p>
        </div>
      ) : subscribers.length === 0 ? (
        <div className="w-full text-center py-16 border border-dashed border-[var(--border-light)]/60 rounded-xl bg-[var(--bg-secondary)]/30 px-4">
          <p className="text-xs text-[var(--text-secondary)] font-medium">
            No subscribers found yet.
          </p>
        </div>
      ) : (
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {subscribers.map((sub, index) => (
              <div
                key={sub.id || index}
                className="flex items-center justify-between gap-3 px-4 py-3 border border-[var(--border-light)]/50 bg-[var(--bg-secondary)]/50 rounded-full hover:border-[var(--accent-primary)]/20 hover:bg-[var(--bg-secondary)] transition-all shadow-2xs group"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                    <User size={13} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm text-[var(--text-main)] truncate">
                      {sub.name || "Anonymous"}
                    </h3>
                    <p className="text-[11px] text-[var(--text-secondary)] truncate font-mono text-[var(--text-secondary)]/70 opacity-90">
                      {sub.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => promptDelete(sub)}
                  className="flex-shrink-0 p-2 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors cursor-pointer"
                  title="Remove Subscriber"
                >
                  <Trash2 size={11} />
                </button>
              </div>
            ))}
          </div>

          {/* SLEEK TOTAL SUBSCRIBER COUNT AT THE BOTTOM CENTER */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-[var(--text-secondary)]">
              <span>Total </span>
              <span className="font-semibold text-[var(--accent-primary)]">
                {subscribers.length}
              </span>
              <span>Subscribers Found</span>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL OVERLAY */}
      {subscriberToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <DeleteModal
            title="Remove Subscriber"
            description={`Are you sure you want to remove ${subscriberToDelete.email} from your newsletter list?`}
            onCancel={() => setSubscriberToDelete(null)}
            onConfirm={handleDeleteConfirm}
          />
        </div>
      )}
    </div>
  );
};

export default AdminSubscribers;
