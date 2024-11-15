import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export const TaskList = () => {   const [tasks, setTasks] = useState([]); 
    useEffect(() => {     
        const storedTasks = localStorage.getItem('tasks');     
        if (storedTasks) {       
            setTasks(JSON.parse(storedTasks));     
        }  
    }, []);   
    
    return ( 
        <div>
            <h2>Lista de Tareas</h2> 
            {tasks.length === 0 ? ( 
                <p>No hay tareas. <Link to="/add-task">Agrega una nueva tarea</Link>.</p> 
            ) : ( 
            <ul className="list-group"> 
                {tasks.map((task) => ( 
                    <li key={task.id} className="list-group-item">
                        <h5>{task.title}</h5>
                        <Link to={`/task/${task.id}`} className="btn btn-primary btn-sm">Ver Detalles</Link>
                    </li> 
                ))} 
            </ul> 
            )} 
        </div> 
    ); 
} 