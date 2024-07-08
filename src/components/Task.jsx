import React from 'react'

export const Task = ({ todo, onDeleteTodo, toggleTodo }) => {
    return (
    <div className='box-task'>
        <h4><span className={todo.completed ? 'tachar' : ''} onClick={() => toggleTodo(todo.id)}>{todo.description}</span></h4>
        <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </div>
    )
}
