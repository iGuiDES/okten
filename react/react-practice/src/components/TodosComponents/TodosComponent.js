import {useEffect, useState} from "react";
import {getAllTodos} from "../../service";
import {TodoComponent} from "./TodoComponent";

const TodosComponent = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAllTodos().then(todo => setTodos(todo));
    }, [])

    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo} />)
            }
        </div>
    )
}

export {
    TodosComponent
}