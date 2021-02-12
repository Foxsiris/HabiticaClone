import React from 'react'

function HeaderToDo({name,categories}){
    return(
        <div className="HeaderTodoWrapper">
            <div className="HeaderTodoName">
                {name}
            </div>
            {categories.map(el=>{
                return <div className="HeaderTodoItem" >
                    <a href="" className="HeaderTodoLinks">{el}</a>
                </div>
            })}
        </div>
    )
}
export default HeaderToDo