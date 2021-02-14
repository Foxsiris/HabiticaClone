import React from 'react';
import HeaderLinks from "./HeaderLinks";
import '../../css/Header.css'


function Header(){
    return(
        <div className="header_wrapper">
            <div className="logo">
                LOGO
            </div>
            <HeaderLinks name={'Задачи'} linkPath={"/"}/>
            <HeaderLinks name={'Инвентарь'} linkPath={"/inventory"}/>
            <HeaderLinks name={'Лавки'} linkPath={"/shop"}/>
        </div>
    )
}



export default Header