import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex  ">
      <input
        value={todo.title}
        className="form-control me-2"
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button
        className="btn btn-warning me-2"
        onClick={() => dispatch(addTodo(todo))}
      >
        {" "}
        Add{" "}
      </button>
      <button
        className="btn btn-success me-2"
        onClick={() => dispatch(updateTodo(todo))}
      >
        {" "}
        Update{" "}
      </button>
    </li>
  );
}
export default TodoForm;
