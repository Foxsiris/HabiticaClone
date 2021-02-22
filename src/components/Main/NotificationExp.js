import React from 'react'

function HotificationExp({active,setNotificatioActive,exp}){

    return(
        <div className={active?"modall activel" : "modall"} >
            <div className="modal__contentl" onClick={e => e.stopPropagation()}>
                <div>
                    <div>
                        {`Вы получаете: +${exp} опыты`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotificationExp