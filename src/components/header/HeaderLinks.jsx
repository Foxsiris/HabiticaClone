import React from 'react';
import '../../css/Header.css'
import {Link} from "react-router-dom";

function HeaderLinks({name,linkPath}){
    return(
        <div className="linkItem">
           <Link to={linkPath}>
               <a href="">{name}</a>
           </Link>
        </div>
    )
}

export default HeaderLinks