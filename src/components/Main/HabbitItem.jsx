import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addExpirence, minusHealth} from "../../redux/actions";
import HabbitForm from "./HabbitForm";
import ModalHabbit from "./modalHabbit";


function HabbitItem({habbit}){
    const dispatch = useDispatch()
    const data = useSelector(state=>state.infoPerson.infoPerson)
    const [modalActive,setModalActive] = React.useState(false)

    function minusHealt(){
        const newInfoPerson = {
            name: 'Daniil',
            level: data.level,
            health: data.health-5,
            expirince: data.expirince,
            class: 'Воин'
        }
        dispatch(minusHealth(newInfoPerson))

    }
    function addExp(){
        const newInfoPerson = {
            name: 'Daniil',
            level: data.level,
            health: data.health,
            expirince: data.expirince+5,
            class: 'Воин'
        }
        dispatch(addExpirence(newInfoPerson))
    }


    return(
        <div className="HabbitItemWrapper">
            <div>
                <div className="plusHabbit">
                   <button onClick={addExp}> +</button>
                </div>
            </div>
            <div onClick={()=>setModalActive(true)}>
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