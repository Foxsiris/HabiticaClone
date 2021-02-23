import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeHabbit, createHabbit, deleteHabbit} from "../../redux/actions";

function ModalHabbit({active, setActive,habbit}) {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(habbit.title)
    const [habbitType,sethabbitType] = React.useState('good')
    const [level,setLevel] =React.useState('Пустяк')

    function saveChangedHabbit(e) {
        e.preventDefault()
        const changedHabbit = {
            title:value,
            id:habbit.id,
            type:habbitType,
            complexity:level
        }

        dispatch(changeHabbit(changedHabbit))
        setActive(false)
    }

    function inputChangerHandler(e) {
        setValue(e.target.value)
    }
    function delHabbit(){
        dispatch(deleteHabbit(habbit.id))
        setActive(false)
    }
    function goodHabbit(){
        sethabbitType('good')
    }
    function badHabbit(){
        sethabbitType('bad')
    }
    function chooseHabbit(e){
        setLevel(e.target.value)
    }

    return (
        <div className={active?"modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <div>
                        <h3>Изменить привычку</h3>
                    </div>
                    <div className="buttn">
                        <button className="btn btn-outline-danger btn-sm" onClick={() => setActive(false)}>отмена</button>
                        <button className="btn btn-outline-primary btn-sm" onClick={saveChangedHabbit}>сохранить</button>
                    </div>
                </div>
                <div>
                    <input type="text" className="inputModal" value={value} onChange={inputChangerHandler}/>
                </div>
                <div>
                    <div className="chooseModal_wrapper">
                        <div>
                            <button className="circle btn btn-success" onClick={goodHabbit}>+</button>
                        </div>
                        <div>
                            <button className="circle btn btn-warning" onClick={badHabbit}>-</button>
                        </div>
                        <div>
                            <label htmlFor="">Полезная</label>
                        </div>
                        <div>
                            <label htmlFor="">Вредная</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Сложность</label>
                    <select name="" id="" onChange={chooseHabbit}>
                        <option value="Пустяк">Пустяк</option>
                        <option value="Легко">Легко</option>
                        <option value="Нормально">Нормально</option>
                        <option value="Сложно">Сложно</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-outline-danger btn-sm" onClick={delHabbit}>УДАЛИТЬ ПРИВЫЧКУ</button>
                </div>
            </div>
        </div>
    )
}

export default ModalHabbit