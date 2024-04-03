import React, { useState } from "react";

function EditTodoform({editTodo,task}) {
    const [value, setValue] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        editTodo(value,task.id)
        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Update the task" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button type="submit" className="todo-btn">Update Task
            </button>
        </form>
    )
}

export default EditTodoform