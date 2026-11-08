import type { ReactNode } from "react";

export default function Module({
  title,
  controls,
  children,
}: {
  title: ReactNode;
  controls?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between gap-2 bg-neutral-200 p-3 ps-2">
        <span className="min-w-0 flex-1">{title}</span>
        {controls}
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
