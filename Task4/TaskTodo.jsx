import React, { useState } from 'react';

const TaskTodo = () => {
  const [state, setState] = useState({
    name: "",
    password: ""
  });
  const [data, setData] = useState([]);

  const AddTodo = () => {
    setData([...data, state]);
    setState({
      name: "",
      password: ""
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) => setState({
          ...state,
          name: e.target.value
        })}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={state.password}
        onChange={(e) => setState({
          ...state,
          password: e.target.value
        })}
      />
      <button onClick={AddTodo}>Click</button>

        {data.map((el, i) => (
          <li key={i}>{`Name: ${el.name}, Password: ${el.password}`}</li>
        ))}
    </div>
  );
};

export default TaskTodo;
