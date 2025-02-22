import "../static/css/cart.css"
import photo from "/anime.jpg"
import { Link} from 'react-router-dom';
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const CartComponent = () => {
    const cart=JSON.parse(localStorage.getItem("cart"))
    
    // useEffect(() => {     //use effect hace la peticion cuando se monta el componente
    //     const cart=
    //     console.log(cart)
    // }, []);

    return(
    <main>
        <div className="cart-container">
            <h1>Tu carrito</h1>
            {

                cart.map(a=>
                <CartItemComponent key={a.id} id={a.id} quantity={a.quantity}/>)
                

            }
            {/* <CartItemComponent id="2"/>
            <CartItemComponent id="3"/>
            <CartItemComponent id="4"/> */}

        </div>
    </main>
    );
}

export const CartItemComponent = ({id,quantity}) =>{
    const [data, setData] = useState({
        title: null,
        price: null,
        image: null,
        quantity:null,
    });


    useEffect(() => {     //use effect hace la peticion cuando se monta el componente
        fetch(`${API_URL}/api/v1/books/getById?id=${id}`)
            .then(res => res.json())
            .then(resp => {
                // setTitle(resp.name);
                setData(prevData => ({
                    ...prevData,
                    ["title"]: resp.name,
                    ["price"]: resp.price,
                    ["image"]: resp.image,
                    ["quantity"]: resp.quantity
                }));
            })
            .catch(error => console.error("Error al obtener datos: ", error));
    }, []);
    return (
        
        <div className="item-container">
            <img alt="imagen" src={data.image}></img>
            <div className="item-title">
                <p>{data.title}</p>
            </div>
            <div className="price">
                <p>{`$${data.price}`}</p>
            </div>
            <div style={{"display":"flex"}}>
                <input type="button" defaultValue="-" onClick={() => {
                            quantity > 1 ? quantity=quantity - 1 :  quantity=quantity
                        }}/>
                <input type="number" defaultValue={quantity}/>
                <input type="button" defaultValue="+"/>
            </div>
            <div className="price">
                <p>{`$${data.price*quantity}`}</p>
            </div>
            <div>
                <button>Eliminar</button>
            </div>
        </div>
        
    );
}
