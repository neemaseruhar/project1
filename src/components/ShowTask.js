import React from "react";

export const ShowTask = ({taskList,setTaskList,task,setTask}) =>{

const handleEdit = (id) => {
const selectedTask =taskList.find(todo => todo.id === id)
setTask(selectedTask)
}

const handleDelete = (id) =>{
const updatedTask = taskList.filter(todo => todo.id !== id)
setTaskList(updatedTask)
}



    return(
        <section className="showTask">
            <p className="head">
            <span>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </span>
            <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
            </p>
            <ul>
                {taskList.map(todo =>(
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.date}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>

                    </li>
                ))}
                
            </ul>
        </section>
    )
} 