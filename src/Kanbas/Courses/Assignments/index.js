import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical,faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="me-4">
    <h2>Assignments for course {courseId}</h2>
    <div  className="d-flex flex-row justify-content-between">
            <input
              type="text"
              placeholder="Search for Assignments"
               className="form-control w-25"
            />
            <div id="button-group"  className="">
              <button  className="btn btn-secondary me-1">
              <FontAwesomeIcon icon={faPlus} /> Group
              </button>
              <button  className="btn btn-danger me-1">
              <FontAwesomeIcon icon={faPlus} />Assignment
              </button>
              <button  className="btn btn-secondary me-1">
              <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </div>

          <hr />


      
      <div className="list-group rounded-0">
        {courseAssignments.map((assignment) => (
          
          
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="  list-group-item    d-flex justify-content-between align-items-center">
            {assignment.title}
            <div  className="float-end">
            <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                <i  className="fas fa-check-circle" ></i>
                <button  className="btn border-0">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;