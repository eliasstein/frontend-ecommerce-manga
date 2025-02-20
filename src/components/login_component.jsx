import { useState } from "react"
import "../static/css/register.css"
import animebg from "/anime.jpg"


export const LoginComponent = () =>{
    const [error,setError]=useState("none")


    const handleForm = (e) =>{
        e.preventDefault();
        setError("block")
    }

    return (
    <main>
        <div className="anime-bg-image-container">
            <h1>Se parte de mahou manga</h1>
            <img src={animebg} alt="banner"></img>
        </div>
        <div className="register-form">
        <form onSubmit={handleForm}>
            <div>
                <p>Email</p>
                <input type="email" required autoComplete="on"></input>
                <p>Contraseña</p>
                <input type="password" required autoComplete="off"></input>
            </div>
            <button className="register-form-send-button">Registrarse</button>
        </form>
        </div>
        <div className="register-errors">
            <p id="error-msg" style={{"display":error}}>Error. Asegurate de haber colocado los datos correctamente </p>
            <a>¿No tienes una cuenta? Entra aquí</a>
        </div>

    </main>
    );
}