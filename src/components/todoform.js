import React from "react";

function Todoform(){
    return(
        <form className="TodoForm" action="">
            <input type="text" className="todo-input" placeholder="what is the task today" />
            <button type="submit" className="todo-btn">
            </button>
        </form>
    )
}

export default Todoform