import { ADD_TODOS ,DELETE_TODOS,EDIT_TODOS} from "./Action";

const initialState ={
    todos:[],
};

export const TodoReducer =(oldState = initialState,{type,payload})=>{
    switch(type){
        case ADD_TODOS:
            return{
                ...oldState,
                todos:[...oldState.todos,payload],
            };
        case EDIT_TODOS:
            return{
                ...oldState,
                todos: oldState.todos.map((el)=>
                el.id === payload ? {...el, isEdit:true}:el
                ),
            };
        case DELETE_TODOS:
            return{
                ...oldState,
                todos: oldState.todos.filter((el)=>
                    el.id != payload
                )
            };
        default:
            return oldState;
    }
}