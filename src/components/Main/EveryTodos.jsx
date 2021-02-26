import React from 'react'
import MainTodo from "./MainToDo";
import MainToDoEveryDay from "./MainToDoEveryDay";

function EveryTodos({name,placeHolder,categories}){
    return(
        <div className="HabbitsWrap">
            <MainToDoEveryDay placeHolder={placeHolder} name={name} categories={categories}/>
        </div>
    )
}

export default EveryTodos