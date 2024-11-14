import React, {useEffect, useState} from 'react';

export const PruebasCompontes = () =>{
    const [usuario, setUsuario]= useState("Luis Ramírez");
    const [fecha, setFecha]=useState("01-10-1998");

    const modUsuario = e =>{
        setUsuario(e.target.value);
    }

    const modFecha=e =>{
        setFecha(Date.now());
    }

    useEffect(() =>{
        console.log("Se cargo el componente de prueba");
    });

    useEffect(() =>{
        console.log("Cambio de usuario");
    }, [usuario])
    return(
        <div>
            <h3>El efecto -Hook useEffect</h3>
            <br></br>
            <strong>{usuario}</strong>
            <br></br>
            <strong>{fecha}</strong>
            <br></br>
            <input type='text' onChange={modUsuario} placeholder='ingresa nombre'></input>
            <button onClick={modFecha}>Cambiar Fecha</button>
        </div>
    )
}