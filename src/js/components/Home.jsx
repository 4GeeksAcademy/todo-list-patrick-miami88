import React, { useState } from "react";
import { Todo } from "./Todo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      console.log("Event was the enter key!");
      addTodo();
    }
  };

  const addTodo = () => {
    if (inputValue.length > 0) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="text-center w-50 border border-secondary mx-auto mt-5">
      <h2 className="text-center mt-5">Add a todo!</h2>
      <div className="d-flex mx-auto my-3">
        <input
          type="text"
          className="form-control w-25 me-2 ms-auto"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleInputChange}
        />
        <button className="btn btn-success me-auto" onClick={addTodo}>
          Add item
        </button>
      </div>
      {todos.length != 0 ? (
        todos.map((label, index) => (
          <Todo
            todoValue={label}
            setTodos={setTodos}
            todos={todos}
            index={index}
            key={index}
          />
        ))
      ) : (
        <h5>Currently no todos, go and add one you simpleton!</h5>
      )}
      <div className="py-3 border-top border-secondary">
        <h4 className="ms-5">
          {todos.length === 1
            ? `${todos.length} items left!`
            : `${todos.length} items left!`}
        </h4>
      </div>
    </div>
  );
};

export default Home;
