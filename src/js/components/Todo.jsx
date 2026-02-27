import React from "react";
import { useState } from "react";

export const Todo = ({ todoValue, setTodos, todos, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const deleteTodos = () => {
    console.log("Todo to be deleted", index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div 
    className="border border-secondary p-2 bg-light mx-auto row"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    >
      <div className="col-9">
        <h4 className="d-flex justify-content-start ms-2">{todoValue}</h4>
      </div>
      <div className="col-3 d-flex justify-content-end">
        {isHovered ? (
        <button className="btn btn-danger" onClick={() => deleteTodos()}>
          Delete
        </button>
        ) : null}
      </div>
    </div>
  );
};
