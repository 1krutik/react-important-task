import React, { useState } from "react";

const Todo = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleInputChange = (e) => {
    setState(e.target.value);
  };

  const addTodo = () => {
    if (state) {
      setData([...data, state]);
      setState("");
    }
  };

  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(data[index]);
  };

  const saveEdit = (index) => {
    const updatedData = [...data];
    console.log(data)
    updatedData[index] = editText;
    setData(updatedData);
    setEditIndex(null);
    setEditText("");
  };

  const removeTodo = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Something"
        value={state}
        onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {editIndex === i ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditInputChange}
                />
                <button onClick={() => saveEdit(i)}>Save</button>
              </>
            ) : (
              <>
                {el}
                <button onClick={() => startEditing(i)}>Edit</button>
              </>
            )}
            <button onClick={() => removeTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
