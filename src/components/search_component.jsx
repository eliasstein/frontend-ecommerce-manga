import "../static/css/search_page.css";
import { MangaComponent } from "./manga_element";

export const SearchBody= () =>{
    return(
    <main>
        <div className="filters">
            <h1>Filtros:</h1>
            <input type="checkbox" id="manga"/>
            <label htmlFor="manga">Mangas</label>
            <input type="checkbox" id="comics"/>
            <label htmlFor="comics">Comics</label>
            <input type="checkbox" id="stock"/>
            <label htmlFor="stock">En stock</label>
            <input type="checkbox" id="+18"/>
            <label htmlFor="+18">Mas de 18 años</label>
        </div>

        <div className="search-manga-container">
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
        <MangaComponent title="Shonen no abyss" price="$7.900" url="./manga/boyabyss-1.webp"></MangaComponent>
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