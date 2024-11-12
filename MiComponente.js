import React from "react";

const MiComponente =() =>{
    const nombre= "Luis Daniel Ramírez";
    const direccion= "ciudad";
    let usuario ={
        nombre: "Jose Ramírez",
        direccion: "6av. 0-15 zona 2"
    }
    return(
        <div>
            <h1>Información</h1>
            <ul>
                <li>Nombre: <strong>{nombre}</strong></li>
                <li>Direccion: <strong>{direccion}</strong></li>
                <li>Objeto: {JSON.stringify(usuario)}</li>
            </ul>
            
        </div>
        
    )
        
}

export default MiComponente;