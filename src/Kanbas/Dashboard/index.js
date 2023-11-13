import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="m-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (3)</h2>
      <hr />
      <h5>Course</h5>
      <div className="form-control ">
        <div className="row d-flex">
          <input
            value={course.name}
            className="form-control col m-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control col m-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>
        <div className="row d-flex">
          <input
            value={course.startDate}
            className="form-control col m-2"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control col m-2"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success  m-2" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-primary  m-2" onClick={updateCourse}>
            Update
          </button>
        </div>
      </div>

      <div className="list-group d-flex flex-row flex-wrap justify-content-start">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item col col-12 col-md-6  col-lg-4 col-xl-3 border-0 "
            style={{ margin: "15px" }}
          >
            <div className="card " style={{ width: "270px" }}>
              <div
                className="card-header overflow-hidden p-0"
                // style="width: 270px; height: 150px; background: darkgreen"
              >
                <img
                  className="card-img-top w-100"
                  src="../images/course-card.avif"
                  alt="Card banner"
                ></img>
                {/* <img src="../images/course-card.avif" style={{width:"270px", height:"150px"}}/> */}
              </div>
              <div className="card-body">
                <h5 className="card-title small text-submit overflow-hidden">
                  {course.number} {course._id} {course.name}
                </h5>
                <p className="card-text lead mb-1">{course.name}</p>
                <p className="card-text small">
                  {course.startDate} {course.endDate}
                </p>
                <button
                  className="btn btn-warning me-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger me-2"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
