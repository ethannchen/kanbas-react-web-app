import ModuleList from "./ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Modules() {
  return (
    <div className="m-3">
      <div id="home-screen-buttons  ">
        <div className="d-flex justify-content-end mb-4">
          <button className="btn btn-secondary float-end me-1">
            Collapse All
          </button>
          <button className="btn btn-secondary float-end me-1">
            View Progress
          </button>

          <div className="dropdown me-1">
            <button className="btn btn-secondary dropdown-toggle" type="button">
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" role="button" href="#">
                  Action
                </a>
              </li>
            </ul>
          </div>

          <button className="btn btn-danger float-end me-1">
            <FontAwesomeIcon icon={faPlus} /> Module
          </button>
          <button className="btn btn-secondary">
            <FontAwesomeIcon icon={faEllipsisVertical} />{" "}
          </button>
        </div>
        <hr />
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
