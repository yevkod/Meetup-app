import React from 'react';
import '../components/todos/Todos.module.css';
import Todo from "../components/todos/Todo";

function TodoPage() {
    return (
        <div className='todo-page'>
            <h1>My Todos</h1>
            <Todo text='Learn React' />
            <Todo text='Master React' />
            <Todo text='Explore the full React course' />
        </div>
    );
}

export default TodoPage;
