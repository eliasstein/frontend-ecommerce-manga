import "../static/css/manga.css"
import { Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import Modal from './modals/add_to_cart_modal.jsx';

export const MangaComponent = ({ id, title, price, url, quantity}) => {
    const [shortTitle, setShortTitle] = useState(title)
    const [isModalOpen, setIsModalOpen] = useState("");

    useEffect(() => {
        title.length > 35 ? setShortTitle(title.slice(0, 32) + "...") : setShortTitle(title);
    });



    const addToCart = (e) => {
        if (quantity<1)
            return
        setIsModalOpen(true);
        const cart = localStorage.getItem("cart");        //Comprobamos si existe "cart" en el local storage
        if (cart != null) {    //En el caso de que exista hacemos lo siguiente
            const cartJson = JSON.parse(cart);    //creamos una variable que almacene el contenido del carrito
            const index = cartJson.findIndex(item => item.id == id);  //buscamos el id actual en el carrito
            if (index !== -1)  //si existe en el carrito
                cartJson[index].quantity<quantity?cartJson[index].quantity+=1:cartJson[index].quantity=quantity;  //modificamos la cantidad del id actual
            else   //si no existe el id en el carrito
                cartJson.push({ "id": id, "quantity": 1 ,"title":title,"price":price,"image":url,"stock":quantity})    //añadimos el id y la cantidad seleccionada al carrito
            localStorage.setItem("cart", JSON.stringify(cartJson))
        }
        else {   //si no existe creamos el objeto cart en el local storage
            localStorage.setItem("cart",`[{"id":${id},"quantity":1,"title":"${title}","price":${price},"image":"${url}","stock":${quantity}}]`)

        }
    }



    return (
        <div className="manga-container">
            <div className="manga-image-container">
                {
                    quantity < 1 ?
                        <p style={{
                            "position": "absolute",
                            "zIndex": "2",
                            "backgroundColor": "lightblue",
                            "padding": "5px",
                            "borderRadius": "10px",
                            "color": "black",
                            "fontSize": "24px"
                        }}>sin stock</p> :
                        <></>
                }
                <Link to={"/product?id="+id}>
                <img src={url}
                    alt={title}
                    style={quantity < 1 ? { "filter": "blur(1px) grayscale(1)" } : {}}>
                </img>
                </Link>
            </div>
            <div className="manga-title-price">
                <p className="manga-title">{shortTitle}</p>
                <p>{"$"+price}</p>
                <button className="cart-button" onClick={addToCart}>
                    <i className="uil uil-shopping-cart"/>Añadir al carrito
                </button>
            </div>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(!isModalOpen)}/>
        </div>
    );

}
