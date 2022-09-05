import React, { useState } from "react"
import Header from "./components/Header.tsx"
import { ModelType } from "./components/Model";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";

const App: React.FC = () => {
   const [task, setTask] = useState<string>("");
   const [tasks, setTasks] = useState<ModelType[]>([])
  //  console.log(task)

   const addHandle =(e: React.FormEvent) => {
      e.preventDefault();
      if(task){
        setTasks([...tasks,{id:Date.now() ,task,isDone:false}])
        setTask("");
      }
   } 
   console.log(tasks)
  return (
    <div className="App" >
       <Header />
       <TaskForm task={task} setTask={setTask} addHandle={addHandle} />
       <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App