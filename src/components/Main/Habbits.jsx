import React from 'react'
import MainTodo from "./MainToDo";

function Habbits({name,placeHolder,categories}){
    return(
        <div className="HabbitsWrap">
            <MainTodo placeHolder={placeHolder} name={name} categories={categories}/>
        </div>
    )
}

export default Habbits