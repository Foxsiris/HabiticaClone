import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToDoEveryDay, createHabbit} from "../../redux/actions";
import sendRequest from "../../queryServer/sendRequest";

function InputToDoosEveryDay({placeHolder}) {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()

    function submitDispatch(e){
        e.preventDefault()
        const newEveryTodo = {
            title:value,
            id:Date.now().toString(),
            complexity:'Пустяк'
        }
        dispatch(addToDoEveryDay(newEveryTodo))
        setValue(' ')
    }

    function inputHandler(e) {
        setValue(e.target.value)
    }

    return (
        <div className="inputFormToDo">
            <div>
                <input type="text" className="InputToDo" placeholder={`Добавить ${placeHolder}`} onChange={inputHandler} value={value}/>
            </div>
            <div>
                <button type='submit' className="btn btn-outline-primary btn-sm" onClick={submitDispatch}>добавить</button>
            </div>
        </div>
    )
}

export default InputToDoosEveryDay