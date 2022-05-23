import React from "react";

import styles from "./taskApp.module.css";
import data from '../data/tasks.json'
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader/>
      <AddTask data = {data}/>
      {/* <Tasks/> */}


    </div>
  );
};

export default TaskApp;
