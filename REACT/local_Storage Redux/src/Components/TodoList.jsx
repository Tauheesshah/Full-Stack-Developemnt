import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODOS,EDIT_TODOS } from "../Redux/todos/Action";

export const TodoList = ()=>{
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.todo?.todos || [])

    const handleEdit =(id)=>{
        dispatch({type:EDIT_TODOS, payload:id})
    }

    const handleDel =(id)=>{
        dispatch({type:DELETE_TODOS,payload:id});
    }

    return(
        <>
        <h3> TodoList</h3>
        {data.map((el)=>(
            <div key={el.id}>
                <p>{el.text}</p>
                <button onClick={()=>handleEdit(el.id)}>Edit</button>
                <button onClick={()=> handleDel(el.id)}>Delete</button>
            </div>
        ))}
        </>
    )
}