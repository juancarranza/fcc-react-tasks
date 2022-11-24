import React from 'react';
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({ id, texto, isComplete, completeTask, deleteTask }) => {
  return (
    <div className={ isComplete ? 'task-container complete':'task-container'}>
      <div className='task-texto' onClick={() => completeTask(id)}>
        {texto}
      </div>
      <div className='icons-task-container' onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='icon-task'/>
      </div>
    </div>
  );
};

export default Tarea;