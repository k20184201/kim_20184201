import TodoListItem from "./10.2.3-1(TodoListItem)";
import "./10.2.3-4(TodoList).scss";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
