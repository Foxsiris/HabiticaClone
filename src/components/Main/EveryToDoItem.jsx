import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addExpirence} from "../../redux/actions";
import ModalHabbit from "./modalHabbit";
import NotificationExp from "./NotificationExp";


function EveryToDoItem({todo}) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.infoPerson.infoPerson)
    const [modalActive, setModalActive] = React.useState(false)
    const [exp, setExp] = React.useState(0)
    const [notificatioActiveExp, setNotificatioActiveExp] = React.useState(false)
    const [checked, setCheked] = React.useState(false)

    function complited() {
        if (checked === true){
            if (todo.complexity === "Пустяк") {
                setExp(2)
            } else if (todo.complexity === 'Легко') {
                setExp(5)
            } else if (todo.complexity === 'Нормально') {
                setExp(7)
            } else if (todo.complexity === 'Сложно') {
                setExp(10)
            }
            const newInfoPerson = {
                name: 'Daniil',
                level: data.level,
                health: data.health,
                expirince: data.expirince + exp,
                class: 'Воин'
            }
            dispatch(addExpirence(newInfoPerson))
            setCheked(!checked)
            setNotificatioActiveExp(true)
            setTimeout(() => {
                setNotificatioActiveExp(false)
            }, 2000)
        }else{
            setCheked(!checked)
        }

    }

    return (
        <div className="HabbitItemWrapper">
            <div>
                <input type="checkbox" onClick={complited} checked={checked}/>
            </div>
            <div onClick={() => setModalActive(true)} className={checked?"MainToDoEveryDay":""}>
                <div> {todo.title}</div>

            </div>
            <ModalHabbit active={modalActive} setActive={setModalActive} habbit={todo}/>
            <NotificationExp active={notificatioActiveExp} exp={exp}/>

        </div>
    )
}

export default EveryToDoItem