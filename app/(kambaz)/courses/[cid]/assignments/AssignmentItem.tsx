import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const [confirming, setConfirming] = useState(false);
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <FaTrash
        className="wd-delete-assignment mt-1 shrink-0 cursor-pointer text-red-600"
        onClick={() => setConfirming(true)}
        title="Delete assignment"
      />
      {confirming && (
        <DeleteAssignmentDialog
          title={title}
          onYes={() => {
            deleteAssignment(aid);
            setConfirming(false);
          }}
          onNo={() => setConfirming(false)}
        />
      )}
    </li>
  );
}
