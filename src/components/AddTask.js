import React from "react";

export const AddTask = ({taskList,setTaskList,task,setTask}) =>{

const handleSubmit =(e) =>{
    e.preventDefault();
    const date= new Date();
   //editing task
   if(task.id){
    const updatedTaskList= taskList.map(todo => (
        todo.id === task.id ? {id:task.id, name: task.name, date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
    ))
    setTaskList(updatedTaskList)
    setTask({})

   }
   //adding new task 
   else{
    const newlist={
        id: date.getTime(),
        name: e.target.task.value,
        date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList, newlist])
    setTask({})
   }
}
    return(
        <section className="addTask">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add task " name='task' autoComplete="off" value={task.name || ''} onChange={e =>setTask ( {...task, name:e.target.value})} />
            <button type="submit"> {task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    )
} 