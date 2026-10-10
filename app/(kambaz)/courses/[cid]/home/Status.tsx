import { FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import {
  LiaBellSolid,
  LiaBullhornSolid,
  LiaChartBarSolid,
  LiaCrosshairsSolid,
  LiaFileImportSolid,
} from "react-icons/lia";
import { IoStatsChart } from "react-icons/io5";

const ACTION =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm";
const ICON = "me-2 shrink-0 text-lg";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mt-0 mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border-0 bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={ACTION}>
        <BiImport className={ICON} /> Import Existing Content
      </button>
      <button type="button" className={ACTION}>
        <LiaFileImportSolid className={ICON} /> Import from Commons
      </button>
      <button type="button" className={ACTION}>
        <LiaCrosshairsSolid className={ICON} /> Choose Home Page
      </button>
      <button type="button" className={ACTION}>
        <LiaChartBarSolid className={ICON} /> View Course Stream
      </button>
      <button type="button" className={ACTION}>
        <LiaBullhornSolid className={ICON} /> New Announcement
      </button>
      <button type="button" className={ACTION}>
        <IoStatsChart className={ICON} /> New Analytics
      </button>
      <button type="button" className={ACTION}>
        <LiaBellSolid className={ICON} /> View Course Notifications
      </button>
      <button type="button" id="wd-ai-status" className={ACTION}>
        <FaRegLightbulb className={ICON} /> Sample action
      </button>
    </div>
  );
}
