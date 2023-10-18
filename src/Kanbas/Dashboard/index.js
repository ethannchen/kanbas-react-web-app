import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  return (
    <div className="m-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (3)</h2>
      <div className="list-group d-flex flex-row flex-wrap justify-content-start">
        {db.courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item col col-12 col-md-6 col-lg-4 col-xxl-3 border-0 "
            style={{ margin: "15px" }}
          >
            <div className="card " style={{ width: "270px" }}>
              <div
                className="card-header overflow-hidden p-0"
                // style="width: 270px; height: 150px; background: darkgreen"
              >
                <img
                  class="card-img-top w-100"
                  src="../images/course-card.avif"
                  alt="Card image cap"
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
