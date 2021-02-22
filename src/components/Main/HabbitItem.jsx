import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addExpirence, minusHealth} from "../../redux/actions";
import ModalHabbit from "./modalHabbit";
import NotificationHealth from "./NotificationHealth";
import NotificationExp from "./NotificationExp";


function HabbitItem({habbit}) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.infoPerson.infoPerson)
    const [modalActive, setModalActive] = React.useState(false)
    const [notificatioActive, setNotificatioActive] = React.useState(false)
    const [damage, setDamage] = React.useState(0)
    const [exp, setExp] = React.useState(0)
    const [notificatioActiveExp, setNotificatioActiveExp] = React.useState(false)


    function minusHealt() {
        if (habbit.complexity === "Пустяк") {
            setDamage(2)
        } else if (habbit.complexity === 'Легко') {
            setDamage(5)
        } else if (habbit.complexity === 'Нормально') {
            setDamage(7)
        } else if (habbit.complexity === 'Сложно') {
            setDamage(10)
        }
        const newInfoPerson = {
            name: 'Daniil',
            level: data.level,
            health: data.health - damage,
            expirince: data.expirince,
            class: 'Воин'
        }
        dispatch(minusHealth(newInfoPerson))
        setNotificatioActive(true)
        setTimeout(()=>{
            setNotificatioActive(false)
        },2000)

    }

    function addExp() {

        if (habbit.complexity === "Пустяк") {
            setExp(2)
        } else if (habbit.complexity === 'Легко') {
            setExp(5)
        } else if (habbit.complexity === 'Нормально') {
            setExp(7)
        } else if (habbit.complexity === 'Сложно') {
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
        setNotificatioActiveExp(true)
        setTimeout(()=>{
            setNotificatioActiveExp(false)
        },2000)
    }


    return (
        <div className="HabbitItemWrapper">
            <div>
                <div className="plusHabbit">
                    <button onClick={addExp}> +</button>
                </div>
            </div>
            <div onClick={() => setModalActive(true)}>
                <div> {habbit.title}</div>

            </div>
            <div className="MinusHabbit">
                <div>
                    <button onClick={minusHealt} type="submit">-</button>
                </div>
            </div>
            <ModalHabbit active={modalActive} setActive={setModalActive} habbit={habbit}/>
            <NotificationHealth active={notificatioActive}  damage={damage} />
            <NotificationExp active={notificatioActiveExp} exp={exp}/>

        </div>
    )
}

export default HabbitItem