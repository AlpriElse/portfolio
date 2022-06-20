import { ReactNode } from "react";

export default function CourseProject({
  title,
  course,
  children,
}: {
  course: String;
  title: String;
  children: ReactNode;
}) {
  return (
    <div className="coursework-project">
      <div>
        <p className="coursework-project__title">{title}</p>
        <p className="coursework-project__course">{course}</p>
      </div>
      <div style={{ paddingTop: "1em" }}>{children}</div>
    </div>
  );
}
