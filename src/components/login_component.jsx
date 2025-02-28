import { useState } from "react"
import "../static/css/register.css"
import animebg from "/anime.jpg"
import { Link } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

export const LoginComponent = () =>{
    const [error,setError]=useState("none")


    const handleForm = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const remember = e.target.remember.checked;
            
        fetch(API_URL+"/api/v1/auth/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                remember: remember
            })
        })
        .then(res=>{
            if(res.ok)
                return res.json();
            else if (res.status===400)
                return Promise.reject({status: res.status, message: "Error al iniciar sesion."});
        })
        .then(resp=>{
            console.log(resp);
            document.cookie=resp["access_token"];
            if (resp["refresh_token"]!=undefined)
                document.cookie=resp["refresh_token"];
        }
        )        
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
                <input id="email" type="email" required autoComplete="on"></input>
                <p>Contraseña</p>
                <input id="password" type="password" required autoComplete="off"></input>
            </div>
            <input type="checkbox" id="remember"/>
            <label htmlFor="remember">Recordar contraseña</label>
            <div>
                <button className="register-form-send-button">Ingresar</button>
            </div>
        </form>
        </div>
        <div className="register-errors">
            <p id="error-msg" style={{"display":error}}>Error. Asegurate de haber colocado los datos correctamente </p>
            <Link to="/user/register">¿No tienes una cuenta? Entra aquí</Link>
        </div>

    </main>
    );
}