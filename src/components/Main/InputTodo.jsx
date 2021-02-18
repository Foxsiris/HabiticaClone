import React from 'react'
import {useDispatch} from "react-redux";
import {createHabbit} from "../../redux/actions";

function InputToDo({placeHolder}) {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()

    function submitDispatch(e){
        e.preventDefault()
        const newHabbit = {
            title:value,
            id:Date.now().toString()
        }
        dispatch(createHabbit(newHabbit))
        setValue(' ')
    }

    function inputHandler(e) {
        setValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitDispatch}>
                <input type="text" className="InputToDo" placeholder={`Добавить ${placeHolder}`} onChange={inputHandler} value={value}/>
                <button type='submit' >добавить</button>
            </form>
        </div>
    )
}

export default InputToDo