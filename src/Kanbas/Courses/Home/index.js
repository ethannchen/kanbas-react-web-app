import ModuleList from "../Modules/ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="me-4">
      <h2>Home</h2>
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
      <h2>Status</h2>
    </div>
  );
}
export default Home;