import "../static/css/search_page.css";
import { MangaComponent } from "./manga_element";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL

export const SearchBody = () => {
    const [book, setBook] = useState(null);
    const [errorMessage, setErrorMessage]=useState(null);
    const [searchParams,setSearchParams] = useSearchParams();
    const name = searchParams.get("name");


    // useEffect(() => {     //use effect hace la peticion cuando se monta el componente
    //     if (name && name.trim() === "") return; // Evitar llamadas vacías
    //     fetch(API_URL + "/api/v1/books/getByName?name=" + name)
    //         .then(res => res.json())
    //         .then(book => { 
    //             if(book.length<1)
    //                 setErrorMessage("No hay libros disponibles")
    //             setBook(book)})
    //         .catch(error => console.error("Error al obtener datos: ", error));
    // }, [name]);

    useEffect(() => {

        fetch(API_URL + (`/api/v1/books/getByName?name=${name}
${searchParams.get("mangas")!=null ? "&mangas=true":""}
${searchParams.get("comics")!=null ? "&comics=true":""}
${searchParams.get("stock")!=null ? "&stock=true":""}
${searchParams.get("adult")!=null ? "&adult=true":""}
`))
            .then(res => res.json())
            .then(book => { 
                if(book.length<1)
                    setErrorMessage("No hay libros disponibles")
                setBook(book)})
            .catch(error => console.error("Error al obtener datos: ", error));
    
    
    }, [searchParams]);

    function addParam(key,value){
        const newParam=new URLSearchParams(searchParams)
        newParam.set(key, value);
        setSearchParams(newParam);

    }
    function removeParam(key){
        const newParam=new URLSearchParams(searchParams)
        newParam.delete(key);
        setSearchParams(newParam);    
    }

    const filterCheck=(event)=>{
        if (event.target.checked && event.target.id==="mangas")
            addParam("mangas","true")
        else if(event.target.checked===false && event.target.id==="mangas")
            removeParam("mangas")
        if (event.target.checked && event.target.id==="comics")
            addParam("comics","true")
        else if(event.target.checked===false && event.target.id==="comics")
            removeParam("comics")
        if (event.target.checked && event.target.id==="stock")
            addParam("stock","true")
        else if(event.target.checked===false && event.target.id==="stock")
            removeParam("stock")
        if (event.target.checked && event.target.id==="+18")
            addParam("+18","true")
        else if(event.target.checked===false && event.target.id==="+18")
            removeParam("+18")
     
  
    
        
    }

    return (
        <main>
            <div className="filters">
                <h1>Filtros:</h1>
                <input type="checkbox" onChange={filterCheck} id="mangas" />
                <label htmlFor="mangas">Mangas</label>
                <input type="checkbox" onChange={filterCheck} id="comics" />
                <label htmlFor="comics">Comics</label>
                <input type="checkbox" onChange={filterCheck} id="stock" />
                <label htmlFor="stock">En stock</label>
                <input type="checkbox" onChange={filterCheck} id="+18" />
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