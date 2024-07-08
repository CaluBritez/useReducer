import { useReducer, useEffect } from 'react'
import { todoReducer } from '../todoReducer.js'
import { useForm } from './useForm.js'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

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
    return {
        todos,
        description,
        total: todos.length,
        pending: todos.filter(todo => !todo.completed).length,
        onInputChange,
        handleDeleteTodo,
        handleToggleTodo,
        onFormSubmit
    }
}
