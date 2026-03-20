import { useDispatch } from "react-redux";
import { ADD_TODOS } from "../Redux/todos/Action";
import { useRef } from "react";
import  {TodoList} from "./TodoList";

export const TodoInput =()=>{

    const datavalue = useRef(null);
    const dispatch = useDispatch();

    const addTodos = ()=>{
        let values = datavalue.current.value;

        let todos = {
            id :Date.now(),
            text: values,
            isEdit: false,
            isCompleted: false,
        };

        dispatch({type: ADD_TODOS, payload:todos});
    };

    return(
        <>
        <h1>Add Todo</h1>

        <input type="text" placeholder="Enter task" ref={datavalue}/>
        <button onClick={addTodos}>Add Task </button>
        </>
    )
}