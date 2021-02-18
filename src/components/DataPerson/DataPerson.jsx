import React from 'react';
import InfoPerson from "./InfoPeson";
import '../../css/Dataperson.css'
import {useSelector} from "react-redux";


function DataPerson(){
    const state = useSelector(state=>state.infoPerson.infoPerson)
    return(
        <div className="DataPersonWrapper">
            <div>
                <img src="https://cdna.artstation.com/p/assets/images/images/004/219/866/large/hendry-roesly-avatar.jpg?1481474349" alt=""/>
            </div>
            <InfoPerson name={state.name}/>
        </div>
    )
}

export default DataPerson