import "../static/css/manga.css"
import image from "../static/images/manga/boyabyss-1.webp"
export const MangaComponent= () =>{

    const url=image
    const title="Shonen no abyss 1"
    const price="$7.900"
return(
<div className="manga-container">
    <img src={url}></img>
    <div>
        <p>{title}</p>
        <p>{price}</p>
        <button className="cart-button"><i className="uil uil-shopping-cart"> </i>Añadir al carrito</button>
    </div>
</div>
);

}
