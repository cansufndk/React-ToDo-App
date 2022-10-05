import React from "react";
import FormItem from "./FormItem";

function FormList({ todo, setTodo }) {
  const deleteTodo = ({ id }) => {
    setTodo(todo.filter((e) => e.id !== id));
  };

  const checkTodo = (e) => {
    const _todos = [...todo];
    _todos.find((item) => item.id === e.id).completed = !e.completed;
    setTodo(_todos);
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 list-item mb-4">
      {todo.map((e) => (
        <FormItem
          item={e}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          key={e.id}
        />
      ))}
    </div>
  );
}

export default FormList;
