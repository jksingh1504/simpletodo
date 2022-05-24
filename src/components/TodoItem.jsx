import React from 'react'
import "./todoitem.css"

const TodoItem = ({task}) => {
  const [ischecked,setIschecked]=React.useState(false)

  return (
    <div className='todoitem'>
        <p className={ischecked?"striked":""}>{task.task}</p>
        <input type="checkbox" onChange={e=>{setIschecked(!ischecked)}}/>
    </div>
  )
}

export default TodoItem