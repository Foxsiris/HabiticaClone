 import React from "react";
 import '../../css/Inventory.css'

function CategoryInventory({categories}){
    return(
        <div className='inventoryHeader_wrapper'>
            {categories.map(el=>{
                return <div className='header_item '>{el}</div>
            })}
        </div>
    )
}

export default CategoryInventory