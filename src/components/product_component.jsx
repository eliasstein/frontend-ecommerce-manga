import "../static/css/product.css"

export const ProductBody= () =>{

    return(
        <main>
            <div className="product-container">   {/*Float para separa imagen de portada*/}
                <div className="product-image-container"> {/*Imagen de portada*/}
                    <img src="manga/akunohana-1.jpg"/>
                </div>
                <div className="information-container">   {/*Contenedor de texto*/}
                    <h1>Titulo</h1>
                    <div>
                        <button>-</button>
                        <input style={{"width":"20px"}}/>
                        <button>+</button>
                        <button>añadir al carrito</button>
                    </div>
                </div>
            </div>

        </main>
    );
    
    }