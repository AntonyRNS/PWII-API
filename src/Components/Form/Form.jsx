import { useEffect } from "react"
import axios from "axios";

export default function Form() {
    const enviarForm = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: document.getElementById('title').value,
            body: document.getElementById('body').value,
            userId: 1,

        }).then(response => console.log(response.data))

    }

    return (
        <div>
            <form onSubmit={enviarForm}>
                <input type="text" placeholder="Digite o título." id="title" />
                <input type="text" placeholder="Digite o conteúdo." id="body" />
                <input type="submit" />
            </form>
        </div>
    )
}