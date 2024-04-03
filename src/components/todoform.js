import React, { useState } from "react";

function Todoform({ addTodo }) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            setError("Please enter a task!");
            return;
        }
        addTodo(value);
        setValue("");
        setError("");
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="What is the task today"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">
                Add Task
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default Todoform;
