import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaLogin() {
    const [usuarios, setUsuarios] = useState([])
    const [logado, setLogado] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsuarios(data))
    }, []);
    const checarLogin = (e) => {
        e.preventDefault();
        console.log(usuarios)
        const inputUsername = document.getElementById('username').value
        const inputEmail = document.getElementById('email').value
        usuarios.forEach(usuario => {
            if (usuario.username === inputUsername && usuario.email === inputEmail){
                setLogado(true)
            }
        });
            if (logado){
                navigate('/homepage')
            }else{
                alert('Username ou Email incorretos')
            }
        
    } 
    return (
        <div>
            <form onSubmit={checarLogin}>
                <input type="text" placeholder="Digite seu username." id="username"/>
                <input type="text" placeholder="Digite seu email." id="email"/>
                <input type="submit"></input>
            </form>
        </div>
        
    )
}