import React from 'react'
import './TodoApp.css'

export const TodoApp = () => {
    return (
    <>

    <div id='box-main-title'>
        <h2>Todo App, total: pendientes: </h2>
    </div>
    <div id='box-list'>
        <div id='box-list-container'>
            <div className='box-task'>
                <h4>Tarea 1</h4>
                <button>Borrar</button>
            </div>      
            <div className='box-task'>
                <h4>Tarea 2</h4>
                <button>Borrar</button>
            </div>
        </div>


    </div>

    <div id='box-agregar'>
        <div id='box-agregar-container'>
            <h3>Agregar TODO</h3>
            <form action="">
                <input type="text" placeholder='¿Cuál es la nueva tarea?'/>
                <button>Añadir</button>
            </form>
        </div>
    </div>

    </>
    )
}
