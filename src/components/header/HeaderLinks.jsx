import React from 'react';
import '../../css/Header.css'

function HeaderLinks({name}){
    return(
        <div className="linkItem">
            <a href="">{name}</a>
        </div>
    )
}

export default HeaderLinks