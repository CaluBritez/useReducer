import React, { useEffect } from 'react'
import './TodoApp.css'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer.js'
import { Task } from './components/Task.jsx'
import { useForm } from './hooks/useForm.js'

const initialState = []    

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {    

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {

        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action);
    
    }

    const {description, onInputChange, onResetForm} = useForm({
    description: ''
})

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            completed: false
        }
        onResetForm();
        handleNewTodo(newTodo);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove Todo',
            payload: id
        }
        dispatch(action);
        
    }
    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle Todo',
            payload: id
        }
        dispatch(action);
        
    }

    return (
    <>

    <div id='box-main-title'>
        <h2>Todo App, total: pendientes: </h2>
    </div>
    <div id='box-list'>
        <div id='box-list-container'>
            {
                todos.map(todo => (
                    <Task key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} toggleTodo={handleToggleTodo}/>
                ))
            }
        </div>
    </div>

    <div id='box-agregar'>
        <div id='box-agregar-container'>
            <h3>Agregar TODO</h3>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" 
                    name='description'
                    placeholder='¿Cuál es la nueva tarea?'
                    value={description}
                    onChange={onInputChange}
                />
                <button type='submit' onClick={onFormSubmit}>Añadir</button>
            </form>
        </div>
    </div>

    </>
    )
}
