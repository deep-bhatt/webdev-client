import Link from "next/link";

const INPUT =
  "w-full rounded border border-neutral-300 bg-white px-3 py-2 font-sans text-sm";
const ROW = "mb-4 flex flex-col gap-1 md:flex-row md:gap-4";
const ROW_LABEL = "pt-2 text-sm md:w-1/3 md:shrink-0 md:text-right";
const BOX = "flex-1 rounded border border-neutral-300 p-4";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm">
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={INPUT} />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className="mb-1 block text-sm">
          Description
        </label>
        <textarea
          id="wd-description"
          rows={6}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className={INPUT}
        />
      </div>

      <div className={ROW}>
        <label htmlFor="wd-points" className={ROW_LABEL}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={INPUT} />
      </div>
      <div className={ROW}>
        <label htmlFor="wd-group" className={ROW_LABEL}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={INPUT}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className={ROW}>
        <label htmlFor="wd-display-grade-as" className={ROW_LABEL}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={INPUT}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>
      <div className={ROW}>
        <label htmlFor="wd-submission-type" className={ROW_LABEL}>
          Submission Type
        </label>
        <div className={BOX}>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={INPUT}
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mt-4 mb-2 text-sm font-semibold">
            Online Entry Options
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" /> Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" /> Website URL
            </label>
            <label
              htmlFor="wd-media-recordings"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-media-recordings" /> Media
              Recordings
            </label>
            <label
              htmlFor="wd-student-annotation"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-student-annotation" /> Student
              Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" /> File Uploads
            </label>
          </div>
        </div>
      </div>
      <div className={ROW}>
        <span className={ROW_LABEL}>Assign</span>
        <div className={BOX}>
          <label
            htmlFor="wd-assign-to"
            className="mb-1 block text-sm font-semibold"
          >
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={INPUT} />
          <label
            htmlFor="wd-due-date"
            className="mt-4 mb-1 block text-sm font-semibold"
          >
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2024-05-13"
            className={INPUT}
          />
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block text-sm font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
                className={INPUT}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block text-sm font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className={INPUT}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={INPUT} />
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
