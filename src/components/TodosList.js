import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
          />
        );
      })}
    </div>
  );
};

export default TodosList;
