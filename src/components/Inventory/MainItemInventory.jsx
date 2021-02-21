import React from "react";


function MainItemInventory({nameItem,data}){
    return(
        <div className="mainInventoryWrapperName">
            <div>
                {nameItem}
            </div>
            <div className="mainInventoryItemWrapper">
                {data.map(el=>{
                    return <div className="mainInventoryItem">
                        <img src={el} alt=""/>
                    </div>
                })}
            </div>
        </div>
    )
}
export default MainItemInventory