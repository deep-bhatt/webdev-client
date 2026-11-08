"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";

const FIELD =
  "block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      <div id="wd-course-form" className="mt-2 mb-3 flex flex-col gap-2">
        <input
          className={FIELD}
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          id="wd-course-name"
          placeholder="Course name"
        />
        <textarea
          className={FIELD}
          rows={3}
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          id="wd-course-description"
          placeholder="Course description"
        />
        <input
          className={FIELD}
          value={course.number}
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          id="wd-course-number"
          placeholder="Course number"
        />
        <input
          type="date"
          className={FIELD}
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          id="wd-course-start-date"
        />
      </div>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard key={c._id} course={c} onEdit={() => setCourse(c)} />
        ))}
      </div>
    </div>
  );
}
