import React from 'react'
import InputToDo from "./InputTodo";
import HabbitItem from "./HabbitItem";
import {useSelector} from "react-redux";

function MainTodo({placeHolder}){
    const habbit = useSelector(state=>state.habbit.habbit)
    return(
        <div className="MainToDoWrapper">
            <InputToDo placeHolder={placeHolder}/>
            {habbit.map(el=>{
                return <HabbitItem habbit={el} />
            })}
        </div>
    )
}
export default MainTodo