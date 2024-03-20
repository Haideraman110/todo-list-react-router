import React from 'react'
import "./TodoContainer.css"
import TodoForm from './TodoForm'

const TodoContainer = () => {
    return (
        <>
            <div className='container cont'>
                <div className='row'>
                    <div className='col'>
                        <TodoForm />

                    </div>

                </div>

            </div>


        </>
    )
}

export default TodoContainer