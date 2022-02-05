import { ReactNode } from "react";

export default function CourseworkProject({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}

CourseworkProject.Title = ({ children }: { children: ReactNode }) => (
  <h4 className="coursework-project__title">{children}</h4>
);

CourseworkProject.Course = ({ children }: { children: ReactNode }) => (
  <h5 className="coursework-project__course">{children}</h5>
);

CourseworkProject.Body = ({ children }: { children: ReactNode }) => (
  <p className="coursework-project__body">{children}</p>
);
