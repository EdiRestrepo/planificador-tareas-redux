import { TASKS_ACTIONS } from "./actions";
import { nanoid } from "nanoid";

  const taskInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];

export const tasksReducer = (state = taskInitialState, action) =>{ 
    if(action.type === TASKS_ACTIONS.add){
        return[
            ...state,
            {id: nanoid(), text: action.payload, completed: false}]
    }else if(action.type === TASKS_ACTIONS.toggle){
        return state.map(task => task.id === action.payload 
            ? {...task, completed: !task.completed}
            :task
            );
    }
    return state;
}