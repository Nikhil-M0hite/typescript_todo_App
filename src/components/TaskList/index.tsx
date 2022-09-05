import React from 'react'
import { ModelType } from "../../components/Model";
import SingleTask from '../SingleTask';
interface Props {
    tasks: ModelType[];
    setTasks:React.Dispatch<React.SetStateAction<ModelType[]>>;
}
const TaskList : React.FC<Props> = ({ tasks,setTasks}) => {
  return (
    <div className='todos'>
        {tasks?.map((task) => (
          <SingleTask task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  )
}

export default TaskList