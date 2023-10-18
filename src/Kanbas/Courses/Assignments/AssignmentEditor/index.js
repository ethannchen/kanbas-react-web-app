import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="d-flex flex-row justify-content-end">
        
        <div id="button-group" className="">
          <button className="btn  me-1 text-success">
          <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/> Published
          </button>
          
          <button className="btn btn-secondary me-1">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>

      <hr />

      <h6>Assignment Name</h6>
      <input value={assignment.title} className="form-control mb-2" />

      <div class="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
