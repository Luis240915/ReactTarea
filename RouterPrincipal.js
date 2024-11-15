import React from "react";
import {Route, Routes, NavLink, BrowserRouter} from 'react-router-dom';
import {AddTask} from "../Componentes/AddTask";
import {TaskDetails} from "../Componentes/TaskDetails";
import {TaskList} from "../Componentes/TaskList";

export const RouterPrincipal = () => {
    return(
        <BrowserRouter>
        <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <NavLink className="navbar-brand" to="/">Lista de Tareas</NavLink>
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/">Inicio</NavLink>
                    <NavLink className="nav-link" to="/AddTask">Agregar Tarea</NavLink>
                    
                </div>
            </nav>
        
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/AddTask" element={<AddTask />} />
                <Route path="/task/:id" element={<TaskDetails />} />
                
            </Routes>
        </div>
        </BrowserRouter>
        
    )
}