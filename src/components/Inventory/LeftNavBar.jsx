import React from "react";
import '../../css/Inventory.css'

function LeftNavBar({filterItems}) {
    return (
        <div className="leftNavBarWrapper">
            <div>
                <input type="text" placeholder="Поиск"/>
            </div>
            <div>
                <div>
                    Фильтры
                </div>
                <div>
                    {filterItems.map(el => {
                        return <div className="filter_item">
                            <input type="checkbox" />
                            <label htmlFor="">{el}</label>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default LeftNavBar