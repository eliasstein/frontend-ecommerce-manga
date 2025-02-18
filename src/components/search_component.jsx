import "../static/css/search_page.css";
import { MangaComponent } from "./manga_element";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const SearchBody = () => {
    const [book, setBook] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");


    useEffect(() => {        
        fetch(API_URL + (`/api/v1/books/getByName?name=${name}
${searchParams.get("type") != null ? "&type="+searchParams.get("type") : ""}
${searchParams.get("stock") != null ? "&stock=true" : ""}
${searchParams.get("adult") != null ? "&adult=true" : ""}
`))
            .then(res => res.json())
            .then(book => {
                if (book.length < 1)
                    setErrorMessage("No hay libros disponibles")
                setBook(book)
            })
            .catch(error => console.error("Error al obtener datos: ", error));


    }, [searchParams]);

    function addParam(key, value, param) {
        param.set(key, value);
        setSearchParams(param);
    }
    
    function removeParam(key, param) {
        param.delete(key);
        setSearchParams(param);
    }

    const filterCheck = (event) => {
        const {dataset, value, checked} = event.target;
        const newParam = new URLSearchParams(searchParams)
        checked ? addParam(dataset.filter, value, newParam) : removeParam(dataset.filter,newParam);
    }

    return (
        <main>
            <div className="filters">
                <h1>Filtros:</h1>
                <div>
                    <input type="radio" name="type" onChange={filterCheck} id="mangas" data-filter="type" value="manga"/>
                    <label htmlFor="mangas">Mangas</label>
                    <input type="radio" name="type" onChange={filterCheck} id="comics" data-filter="type" value="comic"/>
                    <label htmlFor="comics">Comics</label>
                    <input type="radio" name="type" onChange={filterCheck} id="todo" data-filter="type" value=""/>
                    <label htmlFor="todo">Todo</label>
                </div>

                <input type="checkbox" onChange={filterCheck} id="stock" data-filter="stock" value="true"/>
                <label htmlFor="stock">En stock</label>
                <input type="checkbox" onChange={filterCheck} id="+18" data-filter="adult" value="true"/>
                <label htmlFor="+18">Mas de 18 años</label>
            </div>

            <div className="search-manga-container">

                {!book || book.length < 1 ? (
                    <h1>{errorMessage}</h1>
                ) : (
                    book.map(object => (
                        <MangaComponent
                            key={object.id}
                            id={object.id}
                            title={object.name}
                            price={"$" + object.price}
                            url={object.image}
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