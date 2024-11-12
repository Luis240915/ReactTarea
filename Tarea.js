import React from "react";

const Tarea =() =>{
    const libros = [
        'Libro1: C++. Autor: Tommas Edisson',
        'Libro2: Suma de Polinomios, Autor: Daniel Rodas',
        'Libro3: Programación Básica, Autor: Edith Rojas',
        'Libro4: Algoritmos Básicos, Autor: Lucrecia Fuentes',
        'Libro5: Algoritmos Intermedio, Autor: Lucrecia Fuentes',
        'Libro6: Algoritmos Avanzado, Autor: Lucrecia Fuentes',
        'Libro7: Matemática I, Autor: Juan Morales',
        'Libro8: Matemática II, Autor: Juan Morales',
        'Libro9: Matemática III, Autor: Juan Morales',
        'Libro10: Historia, Autor: Morales Anderson'

    ];
    const listItems = libros.map(person => <li>{person}</li>);
    return(
        <div>
            <h1>Listado de Libros</h1>
            <ul>
                {listItems}
            </ul>
            
        </div>
        
    )
        
}

export default Tarea;