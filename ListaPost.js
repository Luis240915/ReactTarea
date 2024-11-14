import React, {useState, useEffect} from "react";

function ListaPost(){

    const [posts, setPosts] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() =>{

        const fetchPosts = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error al obtener los posts:', error);
            }finally{
                setCargando(false);
            }
        };

        fetchPosts();
    },[]);

    return(
        <div>
            <h2>Lista de Publicaciones</h2>
            {cargando ? (
                <p>Cargando ....</p>
            ) : (
                <ul>
                    {posts.map((post)=>(
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    );
}

export default ListaPost;