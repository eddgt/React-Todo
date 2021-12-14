import React from "react";

export function TodoItem({todo, toggleTodo}){
    const {id, task, completed } = todo

    const hadleTodoClick = () => {
        toggleTodo(id);
    }
    return <li>
        <input type="checkbox"  checked={completed} onChange={hadleTodoClick}/>
        {task}
        </li>;
}