import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

import tiktok from "../static/images/tiktok.svg"
import pinterest from "../static/images/pinterest.svg"
import logo from "../static/images/logo.png"
import banner from "../static/images/banner/banner.jpg"

import { MangaComponent } from "./manga_element.jsx"

const API_URL = import.meta.env.VITE_API_URL

export const AnnounceHeader = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const title = "";

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?name=${name}
${searchParams.get("type") != null ? "&type=" + searchParams.get("type") : ""}
${searchParams.get("stock") != null ? "&stock=true" : ""}
${searchParams.get("adult") != null ? "&adult=true" : ""}`)
        // event.target.elements.searchInput.value=name;
    }

    useEffect(() => {
        const search = document.querySelector(".search-bar input")
        if (search.value != undefined)
            search.value = searchParams.get("name")
    }, []);

    return (
        <header>
            <div className="background-header">
                <div className="social-header">
                    <a><i className="uil uil-facebook"></i></a>
                    <a><i className="uil uil-instagram"></i></a>
                    <a><i className="uil uil-whatsapp"></i></a>
                    <a><img src={tiktok} width="24px" style={{ "filter": "invert(1)" }} alt='tiktok' /></a>
                    <a><img src={pinterest} width="24px" style={{ "filter": "invert(1)" }} alt='pinterest' /></a>

                </div>
                <div className="announce">
                    <p>
                        <strong>💸 3 productos o más = 5% OFF ❤️‍🔥</strong>
                    </p>
                    <p>
                        <strong>💸 6 productos o más = 10% OFF ❤️‍🔥</strong>
                    </p>
                    <p>
                        <strong>💸 12 productos o más = 15% OFF ❤️‍🔥</strong>
                    </p>
                </div>
            </div>
            <div>
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} height="100px" alt='mahou-manga' />
                    </Link>
                    <form onSubmit={handleSubmit} className="search-bar">
                        <input id="searchInput" type="text" onChange={e => setName(e.target.value)} />
                        <button><i className="uil uil-search-alt"></i></button>
                    </form>
                    <span className="user-options">
                        {/* <Link to="/user/register">
                        <i className="uil uil-user-circle"/>
                    </Link> */}
                        <ul style={{ "margin": 0 }}>
                            <li>
                                <a>
                                    <i className="uil uil-user-circle" />
                                </a>
                                <div className="category-container">
                                    <Link to="/user/login">
                                        <i className="uil uil-sign-in-alt"></i>Ingresar
                                    </Link>
                                    <Link to="/user/register">
                                        <i className="uil uil-user-plus"></i>Registrarse
                                    </Link>
                                    <Link to="/cart">
                                        <i className="uil uil-shopping-bag"></i>Ver carrito
                                    </Link>
                                </div>
                            </li>
                        </ul>

                        <Link to="">
                            <i className="uil uil-heart-alt" />
                        </Link>
                        <Link to="/cart">
                            <i className="uil uil-shopping-cart" />
                            <span className="cart-counter">0</span>
                        </Link>
                    </span>
                </div>
            </div>

            <nav className="nav-categories">
                <ul>
                    <li>
                        <a className="nav-category"><strong>Ofertas</strong></a>
                        <div className="category-container">
                            <a><strong>10% descuento en libros</strong><br /></a>
                            <a><strong>10% descuento en mangas</strong><br /></a>
                            <a><strong>10% descuento en comics</strong><br /></a>
                        </div>
                    </li>
                    <li>
                        <a className="nav-category"><strong>Mangas</strong></a>
                        <div className="category-container">
                            <a><strong>Novelas ligeras</strong><br /></a>
                            <a><strong>Sketchbooks</strong><br /></a>
                            <a><strong>Tomos unicos</strong><br /></a>
                        </div>
                    </li>
                    <li>
                        <a className="nav-category"><strong>Comics</strong></a>
                        <div className="category-container">
                            <a><strong>Marvel</strong><br /></a>
                            <a><strong>DC</strong><br /></a>
                            <a><strong>Varios</strong><br /></a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export const LandingBody = () => {

    const [book, setBook] = useState(null);
    useEffect(() => {     //use effect hace la peticion cuando se monta el componente
        fetch(API_URL + "/api/v1/books/recent")
            .then(res => res.json())
            .then(book => setBook(book))
            .catch(error => console.error("Error al obtener datos: ", error));
    }, []);

    return (
        <main>
            <img src={banner} style={{ "width": "100%" }} alt='banner' />
            <div className="body-container">
                <div>
                    <h1>Mahou Manga - Especialistas en libros, mangas y cómics</h1>
                    <p>Primer y unico ecommerce de manga creado por Elias Steinkamp.
                        Espero disfrutes de tu estadia navegando por mi pagina
                    </p>
                </div>
                <div>
                    <h1>Novedades</h1>
                    <div className="new-mangas-container">
                        {book?.map(object => {
                            if (object != null) {
                                // console.log(object)
                                return <MangaComponent
                                    key={object.id}
                                    id={object.id}
                                    title={object.name}
                                    price={"$" + object.price}
                                    url={object.image}
                                    quantity={object.quantity} />
                            }
                            return null; // Evita que `map()` devuelva `undefined`
                        })}

                    </div>
                </div>
            </div>
        </main>
    )
}

export const LandingDescription = () => {
    return (

        <div>

        </div>
    )
}