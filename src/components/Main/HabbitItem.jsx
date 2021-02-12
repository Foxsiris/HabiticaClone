import React from 'react'


function HabbitItem({habbit}){
    return(
        <div className="HabbitItemWrapper">
            <div>
                <div className="plusHabbit">
                   <button> +</button>
                </div>
            </div>
            <div>
                {habbit}
            </div>
            <div className="MinusHabbit">
                <div>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default HabbitItem