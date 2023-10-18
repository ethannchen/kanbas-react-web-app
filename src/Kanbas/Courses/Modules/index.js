import ModuleList from "./ModuleList";
function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <div id="home-screen-buttons  ">
            <div  className="d-flex justify-content-end mb-4">
              <button  className="btn btn-secondary float-end me-1">
                Collapse All
              </button>
              <button  className="btn btn-secondary float-end me-1">
                View Progress
              </button>

              <div  className="dropdown me-1">
                <button
                   className="btn btn-secondary dropdown-toggle"
                  type="button"
                >
                  Publish All
                </button>
                <ul  className="dropdown-menu">
                  <li>
                    <a  className="dropdown-item" role="button" href="#">Action</a>
                  </li>
                  <li>
                    <a  className="dropdown-item" role="button" href="#"
                      >Another action</a
                    >
                  </li>
                  <li>
                    <a  className="dropdown-item" role="button" href="#"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>

              <button  className="btn btn-danger float-end me-1">
                <i  className="fas fa-plus"></i> Module
              </button>
              <button  className="btn btn-secondary">
                <i  className="fa fa-ellipsis-v"></i>
              </button>
            </div>
            <hr />
          </div>
      <ModuleList />
    </div>
  );
}
export default Modules;