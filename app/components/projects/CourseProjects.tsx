import { ReactNode } from "react";

export default function CourseProjects({ children }: { children: ReactNode }) {
  return <div className="coursework-project">{children}</div>;
}

CourseProjects.Course = ({ children }: { children: ReactNode }) => (
  <h5 className="coursework-project__course">{children}</h5>
);

CourseProjects.Title = ({ children }: { children: ReactNode }) => (
  <h4 className="coursework-project__title">{children}</h4>
);

CourseProjects.Body = ({ children }: { children: ReactNode }) => (
  <p className="coursework-project__body">{children}</p>
);
