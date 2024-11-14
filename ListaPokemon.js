import React, {useState, useEffect} from "react";

function ListaPokemon(){
    const [pokemon, setPokemon] = useState([]);
    const [cargando, setCargando]= useState(true);

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((response) => response.json())
        .then((data) =>{
            setPokemon(data.results);
            setCargando(false);
        })
        .catch((error)=>{
            setCargando(false);
        });
    },[]);

    return(
        <div>
            <h1>Lista de Pokemones</h1>
            {cargando ?(
                <p>Cargando ....</p>
            ) : (
                <ul>
                    {pokemon.map((poke, index) =>(
                        <li key={index}>
                            <strong>{poke.name}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

    
}

export default ListaPokemon;