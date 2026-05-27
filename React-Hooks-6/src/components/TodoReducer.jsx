import { useState, useReducer } from "react";

const ACTIONS = {
    ADD_TODO: "add-todo"
}

function reducer(todos, action) {
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
    }
}

function newTodo(name){
    return {id: Date.now(), name: name, isComplete: false}
}

export const TodoReducer = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");
    
    const handleForm = (e) => {
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName("");
    }
    
    return(
        <>
            <form onSubmit={handleForm}>
                <input type="text" value={name} placeholder="Write Todo Title" onChange={e => setName(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            
            {todos.map((todo) => {
                return <p key={todo.id}>{todo.name}</p>
            })}
        </>
    )
}