import { useDispatch, useSelector } from "react-redux";
import { toggleTask } from "../redux/tasks/actions";

const TaskList = () => {
    const tasks = useSelector((state)=>state.tasks)
    const dispatch = useDispatch()
  return (
    <ul>
      {tasks.map((task)=>(
        <li key={task.id}>
          {task.text} - {task.completed.toString()}
          <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={()=>{
            dispatch(toggleTask(task.id))
            }} />
        </li>
      ))}
    </ul>
  )
}

export default TaskList;
