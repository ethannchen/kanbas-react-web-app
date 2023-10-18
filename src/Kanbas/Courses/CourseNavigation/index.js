import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div
      className="list-group"
      style={{ width: 150}}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item   rounded-0   ${
            pathname.includes(link)
              ? "text-dark border-top-0 border-bottom-0 border-end-0 border-left border-2 border-dark"
              : "text-danger border-0"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
