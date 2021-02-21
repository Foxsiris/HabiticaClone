import React from 'react'
import Habbits from "./Habbits";
import '../../css/Main.css'

function Main(){
    let categories_habbit = ['Все','Слабые','Сильные']
    let categories_evreday = ['Все','Текущие','Прочие']
    let categories_tasks = ['Активные','С датой','Сделанные']
    return(
        <div className="MainWrapper">
            <Habbits name={"Привычки"} placeHolder={"Привычку"} categories={categories_habbit}/>
            {/*<Habbits name={"Ежедневные дела"} placeHolder={"Ежедневное дело"} categories={categories_evreday}/>*/}
            {/*<Habbits name={"Задачи"} placeHolder={"Задачу"} categories={categories_tasks}/>*/}
        </div>

    )
}

export default Main