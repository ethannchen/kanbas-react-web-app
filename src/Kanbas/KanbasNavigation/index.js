import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faN,
  faUserCircle,
  faTachometer,
  faBook,
  faCalendar,
  faInbox,
  faClock,
  faSitemap,
  faArrowRightFromBracket,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
// import "../index.css";

function KanbasNavigation() {
  const names = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const links = [
    "Account",
    "Dashboard",
    "Courses/RS101",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const icons = [
    faUserCircle,
    faTachometer,
    faBook,
    faCalendar,
    faInbox,
    faClock,
    faSitemap,
    faArrowRightFromBracket,
    faQuestionCircle,
  ];
  const { pathname } = useLocation();
  return (
    <div
      className="list-group bg-dark m-0 p-0 rounded-0 small"
      style={{ width: "85px" }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item list-group-item-action  border-0 d-flex flex-column align-items-center ${
            pathname.includes(link)
              ? "bg-white text-danger"
              : "bg-dark text-light"
          }`}
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon
            className="wd-nav-icon fa-2x m-1"
            style={{ color: "red" }}
            icon={icons[index]}
          />
          {names[index]}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
