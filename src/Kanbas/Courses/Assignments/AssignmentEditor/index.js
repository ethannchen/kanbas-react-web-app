import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
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
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { courseId } = useParams();
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  // const [assignment, setAssignment] = useState(
  //   assignments.find((assignment) => assignment._id === assignmentId)
  // );
  const dispatch = useDispatch();

  useEffect(() => {
    if (assignmentId === "new") {
      dispatch(
        setAssignment({
          title: "New Assignment",
          description: "New Assignment Description",
          points: "100",
          dueDate: "",
          availableFromDate: "",
          availableUntilDate: "",
        })
      );
    } else {
      dispatch(
        setAssignment(
          assignments.find((assignment) => assignment._id === assignmentId)
        )
      );
    }
  }, []);

  const handleSave = () => {
    if (assignmentId === "new") {
      console.log("Add a new assignment");
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      console.log("Actually saving assignment TBD in later assignments");
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="m-3">
      <div className="d-flex flex-row justify-content-end">
        <div id="button-group" className="">
          <button className="btn  me-1 text-success">
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />{" "}
            Published
          </button>

          <button className="btn btn-secondary me-1">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>

      <hr />

      <div className="m-3">
        <h6>Assignment Name</h6>
        <input
          value={assignment.title}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
          className="form-control mb-2"
        />
      </div>

      <div className="m-3">
        <h6>Description</h6>
        <textarea
          value={assignment.description}
          onChange={(e) =>
            dispatch(
              setAssignment({ ...assignment, description: e.target.value })
            )
          }
          className="form-control mb-2"
        />
      </div>

      <div className="m-3">
        <div className="row float-right">
          <div className="col col-2">
            <h6>Points</h6>
          </div>
          <div className="col col-6">
            <input
              value={assignment.points}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, points: e.target.value })
                )
              }
              className="form-control mb-2"
            />
          </div>
        </div>
      </div>

      <div className="m-3">
        <div className="row float-right">
          <div className="col col-2">
            <h6>Assign</h6>
          </div>
          <div className="col  col-6">
            <h6>Due</h6>
            <input
              value={assignment.dueDate}
              type="date"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, dueDate: e.target.value })
                )
              }
              className="form-control mb-2"
            />
            <div className="row">
              <div className="col">
                <h6>Available From</h6>
              </div>
              <div className="col">
                <h6>Until</h6>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  value={assignment.availableUntilDate}
                  type="date"
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableUntilDate: e.target.value,
                      })
                    )
                  }
                  className="form-control mb-2"
                />
              </div>{" "}
              <div className="col">
                <input
                  value={assignment.availableFromDate}
                  type="date"
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableFromDate: e.target.value,
                      })
                    )
                  }
                  className="form-control mb-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="float-end">
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
