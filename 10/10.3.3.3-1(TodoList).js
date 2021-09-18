import TodoListItem from "./10.3.1-3(TodoListItem)";
import "./10.2.3-4(TodoList).scss";

const TodoList = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
