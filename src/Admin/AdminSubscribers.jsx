import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";
import { FaCrown, FaTrash, FaEnvelope, FaUser } from "react-icons/fa";

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subscribers from Supabase on component mount
  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("created_at", { ascending: false }); // Show newest first if you have a timestamp column

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

  // Optional: Handle deleting a subscriber
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to remove this subscriber?"))
      return;

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .delete()
        .eq("id", id);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Subscriber removed successfully");
        setSubscribers(subscribers.filter((sub) => sub.id !== id));
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full bg-[var(--bg-main)] min-h-screen py-10 px-4 sm:px-8 lg:px-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="heading-font text-2xl sm:text-3xl text-[var(--text-main)] flex items-center gap-2">
              Newsletter{" "}
              <span className="text-[var(--accent-primary)]">Subscribers</span>
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
              Manage and view everyone who has subscribed to your developer
              updates.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--border-light)]/20 border border-[var(--border-light)] px-4 py-2 rounded-md self-start sm:self-auto">
            <FaCrown className="text-[var(--accent-primary)] text-sm" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-main)]">
              Total: {subscribers.length}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest animate-pulse">
              Loading subscribers...
            </p>
          </div>
        ) : subscribers.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[var(--border-light)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)]">
              No subscribers found yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[var(--border-light)] rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-light)] bg-[var(--border-light)]/10 text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.2em]">
                  <th className="py-3 px-4 sm:px-6 font-semibold">#</th>
                  <th className="py-3 px-4 sm:px-6 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-[10px]" /> Name
                    </span>
                  </th>
                  <th className="py-3 px-4 sm:px-6 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <FaEnvelope className="text-[10px]" /> Email
                    </span>
                  </th>
                  <th className="py-3 px-4 sm:px-6 font-semibold">
                    Subscribed Date
                  </th>
                  <th className="py-3 px-4 sm:px-6 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-light)] text-xs text-[var(--text-main)]">
                {subscribers.map((sub, index) => (
                  <tr
                    key={sub.id || index}
                    className="hover:bg-[var(--border-light)]/5 transition-colors"
                  >
                    <td className="py-3.5 px-4 sm:px-6 text-[var(--text-secondary)] font-medium">
                      {index + 1}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-medium">
                      {sub.name}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[var(--text-secondary)]">
                      {sub.email}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[var(--text-secondary)]">
                      {sub.created_at
                        ? new Date(sub.created_at).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded transition-colors"
                        title="Delete subscriber"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSubscribers;
