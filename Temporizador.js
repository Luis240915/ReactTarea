import React, {useEffect, useState} from "react";

function Temporizador({tiempoInicial}){
    const [tiempo, setTiempo]=useState(tiempoInicial);

    useEffect(()=>{
        if(tiempo<=0) return;
    

    const temporizadod = setInterval(()=>{
        setTiempo((prevTiempo)=> prevTiempo-1);
    },1000);

    return () => clearInterval(temporizadod);
    }, [tiempo]);

return (
    <div>
        <h1>Cuenta Regresiva: {tiempo} segundos</h1>
        {tiempo === 0 && <p>Tiempo terminado</p>}
    </div>
);
}
export default Temporizador;