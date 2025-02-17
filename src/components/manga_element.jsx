import "../static/css/manga.css"
export const MangaComponent= ({title,price,url, onClick}) =>{

return(
<div className="manga-container">
    <div className="manga-image-container">
    <img src={url} onClick={onClick}></img>
    </div>
    <div>
        <p>{title}</p>
        <p>{price}</p>
        <button className="cart-button"><i className="uil uil-shopping-cart"> </i>Añadir al carrito</button>
    </div>
</div>
);

}
