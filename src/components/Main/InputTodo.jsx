import React from 'react'

function InputToDo({placeHolder}){
    return(
        <div >
            <input type="text" className="InputToDo" placeholder={`Добавить ${placeHolder}`}/>
        </div>
    )
}

export default InputToDo