import React from "react"; 

const Modal = ({isOpen,closeModal})=>{
    if (!isOpen) return null
    return( 
    <div style={{
        width:"50%",
        display:"flex",
        justifyContent:"center",
        margin:"auto",
        border:"1px solid black",
        position:"sticky",
        bottom:"50%",
        backgroundColor:"lightblue",
        zIndex:"4",
        overflow:"hidden",
        opacity:"1"}}>
        <div style={{display:"flex", 
        justifyContent:"center", 
        flexDirection:"column", 
        alignItems:"center"}}>
            <div className="modal-header">
                <h1 style={{margin:"0"}}>Carrito</h1>
            </div>
            <div className="modal-body">
                <p>Manga añadido al carrito</p>
            </div>
            <button onClick={closeModal}>Aceptar</button>
        </div>
    </div>
    );
}

export default Modal;
