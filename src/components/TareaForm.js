import React, { useState } from 'react';
import '../styles/TareaForm.css';
import { v4 as uuidv4 } from 'uuid';

const TareaForm = (props) => {

  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    //console.log('Escribiendo...');
    setInput(e.target.value);
    //console.log(e.target.value);
  };

  const manejarEnvio = (e) =>  {
    e.preventDefault();
    //console.log("enviando formulario");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      isComplete: false
    };

    props.onSubmit(tareaNueva);
  };
  return (
    <form className="task-form" onSubmit={manejarEnvio}>
        <input
            className="task-form-input"
            placeholder="Escriba la tarea"
            name="texto"
            type="text"
            onChange={manejarCambio}
        />
        <button className='task-form-button'>
            Agregar Tarea
        </button>
    </form>
  );
};

export default TareaForm;