import React from 'react'
import HeaderToDo from "./HeaderToDo";
import MainTodo from "./MainToDo";

function Habbits({name,placeHolder,categories}){

    return(
        <div className="HabbitsWrap">
            <HeaderToDo name={name} categories={categories}/>
            <MainTodo placeHolder={placeHolder}/>
        </div>
    )
}

export default Habbits