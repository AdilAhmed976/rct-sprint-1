import React from "react";
import styles from "./task.module.css";
import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";

const Task = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [check,setcheck]= React.useState(todo.done)
  return (

<div>
<li data-cy="task" className={styles.task}>
      <p></p>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{todo.text}</div>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={()=>onDelete(todo.id)} >Delete</button>
    </li>
</div>

   
  );
  // console.log(add)
};

export default Task;
