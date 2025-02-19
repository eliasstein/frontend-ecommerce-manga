import "../static/css/register.css"
import animebg from "/anime_2.jpg"
export const RegisterComponent = () =>{
    return (
    <main>
        <div className="anime-bg-image-container">
            <h1>Unirse a mahou manga</h1>
            <img src={animebg}></img>
        </div>
        <div className="register-form">
        <form>
            <div>
                <p>Nombre de usuario</p>
                <input required></input>
                <p>Email</p>
                <input type="email" required></input>
                <p>Contraseña</p>
                <input type="password" required></input>
                <p>Confirmar Contraseña</p>
                <input type="password" required></input>
            </div>
            <button className="register-form-send-button">Enviar</button>
            <br/><br/>
            <a>¿Ya tienes cuenta? Entra aquí</a>
        </form>

        </div>
    </main>
    );
}