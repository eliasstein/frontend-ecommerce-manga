import { useState } from "react"
import "../static/css/register.css"
import animebg from "/anime_2.jpg"
import { Link, useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

export const RegisterComponent = () =>{
    const [error,setError]=useState("none")
    const [errorText,setErrorText]=useState("")
    const navigate = useNavigate();



    const handleForm = (e) =>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;

        if (password!=password2){
            setError("block")
            setErrorText("Error. Ambas contraseñas deben ser identicas")
            return
        }
            
        fetch(API_URL+"/api/v1/auth/register",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(res=>{
            if(res.ok)
                return res
            else if (res.status===400)
                return Promise.reject({status: res.status, message: "El correo ya se encuentra registrado"})
            })
        .then(
            //Si esto es correcto deberia mostrar un modal
            navigate("/")
        )
        .catch(e=>{
            setError("block")
            setErrorText("Ha ocurrido un error, verifique que los datos sean correctos")
            if (e.status==400){
                setError("block")
                setErrorText(e.message)
            }

        })
        
    }

    return (
    <main>
        <div className="anime-bg-image-container">
            <h1>Unirse a mahou manga</h1>
            <img src={animebg} alt="banner"></img>
        </div>
        <div className="register-form">
        <form onSubmit={handleForm}>
            <div>
                <p>Nombre de usuario</p>
                <input required id="username"></input>
                <p>Email</p>
                <input type="email" id="email" required autoComplete="on"></input>
                <p>Contraseña</p>
                <input type="password" id="password" required autoComplete="off"></input>
                <p>Confirmar Contraseña</p>
                <input type="password" id="password2" required autoComplete="off"></input>
            </div>
            <button className="register-form-send-button">Registrarse</button>
        </form>
        </div>
        <div className="register-errors">
            <p id="error-msg" style={{"display":error}}>{errorText}</p>
            <Link to="/user/login">¿Ya tienes cuenta? Entra aquí</Link>
        </div>

    </main>
    );
}