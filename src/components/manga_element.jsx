import "../static/css/manga.css"
import { useNavigate } from 'react-router-dom';
import { useEffect,useState} from "react";

export const MangaComponent= ({id,title,price,url}) =>{
    const navigate=useNavigate();
    const [shortTitle,setShortTitle]=useState(title)

    useEffect(() => {        
        title.length>35?setShortTitle(title.slice(0,32)+"..."):setShortTitle(title)
    });


return(
<div className="manga-container">
    <div className="manga-image-container">
    <img src={url} onClick={()=>navigate("/product?id="+id)}></img>
    </div>
    <div className="manga-title-price">
        <p className="manga-title">{shortTitle}</p>
        <p>{price}</p>
        <button className="cart-button"><i className="uil uil-shopping-cart"> </i>Añadir al carrito</button>
    </div>
</div>
);

}
