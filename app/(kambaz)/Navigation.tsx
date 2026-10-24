"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoFlaskOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import {
  FaCircleQuestion,
  FaClockRotateLeft,
  FaInbox,
  FaRegCircleUser,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", id: "wd-dashboard-link", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", id: "wd-course-link", icon: LiaBookSolid },
  { label: "Calendar", path: "/calendar", id: "wd-calendar-link", icon: IoCalendarOutline },
  { label: "Inbox", path: "/inbox", id: "wd-inbox-link", icon: FaInbox },
  { label: "Labs", path: "/labs", id: "wd-labs-link", icon: IoFlaskOutline },
  { label: "History", path: "/history", id: "wd-history-link", icon: FaClockRotateLeft },
  { label: "Help", path: "/labs", id: "wd-ai-nav-help", icon: FaCircleQuestion },
] as const;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const accountActive = pathname.includes("/account");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 left-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline ${
          accountActive ? "bg-white text-red-600" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${
            accountActive ? "text-red-600" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active =
          link.label === "Courses"
            ? pathname.includes("/courses")
            : link.label !== "Help" && pathname.includes(link.path);
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={link.id}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
