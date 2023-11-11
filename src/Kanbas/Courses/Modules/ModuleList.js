import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();

  // const modules = db.modules.filter((module) => module.course === courseId);

  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <>
      <ul className="list-group rounded-0">
        {/* {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))} */}
        {/* <li className="list-group-item">
          <button
            onClick={() => {
              addModule(module);
            }}
          >
            Add
          </button>
          <button onClick={updateModule}>Update</button>

          <input
            value={module.name}
            onChange={(e) =>
              setModule({
                ...module,
                name: e.target.value,
              })
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              setModule({
                ...module,
                description: e.target.value,
              })
            }
          />
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                onClick={(event) => {
                  setModule(module);
                }}
              >
                Edit
              </button>

              <button onClick={() => deleteModule(module._id)}>Delete</button>

              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </li>
          ))} */}
        <li className="list-group-item">
          <div className="float-end">
            <button
              // onClick={() => dispatch(updateModule(module))}
              onClick={handleUpdateModule}
              className="btn btn-primary m-1"
            >
              Update
            </button>
            <button
              // onClick={() =>
              //   dispatch(addModule({ ...module, course: courseId }))
              // }
              onClick={handleAddModule}
              className="btn btn-success m-1"
            >
              Add
            </button>
          </div>
          <div className="float-start col-8">
            <input
              className="form-control  m-1"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              className="form-control  m-1"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                className="btn btn-success m-1 float-end"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger m-1 float-end"
                // onClick={() => dispatch(deleteModule(module._id))}
                onClick={() => handleDeleteModule(module._id)}
              >
                Delete
              </button>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
