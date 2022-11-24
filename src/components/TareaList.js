import React, { useState } from 'react';
import TareaForm from './TareaForm';
import '../styles/TareaList.css';
import Tarea from './Tarea';
const TareaList = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tareas')) ? JSON.parse(localStorage.getItem('tareas')) : []);

  const agregarTarea = (tarea) => {
    //console.log("tarea agregada");
    console.log(tarea);
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas=[tarea, ...tasks];
      setTasks(tareasActualizadas);
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    }

    
    
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tasks.filter(tarea => tarea.id !== id);
     setTasks(tareasActualizadas);
     localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tasks.map(tarea => {
      if(tarea.id===id){
        tarea.isComplete=!tarea.isComplete;
      }
      return tarea;
    });

    setTasks(tareasActualizadas);
  };

  return (
    <>
      <TareaForm onSubmit={agregarTarea} />
      <div className="task-list-container">
        {
          tasks.map((task) => 
            <Tarea
              key={task.id}
              id={task.id} 
              texto={task.texto}
              isComplete={task.isComplete}
              deleteTask={eliminarTarea}
              completeTask={completarTarea}
            />
          )
        }
      </div>
    </>
  );
};

export default TareaList;