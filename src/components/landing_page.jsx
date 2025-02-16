import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import tiktok from "../static/images/tiktok.svg"
import pinterest from "../static/images/pinterest.svg"
import logo from "../static/images/logo.png"
import banner from "../static/images/banner/banner.jpg"

import {MangaComponent} from "./manga_element.jsx"

export const AnnounceHeader= () =>{

    const navigate=useNavigate();
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}`)
        navigate(`/search?${name}`)
      }

    return (
    <header>
        <div className="background-header">
            <div className="social-header">
                <a><i className="uil uil-facebook"></i></a>
                <a><i className="uil uil-instagram"></i></a>
                <a><i className="uil uil-whatsapp"></i></a>
                <a><img src={tiktok} width="24px" style={{"filter":"invert(1)"}}/></a>
                <a><img src={pinterest} width="24px" style={{"filter":"invert(1)"}}/></a>

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
                <a onClick={(e)=>{e.preventDefault; navigate("/")}}>
                    <img src={logo} height="100px"/>
                </a>
                <form onSubmit={handleSubmit} className="search-bar">
                    <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
                    <button><i className="uil uil-search-alt"></i></button>
                </form>
                <span className="user-options">
                    <a><i className="uil uil-user-circle"></i></a>
                    <a><i className="uil uil-heart-alt"></i></a>
                    <a><i className="uil uil-shopping-cart"></i>
                    <span className="cart-counter">0</span></a>
                </span>
            </div>
        </div>

        <nav className="nav-categories">
            <ul>
                <li>
                    <a className="nav-category" href="#home"><strong>Ofertas</strong></a>
                    <div className="category-container">
                        <a><strong>10% descuento en libros</strong><br/></a>
                        <a><strong>10% descuento en mangas</strong><br/></a>
                        <a><strong>10% descuento en comics</strong><br/></a>
                    </div>
                </li>
                <li>
                    <a className="nav-category" href="#about"><strong>Mangas</strong></a>
                    <div className="category-container">
                        <a><strong>Novelas ligeras</strong><br/></a>
                        <a><strong>Sketchbooks</strong><br/></a>
                        <a><strong>Tomos unicos</strong><br/></a>
                    </div>
                </li>
                <li>
                    <a className="nav-category" href="#services"><strong>Comics</strong></a>
                    <div className="category-container">
                        <a><strong>Marvel</strong><br/></a>
                        <a><strong>DC</strong><br/></a>
                        <a><strong>Varios</strong><br/></a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    )
  }


export const LandingBody= () =>{
    return (
            <main>
                <img src={banner} style={{"width":"100%"}}/>
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
                        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
                        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
                        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
                        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
                        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>

                        </div>
                    </div>
                </div>
            </main>
                )}

export const LandingDescription=()=>{
return (
                
                <div>

                </div>
        )}