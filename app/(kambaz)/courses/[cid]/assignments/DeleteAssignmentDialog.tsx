export default function DeleteAssignmentDialog({
  title,
  onYes,
  onNo,
}: {
  title: string;
  onYes: () => void;
  onNo: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      id="wd-delete-assignment-dialog"
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="border-b border-neutral-200 px-4 py-3">
          <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
        </div>
        <p className="m-0 px-4 py-3">
          Are you sure you want to remove <b>{title}</b>?
        </p>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
          <button
            type="button"
            onClick={onNo}
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            id="wd-delete-assignment-no"
          >
            No
          </button>
          <button
            type="button"
            onClick={onYes}
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            id="wd-delete-assignment-yes"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
