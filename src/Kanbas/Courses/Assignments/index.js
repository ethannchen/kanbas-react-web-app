import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  // const assignments = db.assignments;
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  return (
    <div className="m-3">
      <div className="d-flex flex-row justify-content-between">
        <input
          type="text"
          placeholder="Search for Assignments"
          className="form-control w-25"
        />
        <div id="button-group" className="">
          <button className="btn btn-secondary me-1">
            <FontAwesomeIcon icon={faPlus} /> Group
          </button>
          {/* <button className="btn btn-danger me-1">
            <FontAwesomeIcon icon={faPlus} />
            Assignment
          </button> */}
          <Link
            
            to={`/Kanbas/Courses/${courseId}/Assignments/new`}
            className="btn btn-danger me-1">          
            <FontAwesomeIcon icon={faPlus} />
            Assignment
          </Link>
          <button className="btn btn-secondary me-1">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>

      <hr />

      <div className="list-group rounded-0">
        <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
          <div>
            <span>ASSIGNMENTS</span>
          </div>
          <div>
            <span className="border border-secondary small rounded-pill p-1">
              40% of Total
            </span>
            <button className="btn btn-outline-secondary border-0"></button>
            <button className="btn btn-outline-secondary border-0"></button>
            <button className="btn border-0">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </li>

        {assignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {assignment.title}
              <div className="float-end">
                <button
                  className="btn btn-danger m-1 "
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteAssignment(assignment._id));
                  }}
                >
                  Delete
                </button>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "green" }}
                />
                <i className="fas fa-check-circle"></i>
                <button className="btn border-0">
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
