import { Trash2 } from "lucide-react";

export default function DeleteModal({ onCancel, onConfirm }) {
  return (
    <div className="flex flex-col items-center bg-[var(--bg-main)] shadow-md rounded-sm py-6 px-5 md:w-[460px] w-[370px] border border-[var(--border-light)]/40">
      <div className="flex items-center justify-center p-4 bg-red-500/10 border border-red-500/20 rounded-full">
        <Trash2 className="text-red-500" size={21} />
      </div>

      <h2 className="text-[var(--text-main)] font-semibold mt-4 text-xl">
        Do you want to delete ?
      </h2>

      <p className="text-xs text-[var(--text-secondary)]/70 mt-2 text-center">
        Are you sure you want to delete this item?
        <br />
        This action cannot be undone.
      </p>

      <div className="flex items-center justify-center gap-4 mt-5 w-full">
        <button
          onClick={onCancel}
          className="w-full cursor-pointer md:w-36 h-10 rounded-sm border border-[var(--border-light)] bg-[var(--text-main)] text-[var(--bg-main)] font-medium text-sm"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="w-full cursor-pointer md:w-36 h-10 rounded-sm text-white bg-red-500 font-medium text-sm hover:bg-red-600 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
