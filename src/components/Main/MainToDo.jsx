import React from 'react'
import InputToDo from "./InputTodo";
import HabbitItem from "./HabbitItem";

function MainTodo({placeHolder}){
    return(
        <div className="MainToDoWrapper">
            <InputToDo placeHolder={placeHolder}/>
            <HabbitItem habbit={"Не есть сладкое"} />
            <HabbitItem habbit={"Не пить лимонад"} />
            <HabbitItem habbit={"Не играть"} />
        </div>
    )
}

export default MainTodo