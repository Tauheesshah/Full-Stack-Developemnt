import { TodoInput} from '../Components/TodoInput';
import { TodoList } from '../Components/TodoList';

export const Todo=()=>{
    return (
        <>
        <h1>Todo</h1>
        <TodoInput/>
        <TodoList />
        </>
    )
}