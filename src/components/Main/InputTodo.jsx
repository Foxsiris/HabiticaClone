import React from 'react'
import {useDispatch} from "react-redux";
import {createHabbit} from "../../redux/actions";
import sendRequest from "../../queryServer/sendRequest";
import axios from "axios";


function InputToDo({placeHolder}) {
    const [value, setValue] = React.useState('')
    const dispatch = useDispatch()
    React.useEffect(() => {
        axios.get('http://localhost:3001/habbits').then(({data}) => {
            data.map(el => {
                dispatch(createHabbit(el))
            })
        })
    }, [])

    function submitDispatch(e){
        e.preventDefault()
        const newHabbit = {
            title: value,
            id: Date.now().toString(),
            type: 'good',
            complexity: 'Пустяк'
        }
        axios.post('http://localhost:3001/habbits', newHabbit)
        setValue(' ')
    }

    function inputHandler(e) {
        setValue(e.target.value)
    }

    return (
        <div className="inputFormToDo">
            <form onSubmit={submitDispatch}>
                <div>
                    <input type="text" className="InputToDo" placeholder={`Добавить ${placeHolder}`} onChange={inputHandler}
                           value={value}/>
                </div>
                <div>
                    <input type="submit" value="Добавить"/>
                </div>
            </form>
        </div>
    )
}

export default InputToDo