import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden animate-pulse">
      {/* Header */}
      <div className="flex items-center p-4">
        {/* Avatar */}
        <div className="w-[88px] h-[88px] rounded-full bg-[var(--bg-main)] mr-4" />

        {/* Name & Position */}
        <div className="flex-1">
          <div className="h-4 w-40 bg-[var(--bg-main)] rounded mb-2" />
          <div className="h-3 w-28 bg-[var(--bg-main)] rounded opacity-70" />
        </div>
      </div>

      {/* Review text */}
      <div className="px-4 pb-4 space-y-2">
        <div className="h-3 w-full bg-[var(--bg-main)] rounded" />
        <div className="h-3 w-full bg-[var(--bg-main)] rounded" />
        <div className="h-3 w-11/12 bg-[var(--bg-main)] rounded" />
        <div className="h-3 w-4/5 bg-[var(--bg-main)] rounded" />
      </div>
    </div>
  );
};

export default ReviewSkeleton;
