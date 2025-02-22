import "../static/css/product.css"
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const ProductBody = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState({
        title: null,
        description: null,
        price: null,
        image: null,
        quantity:null,
    });
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {     //use effect hace la peticion cuando se monta el componente
        fetch(`${API_URL}/api/v1/books/getById?id=${searchParams.get("id")}`)
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                // setTitle(resp.name);
                setData(prevData => ({
                    ...prevData,
                    ["title"]: resp.name,
                    ["description"]: resp.description,
                    ["price"]: resp.price,
                    ["image"]: resp.image,
                    ["quantity"]: resp.quantity
                }));
            })
            .catch(error => console.error("Error al obtener datos: ", error));
    }, []);
    const addToCart = (e) => {
        e.preventDefault();
        if (quantity < 1) //Comprobocacion de si se añade una cantidad de 0 o menos
            return
        const cart = localStorage.getItem("cart");        //Comprobamos si existe "cart" en el local storage
        if (cart != null) {    //En el caso de que exista hacemos lo siguiente
            const cartJson = JSON.parse(cart);    //creamos una variable que almacene el contenido del carrito
            const index = cartJson.findIndex(item => item.id == searchParams.get("id"));  //buscamos el id actual en el carrito
            if (index !== -1)  //si existe 
                cartJson[index].quantity = quantity;  //modificamos la cantidad del id actual
            else   //si no existe el id en el carrito
                cartJson.push({ "id": parseInt(searchParams.get("id")), "quantity": quantity ,"title":data.title,"price":data.price,"image":data.image,"stock":data.quantity})    //añadimos el id y la cantidad seleccionada al carrito
            localStorage.setItem("cart", JSON.stringify(cartJson))
        }
        else {   //si no existe creamos el objeto cart en el local storage
            localStorage.setItem("cart",`[{"id":${searchParams.get("id")},"quantity":${quantity},"title":"${data.title}","price":${data.price},"image":"${data.image}","stock":${data.quantity}}]`)
        }
    }

    return (
        <main>
            <div className="product-container">   {/*Float para separa imagen de portada*/}
                <div className="product-image-container"> {/*Imagen de portada*/}
                    <img src={data.image} alt={data.title} />
                </div>
                <div className="information-container">   {/*Contenedor de texto*/}
                    <h1 className="information-container-title">{data.title}</h1>
                    <h1 className="information-container-price">{"$"+data.price}</h1>
                    <form onSubmit={addToCart}>
                        <input type="button" value="-" onClick={() => {
                            quantity > 1 ? setQuantity(prevQuant => prevQuant - 1) : setQuantity(prevQuant => prevQuant)
                        }} />
                        <input name="quantity" type="number" style={{ "width": "35px", "textAlign": "center" }}
                            min="0"
                            max={data.quantity}
                            value={quantity}
                            disabled/>
                        <input type="button" value="+" onClick={() => {
                            quantity < data.quantity ? setQuantity(prevQuant => prevQuant + 1) : setQuantity(prevQuant => prevQuant)
                        }} />
                        <button>añadir al carrito</button>
                    </form>
                    <div className="information-container-description">
                        <h2>Descripcion:</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>

        </main>
    );

}