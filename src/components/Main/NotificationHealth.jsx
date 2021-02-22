import React from 'react'

function HotificationHealth({active,damage}){

    return(
        <div className={active?"modall activel" : "modall"} >
            <div className="modal__contentl" onClick={e => e.stopPropagation()}>
                <div>
                    <div>
                        {`Вы теряете здоровье: -${damage}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotificationHealth