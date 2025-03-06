import {AnnounceHeader } from "../components/landing_page"
import { ProductBody } from "../components/product_component"
import '../static/css/landing_page.css'
import { useEffect, useState} from "react";
import { getCookie } from "../static/js/utils";
import { API_URL } from "../static/js/const";


export const Product=()=>{
    const [logged,setLogged]=useState(false);

    useEffect(() => {
        getCookie("access_token")!=undefined?setLogged(true):setLogged(false);

        getCookie("access_token")==undefined&&
        getCookie("refresh_token")!=undefined?
        fetch(API_URL+"/api/v1/auth/refresh",{
            method:"GET",
            headers:{
                "authorization":"Bearer "+getCookie("refresh_token")
            }
        }).then(res=>res.json())
        .then(resp=>{
            document.cookie=resp["token"]["access_token"];
            document.cookie=resp["token"]["refresh_token"];
            setLogged(true);
        }):null;      }, []);
    return (
    <>
        <AnnounceHeader isLogged={logged}/>
        <ProductBody/>
    </>
    )
}