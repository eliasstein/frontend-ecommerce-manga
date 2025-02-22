import "../static/css/cart.css"
import photo from "/anime.jpg"
import { Link} from 'react-router-dom';
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const CartComponent = () => {
    const cart=JSON.parse(localStorage.getItem("cart"))

    return(
    <main>
        <div className="cart-container">
            <h1>Tu carrito</h1>
            {
                (cart!=null)?cart.map(a=>
                <CartItemComponent key={a.id} id={a.id} quantity={a.quantity}/>):<h1>Carrito vacio</h1>
            }
                    <button style={{
                        "height":"40px",
                        "borderRadius":"10px",
                        "backgroundColor":"blue",
                        "color":"white"}}
                        onClick={()=>{localStorage.removeItem("cart");window.location.reload();}}>Completar pedido</button>

        </div>
    </main>
    );
}

export const CartItemComponent = ({id,quantity}) =>{
    const [data, setData] = useState({
        title: null,
        price: null,
        image: null,
        stock:null
    });
    const [q,setQ]=useState(quantity);

    useEffect(() => {     //use effect hace la peticion cuando se monta el componente
        const cart = localStorage.getItem("cart");        //Comprobamos si existe "cart" en el local storage
        if (cart != null) {    //En el caso de que exista hacemos lo siguiente
            const cartJson = JSON.parse(cart);    //creamos una variable que almacene el contenido del carrito
            const index = cartJson.findIndex(item => item.id == id);  //buscamos el id actual en el carrito
            if (index !== -1){
                setData(prevData => ({
                    ...prevData,
                    ["title"]: cartJson[index].title,
                    ["price"]: cartJson[index].price,
                    ["image"]: cartJson[index].image,
                    ["stock"]:cartJson[index].stock
                }));
                cartJson[index].quantity=q;

            }
            localStorage.setItem("cart", JSON.stringify(cartJson))
        }
        
    }, [q]);

    const removeFromCart=()=>{
        const cart = localStorage.getItem("cart");        //Comprobamos si existe "cart" en el local storage
        if (cart != null) {    //En el caso de que exista hacemos lo siguiente
            const cartJson = JSON.parse(cart);    //creamos una variable que almacene el contenido del carrito
            const index = cartJson.findIndex(item => item.id == id);  //buscamos el id actual en el carrito
            if (index !== -1)  //si existe 
                cartJson.splice(index,1)  //modificamos la cantidad del id actual
            localStorage.setItem("cart", JSON.stringify(cartJson))
        }
        console.log(localStorage.getItem("cart").length)

        if(JSON.parse(localStorage.getItem("cart")).length==0)  //Comprobacion para no tener el carrito con un array vacio
            localStorage.removeItem("cart")
        window.location.reload()
    }

    return (
        
        <div className="item-container">
            <img alt="Cargando..." src={data.image}></img>
            <div className="item-title">
                <p>{data.title!=null?data.title:"Cargando..."}</p>
            </div>
            <div className="price">
                <p>{`${data.price!=null?"$"+data.price:"Cargando..."}`}</p>
            </div>
            <div style={{"display":"flex"}}>
                <input type="button" defaultValue="-" onClick={()=>q > 1 ?setQ(q-1):setQ(q)}/>
                <input type="number" value={q} readOnly/>
                <input type="button" defaultValue="+" onClick={()=>q < data.stock ?setQ(q+1):setQ(q)}/>
            </div>
            <div className="price">
                <p>{`${data.price!=null?"$"+data.price*q:"Cargando..."}`}</p>
            </div>
            <div>
                <button onClick={removeFromCart}>
                    <i className="uil uil-trash-alt"></i>
                </button>
            </div>
        </div>
        
    );
}
