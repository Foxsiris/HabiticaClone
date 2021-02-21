import React from "react";
import CategoryInventory from "./CategoryInventory";
import LeftNavBar from "./LeftNavBar";
import MainInventory from "./MainInventory";
function Inventory(){
    const categories = ['Предметы','Снаряжение']
    const filterItems = ['Яйца','Элексиры']
    return(
        <div>
           <CategoryInventory categories={categories}/>
          <div className="mainWrapper">
              <LeftNavBar filterItems={filterItems}/>
              <MainInventory/>
          </div>
        </div>
    )
}

export default Inventory