import React from 'react';
import HeaderLinks from "./HeaderLinks";
import '../../css/Header.css'


function Header(){
    return(
        <div className="header_wrapper">
            <div className="logo">
                LOGO
            </div>
            <HeaderLinks name={'Задачи'}/>
            <HeaderLinks name={'Инвентарь'}/>
            <HeaderLinks name={'Лавки'}/>
        </div>
    )
}



export default Header