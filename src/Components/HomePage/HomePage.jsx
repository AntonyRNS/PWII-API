import { useState, useEffect } from "react";

export default function HomePage(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => setPosts(data))
        }, []);
    return (

        <ul>
            {posts.map(post =>{
                return(
                <li key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
                )
            })}
        </ul>
    )
}