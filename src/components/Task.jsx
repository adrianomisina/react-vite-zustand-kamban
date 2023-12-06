/* eslint-disable react/prop-types */
import classNames from 'classnames';
import './Task.css'
import { useStore } from '../store.js';
import trash from '../assets/trash-2.svg'

const Task = ({ title }) => {

    const task = useStore((store) => store.tasks.find(task => task.title === title))

    const setDraggedTask = useStore((store) => store.setDraggedTask)

    const deleteTask = useStore((store) => store.deleteTask)

     return (
         <div className='task' draggable onDragStart={() => { setDraggedTask(task.title) }}>
          <div>{task.title}</div>
          <div className='bottomWrapper'>
              <div>
                  <img src={trash} alt="trash-icon"  onClick={() => deleteTask(task.title)}/>   
              </div>
              <div className={classNames('status', task.state)}>{task.state}</div>
          </div>
      </div>
  )
}

export default Task