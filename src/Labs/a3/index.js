import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Todo from "./todo";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <h1>Assignment 4: todoList preview</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <JavaScript />
      <PathParameters />
      <DynamicStyling />
      <Classes />
      <Styles />
      <ConditionalOutput />
      <Todo />
    </div>
  );
}
export default Assignment3;
