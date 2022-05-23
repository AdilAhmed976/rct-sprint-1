import React from "react";
import styles from "./addTask.module.css";
import { v4 as uuid} from 'uuid';
import Task from "../Task/Task";
import Tasks from "../Tasks/Tasks";

const AddTask = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [inputval,setInputValue]= React.useState("")
  const [todos,settodos] = React.useState(data)

  const handleinputvalue = (e) => {
    setInputValue(e.target.value)
    // console.log(input)
  }

  const handelAdd = ()=> {
    settodos ( [ ...todos,{
      "id":uuid(),
      "text":inputval,
      "done":false,
      "count":"",
    }])
   
   
    setInputValue("")
    
  }

  const onDelete = (id) => {
    let newtodo = todos.filter(todo=>todo.id!==id)
    settodos(newtodo)
  }

  return (
    <div className={styles.todoForm}>
      <input onChange={handleinputvalue} data-cy="add-task-input" type="text" />
      <button onClick={handelAdd} data = {todos} data-cy="add-task-button"><i class="fa-solid fa-plus"></i></button>      
      <Tasks todo={todos} onDelete={onDelete}/>
    </div>
  );
};

export default AddTask;
