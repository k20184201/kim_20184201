import TodoListItem from "./10.2.3-1(TodoListItem)";
import "./TodoList.scss";

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
