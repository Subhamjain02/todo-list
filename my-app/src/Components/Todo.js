import React,{useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo(todos, removeTodo,completeTodo ) {

    const [edit , setEdit] = useState({
        id : null,
        value : ''

    });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={()=>removeTodo(Todo.id)} className='delete-icon' />
        <TiEdit onClick={()=>setEdit({id : todo.id, value : todo.text})} className='edit-icon'/>
      </div>
    </div>
  ));
}

export default Todo;
