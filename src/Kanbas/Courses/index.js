import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faCircleCheck,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({ courses }) {
  const URL = "http://localhost:4000/api/courses";
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, _course, id, screen] = pathname.split("/");
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  // const course = courses.find((course) => course._id === courseId);
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="ms-4 mt-2 mb-0 ">
      <div className="d-flex flow-row align-text-center">
        <p className="text-danger">
          <FontAwesomeIcon
            className="me-2"
            icon={faBars}
            style={{ color: "red" }}
          />
          {course.name}&nbsp;
        </p>
        <p> / {screen}</p>
      </div>
      <hr className="m-0 p-0" />

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
