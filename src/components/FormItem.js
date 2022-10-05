import React from "react";

const FormItem = ({ item, checkTodo, deleteTodo }) => {
  return (
    <li className="d-flex mb-3 w-100 list-item " key={item.id}>
      <input
        value={item.title}
        className={`form-control ${
            item.completed ? "text-decoration-line-through" : ""
        }`}
        onChange={(e) => e.preventDefault()}
      />
      <div className="form-check d-flex ">
        <button
          className="btn btn-outline-success me-1 "
          onClick={() => checkTodo(item)}
        >
          <i className="fas fa-check-circle"></i>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTodo(item)}
        >
          <i className="fa fa-times-circle"></i>
        </button>
      </div>
    </li>
  );
};

export default FormItem;
