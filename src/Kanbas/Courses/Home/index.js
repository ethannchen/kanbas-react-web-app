import ModuleList from "../Modules/ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="m-3 d-flex flex-row">
      <div className="wd-main-col-1 me-4 col">
        <div id="home-screen-buttons  ">
          <div className="d-flex justify-content-end mb-4">
            <button className="btn btn-secondary float-end me-1">
              Collapse All
            </button>
            <button className="btn btn-secondary float-end me-1">
              View Progress
            </button>

            <div className="dropdown me-1">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
              >
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

      <div className="wd-main-col-2 " style={{ width: 350 }}>
        <div id="course-status" className="">
          <p className="h6">Course Status</p>
          <div id="course-status-buttons">
            <button className="btn btn-secondary me-1">Unpublish</button>
            <button className="btn btn-success">Published</button>
          </div>

          <ul id="course-status-list" className="list-group mt-2 rounded-0">
            <a className="list-group-item-action list-group-item" href="#">
              Import Existing Content
            </a>
            <a className="list-group-item-action list-group-item" href="#">
              Import From Commons
            </a>
            <a className="list-group-item-action list-group-item" href="#">
              Choose Home Page
            </a>
            <a className="list-group-item-action list-group-item" href="#">
              View Course Stream
            </a>
            <a className="list-group-item-action list-group-item" href="#">
              New Announcement
            </a>
            <a className="list-group-item-action list-group-item" href="#">
              New Analytics
            </a>
            <a className="list-group-item-action list-group-item" href="#">
              View Course Notifications
            </a>
          </ul>
        </div>

        <div className="mt-4 ">
          <h6>To Do</h6>
          <hr />
          <a
            href="#"
            className="text-danger"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Grade A1 - ENV + HTML
          </a>
          <p className="text-secondary">100 points - Sep 18 at 11:59pm</p>
        </div>

        <div id="coming-up">
          <div className="mt-4">
            <h6>
              Coming up
              <div className="float-end">
                <a
                  href="#"
                  className="text-danger small"
                  style={{ textDecoration: "none" }}
                >
                  View Calendar
                </a>
              </div>
            </h6>
            <p className="h6 mt-3"></p>
          </div>
          <hr />

          <ul id="coming-up-list" className="list-group">
            <a
              href="#"
              className="list-group-item bg-white text-danger border-0"
            >
              Lecture CS4550.12631.202410 Sep 7 at 11:45am
            </a>
            <a
              href="#"
              className="list-group-item bg-white text-danger border-0"
            >
              Lecture CS4550.12631.202410 Sep 11 at 11:45am
            </a>
            <a
              href="#"
              className="list-group-item bg-white text-danger border-0"
            >
              Lecture CS5610 06 SP23 Lecture Sep 11 at 6pm
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
