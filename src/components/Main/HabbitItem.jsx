import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addExpirence, minusHealth} from "../../redux/actions";
import HabbitForm from "./HabbitForm";
import ModalHabbit from "./modalHabbit";


function HabbitItem({habbit}) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.infoPerson.infoPerson)
    const [modalActive, setModalActive] = React.useState(false)


    function minusHealt() {
        let damageHealh = 0
        if (habbit.complexity === "Пустяк") {
            damageHealh = 2
        } else if (habbit.complexity === 'Легко') {
            damageHealh = 5
        } else if (habbit.complexity === 'Нормально') {
            damageHealh = 7
        } else if (habbit.complexity === 'Сложно') {
            damageHealh = 10
        }
        const newInfoPerson = {
            name: 'Daniil',
            level: data.level,
            health: data.health - damageHealh,
            expirince: data.expirince,
            class: 'Воин'
        }
        dispatch(minusHealth(newInfoPerson))

    }

    function addExp() {
        let addExp = 0
        if (habbit.complexity === "Пустяк") {
            addExp = 2
        } else if (habbit.complexity === 'Легко') {
            addExp = 5
        } else if (habbit.complexity === 'Нормально') {
            addExp = 7
        } else if (habbit.complexity === 'Сложно') {
            addExp = 10
        }
        const newInfoPerson = {
            name: 'Daniil',
            level: data.level,
            health: data.health,
            expirince: data.expirince + addExp,
            class: 'Воин'
        }
        dispatch(addExpirence(newInfoPerson))
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
        </div>
    )
}

export default HabbitItem