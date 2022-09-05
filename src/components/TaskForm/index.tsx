import React from 'react';
import '../../App.css'
import '../style.css'

interface Props {
    task:string,
    setTask:React.Dispatch<React.SetStateAction<string>>;
    addHandle: (e: React.FormEvent) => void;

}
const TaskForm: React.FC<Props>= ({ task,setTask,addHandle}) => {
    return (
           
         <form className="input" onSubmit={(e) => addHandle(e)}>
            <input type='text' placeholder="Enter a Task" className="input__box"
             value={task}
             onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className='input_submit'>Hit</button> 
         </form>
        )
}

export default TaskForm