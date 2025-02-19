import "../static/css/manga.css"
import { Link} from 'react-router-dom';
import { useEffect, useState } from "react";

export const MangaComponent = ({ id, title, price, url, quantity }) => {
    const [shortTitle, setShortTitle] = useState(title)

    useEffect(() => {
        title.length > 35 ? setShortTitle(title.slice(0, 32) + "...") : setShortTitle(title);
    });


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
                <p>{price}</p>
                <button className="cart-button"><i className="uil uil-shopping-cart"> </i>Añadir al carrito</button>
            </div>
        </div>
    );

}
