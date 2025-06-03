import { useNavigate } from "react-router-dom"

export default function Botao(){
    const navigate = useNavigate();
    function abrirForm(){
        navigate('/form')
    }
    return(
        <button onClick={abrirForm}>Abrir form</button>
    )
}