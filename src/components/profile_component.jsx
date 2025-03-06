import { useState,useEffect } from "react";
import { deleteAllCookies,getCookie} from "../static/js/utils";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../static/js/const";

export const ProfileBodyComponent = () =>{
    const navigate = useNavigate();
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");

    const Logout = () =>{
        deleteAllCookies();
        navigate("/");
    }
    const Update = (e) =>{
        e.preventDefault();
        const username=e.target.username.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        fetch(API_URL+"/api/v1/users/update",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+getCookie("access_token")
            },
            body:JSON.stringify({
                "username":username,
                "email":email,
                "password":password
            })
        })
        Logout()

    }

    useEffect(() => {
        fetch(API_URL+"/api/v1/users/getByToken",{
            method:"GET",
            headers:{
                "authorization":"Bearer "+getCookie("access_token")
            }
        }).then(res=>res.json())
        .then(resp=>{
            setEmail(resp["email"])
            setUsername(resp["username"])
        });
    }, []);
    
    return(
        <main>
            <div style={{display:"flex", justifyContent:"center"}}>
                <form style={{display:"flex", flexDirection:"column", marginTop:"20px"}} onSubmit={Update}>
                    <label htmlFor="">Nombre de usuario: {username}</label>
                    <input minLength="8" required id="username"></input>
                    <label htmlFor="">Email: {email}</label>
                    <input type="email" required id="email"></input>
                    <label htmlFor="">Password: </label>
                    <input type="password" minLength="8" autoComplete="off" required id="password"></input>
                    <button>Actualizar perfil</button>
                    <label>Nota: al actualizar el perfil se cerrara la sesion.</label>
                </form>
            </div>
            <div style={{display:"flex",justifyContent:"center", marginTop:"20px"}}>
                <button onClick={Logout}>CERRAR SESION</button>
            </div>

        </main>
    );
}
