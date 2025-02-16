import "../static/css/search_page.css";
import { MangaComponent } from "./manga_element";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const SearchBody = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const [book, setBook] = useState(null);
    const [errorMessage, setErrorMessage]=useState(null);


    useEffect(() => {     //use effect hace la peticion cuando se monta el componente
        if (name.trim() === "") return; // Evitar llamadas vacías
        fetch(API_URL + "/api/v1/books/getByName?name=" + name)
            .then(res => res.json())
            .then(book => { 
                if(book.length<1)
                    setErrorMessage("No hay libros disponibles")
                setBook(book)})
            .catch(error => console.error("Error al obtener datos: ", error));
    }, [name]);

    return (
        <main>
            <div className="filters">
                <h1>Filtros:</h1>
                <input type="checkbox" id="manga" />
                <label htmlFor="manga">Mangas</label>
                <input type="checkbox" id="comics" />
                <label htmlFor="comics">Comics</label>
                <input type="checkbox" id="stock" />
                <label htmlFor="stock">En stock</label>
                <input type="checkbox" id="+18" />
                <label htmlFor="+18">Mas de 18 años</label>
            </div>

            <div className="search-manga-container">

            {!book || book.length < 1 ? (
                <h1>{errorMessage}</h1>
            ) : (
                book.map(object => (
                    <MangaComponent
                        key={object.id}
                        title={object.name}
                        price={"$" + object.price}
                        url={object.image}
                        onClick={() => console.log(object.id)}
                    />
                ))
            )}
            </div>

            <div className="search-navigator">
                <button>&lt;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>&gt;</button>
            </div>

        </main>
    );
}