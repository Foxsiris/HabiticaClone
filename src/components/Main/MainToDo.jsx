import React from 'react'
import InputToDo from "./InputTodo";
import HabbitItem from "./HabbitItem";
import {useDispatch, useSelector} from "react-redux";


function MainTodo({placeHolder, name, categories}) {
    const habbit = useSelector(state => state.habbit.habbit)
    const [value, setValue] = React.useState('Все')

    function t(el) {
        setValue(el)
        console.log(habbit.filter(el => {return el.type === 'bad'}) )
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
            <InputToDo placeHolder={placeHolder}/>
            {value === 'Слабые' ? habbit.filter(el => {return el.type === 'bad'}).map(el => {
                    return <HabbitItem habbit={el}/>
                })  :
                value === 'Сильные' ? habbit.filter(el => {return el.type === 'good'}).map(el => {
                        return <HabbitItem habbit={el}/>
                    })  :
                habbit.map(el => {
                    return <HabbitItem habbit={el}/>
                })
            }
        </div>
    )
}

export default MainTodo