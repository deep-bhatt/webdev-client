"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { _id: string; name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const segments = pathname.split("/");
  const last = segments.pop() ?? "";
  const section = last === "table" ? segments.pop() ?? "" : last;
  const label = section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <span>
      {course?.name} {course && `(${course._id})`} &gt; {label}
    </span>
  );
}
