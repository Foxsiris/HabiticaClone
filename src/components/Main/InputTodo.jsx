import React from 'react'
import {useDispatch} from "react-redux";
import {createHabbit} from "../../redux/actions";
import sendRequest from "../../queryServer/sendRequest";

function InputToDo({placeHolder}) {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()

    function submitDispatch(e){
        e.preventDefault()
        const newHabbit = {
            title:value,
            id:Date.now().toString(),
            type:'good',
            complexity:'Пустяк'
        }
        dispatch(createHabbit(newHabbit))
        sendRequest('POST','http://localhost:3002/create',newHabbit)
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

export default InputToDo