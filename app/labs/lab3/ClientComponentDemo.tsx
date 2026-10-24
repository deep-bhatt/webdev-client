"use client";

import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();
  return (
    <div id="wd-client-component-demo">
      <h1>Client Component Demo</h1>
      <p>Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
      <p>Last segment: {lastSegment}</p>
    </div>
  );
}
