import db from "../../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical,faCircleCheck, faFileImport, faFileExport, faGear, faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";



function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div  className="me-4">
      <h1>Grades</h1>

      <div id="grades-button-group"  className="d-flex justify-content-end">
            <button  className="btn btn-secondary me-2">
              
              <FontAwesomeIcon icon={faFileImport} className="me-1"/>
              Import
            </button>
            <button  className="btn btn-secondary me-2">
            <FontAwesomeIcon icon={faFileExport}  className="me-1"/>
Export
            </button>
            <button  className="btn btn-secondary">
              <FontAwesomeIcon icon={faGear} />
            </button>
          </div>

          <div  className="row mt-3">
            <div  className="col h6">Student Names</div>
            <div  className="col h6">Assignment Names</div>
          </div>
          <div  className="row">
            <div  className="col">
              <div  className="input-group">
                <span  className="input-group-text bg-white"
                  >              <FontAwesomeIcon icon={faSearch} />
</span>
                <input
                  type="text"
                  name="filter-grades"
                  id="filter-by-student-name"
                  placeholder="Search Students"
                   className="form-control"
                />
              </div>
            </div>
            <div  className="col">
              <div  className="input-group">
                <span  className="input-group-text bg-white"
                  >              <FontAwesomeIcon icon={faSearch} />
</span>
                <input
                  type="text"
                  name="filter-grades"
                  id="filter-by-assignment-name"
                  placeholder="Search Assignments"
                   className="form-control"
                />
              </div>
            </div>
          </div>

          <div id="grades-filter-buttons"  className="">
            <button  className="btn btn-secondary mt-3 mb-3">
              <FontAwesomeIcon icon={faFilter} className="me-1"/>

              Apply Filters
            </button>
          </div>

      <div className="table-responsive-lg">
        <table className="table table-striped col-10" style={{overflow: "auto"}}>
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;