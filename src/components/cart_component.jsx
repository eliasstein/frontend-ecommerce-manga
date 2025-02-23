import "../static/css/cart.css"
import photo from "/anime.jpg"
import { Link} from 'react-router-dom';
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const CartComponent = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal(cart);
    }, [cart]); // Se recalcula el total cada vez que el carrito cambia

    const calculateTotal = (cart) => {
        const newTotal = cart.reduce((acc, e) => acc + e.quantity * e.price, 0);
        setTotal(newTotal);
    };

    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cart.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <main>
            <div className="cart-container">
                <h1>Tu carrito</h1>
                {
                    cart.length > 0 ? 
                        cart.map(item => (
                            <CartItemComponent 
                                key={item.id} 
                                id={item.id} 
                                quantity={item.quantity} 
                                updateQuantity={updateQuantity} 
                            />
                        )) : <h1 style={{textAlign:"center"}}>Carrito vacío</h1>
                }
                {
                    cart.length>0?
                    <>
                        <div className="total-container">
                            <p>
                                <strong style={{color:"red"}}>TOTAL: </strong>
                                {"$"+total}
                            </p>
                        </div>
                        <button className="checkout-button" onClick={() => {
                        localStorage.removeItem("cart");
                        setCart([]);
                        }}>
                        Completar pedido
                        </button>
                    </>:""
                }
            </div>
        </main>
    );
}


export const CartItemComponent = ({ id, quantity, updateQuantity }) => {
    const [data, setData] = useState({ title: null, price: null, image: null, stock: null });
    const [q, setQ] = useState(quantity);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = cart.find(item => item.id === id);

        if (item) {
            setData({
                title: item.title,
                price: item.price,
                image: item.image,
                stock: item.stock
            });
        }
    }, []);

    useEffect(() => {
        updateQuantity(id, q); // Actualiza el total en el componente padre
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
        if(JSON.parse(localStorage.getItem("cart")).length==0)  //Comprobacion para no tener el carrito con un array vacio
            localStorage.removeItem("cart")
        window.location.reload()
    }


    return (
        <div className="item-container">
            <Link to={"/product?id="+id}>
                <div className="image-container">
                    <img alt="Cargando..." src={data.image}/>
                </div>
            </Link>
            <div className="item-title">
                <p>{data.title || "Cargando..."}</p>
            </div>
            <div className="price">
                <p>{data.price ? `$${data.price}` : "Cargando..."}</p>
            </div>
            <div style={{ display: "flex" }}>
                <input type="button" defaultValue="-" onClick={() => q > 1 && setQ(q - 1)} />
                <input type="number" value={q} readOnly />
                <input type="button" defaultValue="+" onClick={() => q < data.stock && setQ(q + 1)} />
            </div>
            <div className="price">
                <p>{data.price ? `$${data.price * q}` : "Cargando..."}</p>
            </div>
            <div>
                <button onClick={removeFromCart}>
                    <i className="uil uil-trash-alt"></i>
                </button>
            </div>
        </div>
    );
}
