import "../static/css/manga.css"
import { useNavigate } from 'react-router-dom';

export const MangaComponent= ({id,title,price,url}) =>{
    const navigate=useNavigate();

return(
<div className="manga-container">
    <div className="manga-image-container">
    <img src={url} onClick={()=>navigate("/product?id="+id)}></img>
    </div>
    <div>
        <p>{title}</p>
        <p>{price}</p>
        <button className="cart-button"><i className="uil uil-shopping-cart"> </i>Añadir al carrito</button>
    </div>
</div>
);

}
