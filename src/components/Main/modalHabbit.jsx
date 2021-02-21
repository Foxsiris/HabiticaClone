import React from 'react'
import {useSelector} from "react-redux";

function ModalHabbit({active, setActive,habbit}) {
    const data = useSelector(state=>state.habbit.habbit)
    console.log(data)
    return (
        <div className={active?"modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <div>
                        <h3>Изменить привычку</h3>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger btn-sm">отмена</button>
                        <button className="btn btn-outline-primary btn-sm">сохранить</button>
                    </div>
                </div>
                <div>
                    <input type="text" className="inputModal" value={habbit}/>
                </div>
                <div>
                    <div className="chooseModal_wrapper">
                        <div>
                            <button className="circle btn btn-success">+</button>
                        </div>
                        <div>
                            <button className="circle btn btn-warning">-</button>
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
                    <select name="" id="">
                        <option value="">Пустяк</option>
                        <option value="">Легко</option>
                        <option value="">Нормально</option>
                        <option value="">Сложно</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-outline-danger btn-sm">УДАЛИТЬ ПРИВЫЧКУ</button>
                </div>
            </div>
        </div>
    )
}

export default ModalHabbit