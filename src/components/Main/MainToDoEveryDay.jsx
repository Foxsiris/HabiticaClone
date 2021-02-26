import React from 'react'
import InputToDo from "./InputTodo";
import HabbitItem from "./HabbitItem";
import {useDispatch, useSelector} from "react-redux";
import InputToDosEveryDay from "./InputToDosEveryDay";
import EveryToDoItem from "./EveryToDoItem";


function MainTodo({placeHolder, name, categories}) {
    const todos = useSelector(state => state.todo.todo)
    const [value, setValue] = React.useState('Все')

    function t(el) {
        setValue(el)
    }

    return (
        <div className="MainToDoWrapper">
            <div className="HeaderTodoWrapper">
                <div className="HeaderTodoName">
                    {name}
                </div>
                {categories.map(el => {
                    return <div className="HeaderTodoItem">
                        <button className="HeaderTodoLinks btn btn-primary" onClick={() => {
                            t(el)
                        }}> {el}</button>
                    </div>
                })}
            </div>
            <InputToDosEveryDay placeHolder={placeHolder}/>
            {
                    todos.map(el => {
                        return <EveryToDoItem todo={el}/>
                    })
            }
        </div>
    )
}

export default MainTodo