import React from 'react';
import { useSelector } from 'react-redux';
import {
  changeInput,
  insert,
  toggle,
  remove,
} from '../modules/17.6.2-1(todos)';
import Todos from '../components/17.5.2-3(Todos)';
import useActions from '../lib/17.7.5-1(useActions)';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
