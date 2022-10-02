import React from "react";

function FormList({ todo, setTodo }) {
  const deleteTodo = ({ id }) => {
    setTodo(todo.filter((e) => e.id !== id));
  };

  const checkTodo = (e) => {
    setTodo(
      todo.map((item) =>
        item.id === e.id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 list-item mb-4">
      {todo.map((e) => (
        <li className="d-flex mb-3 w-100 list-item " key={e.id}>
          <input
            value={e.title}
            className={`form-control ${
              e.completed ? "text-decoration-line-through" : ""
            }`}
            onChange={(e) => e.preventDefault()}
          />
          <div className="form-check d-flex ">
            <button
              className="btn btn-outline-success me-1 "
              onClick={() => checkTodo(e)}
            >
              <i className="fas fa-check-circle"></i>
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTodo(e)}
            >
              <i className="fa fa-times-circle"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default FormList;
