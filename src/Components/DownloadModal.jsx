import { DownloadCloud } from "lucide-react";

export default function DownloadModal({ onCancel, onConfirm }) {
  return (
    <div className="flex flex-col items-center bg-[var(--bg-main)] shadow-md rounded-sm py-6 px-5 md:w-[460px] w-[370px] border border-[var(--border-light)]/40 ">
      <div className="flex items-center justify-center p-4 bg-[var(--accent-primary)]/10 border border-[var(--border-light)] rounded-full">
        <DownloadCloud className=" text-[var(--accent-primary)] " />
      </div>

      <h2 className="text-[var(--text-main)] font-semibold mt-4 text-xl">
        Are you sure?
      </h2>

      <p className="text-sm text-[var(--text-secondary)] mt-2 text-center">
        Do you really want to continue? This action
        <br />
        cannot be undone.
      </p>

      <div className="flex items-center justify-center gap-4 mt-5 w-full">
        <button
          onClick={onCancel}
          className="w-full cursor-pointer md:w-36 h-10 rounded-sm border border-[var(--border-light)] bg-[var(--text-main)] text-[var(--bg-main)] font-medium text-sm "
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="w-full cursor-pointer md:w-36 h-10 rounded-sm text-white bg-green-600 font-medium text-sm hover:bg-green-700"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
