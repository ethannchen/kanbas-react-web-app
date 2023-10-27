import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between"
    >
      {todo.title ? todo.title : "(empty)"}
      <div>
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(setTodo(todo))}
        >
          {" "}
          Edit{" "}
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </li>
  );
}
export default TodoItem;
