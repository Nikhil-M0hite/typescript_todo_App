import React, { useState } from 'react'
import { ModelType } from '../Model'
import '../style.css'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
  task: ModelType;
  tasks: ModelType[];
  setTasks: React.Dispatch<React.SetStateAction<ModelType[]>>
}

const SingleTask = ({ task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<Boolean>(false)
  const [editTask, setEditTask] = useState<string>(task.task)

  const handleDone = (id: number) => {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )))
  }
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((num) => (
      num.id !== id
    )))
  }
  const handleEdit =(e :React.FormEvent,id:number) => {
        e.preventDefault();
        setTasks(
          tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
        );
        setEdit(false);
  }
  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e,task.id)}>
  
       {edit ? (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="todos__single--text"
        />
      ) : task.isDone ? (
        <s className="todos__single--text">{task.task}</s>
      ) : (
        <span className="todos__single--text">{task.task}</span>
      )}
      <div>
        <span className="icon"
           onClick={() => {
            if(!edit && !task.isDone){
              setEdit(!edit)
            }
           }}
          >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTask