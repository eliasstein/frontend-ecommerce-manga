import { useState } from "react"
import "../static/css/register.css"
import animebg from "/anime_2.jpg"


export const RegisterComponent = () =>{
    const [error,setError]=useState("none")


    const handleForm = (e) =>{
        e.preventDefault();
        setError("block")
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
                <input required></input>
                <p>Email</p>
                <input type="email" required autoComplete="on"></input>
                <p>Contraseña</p>
                <input type="password" required autoComplete="off"></input>
                <p>Confirmar Contraseña</p>
                <input type="password" required autoComplete="off"></input>
            </div>
            <button className="register-form-send-button">Registrarse</button>
            <p id="error-msg" style={{"display":error}}>Error. Asegurate de haber colocado los datos correctamente </p>
            <br/><br/>
            <a>¿Ya tienes cuenta? Entra aquí</a>
        </form>

        </div>
    </main>
    );
}