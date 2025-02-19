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
        quantity: null,
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
                    ["price"]: "$" + resp.price,
                    ["image"]: resp.image,
                    ["quantity"]: resp.quantity
                }));
            })
            .catch(error => console.error("Error al obtener datos: ", error));
    }, []);


    return (
        <main>
            <div className="product-container">   {/*Float para separa imagen de portada*/}
                <div className="product-image-container"> {/*Imagen de portada*/}
                    <img src={data.image} alt={data.title} />
                </div>
                <div className="information-container">   {/*Contenedor de texto*/}
                    <h1 className="information-container-title">{data.title}</h1>
                    <h1 className="information-container-price">{data.price}</h1>
                    <div>
                        <button onClick={() => {
                            quantity > 1 ? setQuantity(prevQuant => prevQuant - 1) : setQuantity(prevQuant => prevQuant)
                        }}>-</button>
                        <input type="number" style={{ "width": "35px", "textAlign": "center" }}
                            min="0"
                            max={data.quantity}
                            value={quantity}
                            disabled
                        />
                        <button onClick={() => {
                            quantity < data.quantity ? setQuantity(prevQuant => prevQuant + 1) : setQuantity(prevQuant => prevQuant)
                        }}>+</button>
                        <button>añadir al carrito</button>
                    </div>
                    <div className="information-container-description">
                        <h2>Descripcion:</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>

        </main>
    );

}