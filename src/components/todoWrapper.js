import React, { useState, useEffect } from "react";
import Todoform from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoform from "./EditTodoForm";

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const addTodo = (todo) => {
        const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const editTodo = (id) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const editTask = (task, id) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <Todoform addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoform editTodo={editTask} task={todo} key={todo.id} />
                ) :
                    <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            ))}
        </div>
    );
}

export default TodoWrapper;
