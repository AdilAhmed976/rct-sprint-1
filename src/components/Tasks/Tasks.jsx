import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>

      <ul data-cy="tasks" className={styles.tasks}>
       { todo.map((todo)=> {
         <Task key={todo.id}  todo = {todo} onDelete={onDelete}/>
       })}
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
