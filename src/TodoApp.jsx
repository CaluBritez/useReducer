import './TodoApp.css'
import { Task } from './components/Task.jsx'
import { useTodos } from './hooks/useTodos.js'
    
export const TodoApp = () => {    

    const {todos, description, handleDeleteTodo, handleToggleTodo, onInputChange, onFormSubmit, total, pending} = useTodos()
    
    return (
    <>

    <div id='box-main-title'>
        <h2>Todo App - total: {total} pendientes: {pending}</h2>
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
