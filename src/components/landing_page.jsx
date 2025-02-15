import tiktok from "../static/images/tiktok.svg"
import pinterest from "../static/images/pinterest.svg"
import logo from "../static/images/logo.png"
import banner from "../static/images/banner/banner.jpg"

import {MangaComponent} from "./manga_element.jsx"

export const AnnounceHeader= () =>{
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
                <img src={logo} height="100px"/>
                <form className="search-bar">
                    <input></input>
                    <button><i className="uil uil-search-alt"></i></button>
                </form>
                <span>
                    <a><i className="uil uil-user-circle"></i></a>
                    <a><i className="uil uil-heart-alt"></i></a>
                    <a><i className="uil uil-shopping-cart"></i></a>
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
                        <MangaComponent></MangaComponent>
                        <MangaComponent></MangaComponent>
                        <MangaComponent></MangaComponent>
                        <MangaComponent></MangaComponent>
                        <MangaComponent></MangaComponent>

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