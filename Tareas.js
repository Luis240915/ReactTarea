import React, {useState} from "react";

function Tareas(){

    const [tareas, setTareas] = useState([]);
    const [tareaEntrada, setTareaEntrada] = useState('');

    const handleInputChange = (e) => {
        setTareaEntrada(e.target.value);
    };

    const handleAddtask = () => {
        if (tareaEntrada.trim() !== ''){
            const nuevaTarea = {
                id: Date.now(),
                text: tareaEntrada,
            };
            setTareas([...tareas, nuevaTarea]);
            setTareaEntrada('');
        }
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input 
                type ="text"
                placeholder="Escribe una Tarea"
                value={tareaEntrada}
                onChange={handleInputChange}
            />
            <button onClick={handleAddtask}>Agregar Tarea</button>
            <ul>
                {tareas.map((tarea)=>(
                  <li key={tarea.id}>{tarea.text}</li>  
                ))}
            </ul>
        </div>
    );


}
export default Tareas;