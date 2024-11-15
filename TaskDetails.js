import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
 
export const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
 
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      const foundTask = tasks.find((task) => task.id === parseInt(id, 10));
      setTask(foundTask);
    }
  }, [id]);
 
  if (!task) {
    return <p>Tarea no encontrada.</p>;
  }
 
  return (
<div>
<h2>Detalles de la Tarea</h2>
<h4>{task.title}</h4>
<p>{task.description}</p>
<Link to="/" className="btn btn-primary">Volver a la Lista</Link>
</div>
  );
}