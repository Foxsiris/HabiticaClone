import React from 'react'
import Habbits from "./Habbits";
import '../../css/Main.css'
import EveryTodos from "./EveryTodos";

function Main(){
    let categories_habbit = ['Все','Слабые','Сильные']
    let categories_evreday = ['Все','Текущие','Прочие']
    let categories_tasks = ['Активные','С датой','Сделанные']
    return(
        <div className="MainWrapper">
            <Habbits name={"Привычки"} placeHolder={"Привычку"} categories={categories_habbit}/>
            <EveryTodos name={"Задачи"} placeHolder={"Дело"} categories={categories_tasks}/>
        </div>

    )
}

export default Main