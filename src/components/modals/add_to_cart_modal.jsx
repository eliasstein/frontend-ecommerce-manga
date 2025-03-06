import React from "react"; 
import ReactDOM from "react-dom";
import {motion} from "framer-motion";
import "../../static/css/add_to_cart_modal.css";

const Modal = ({isOpen,closeModal})=>{
    if (!isOpen) return null;
    return ReactDOM.createPortal( 
    <motion.div
    initial={{opacity:0,y:40}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="cart-modal-bg">
        <div className="cart-modal-window">
            <div className="modal-header">
                <h1 style={{margin:"0"}}>Carrito</h1>
            </div>
            <div className="modal-body">
                <p>Manga añadido al carrito</p>
            </div>
            <button onClick={closeModal}>Aceptar</button>
        </div>
    </motion.div>,document.getElementById("modal-root")
    );
}

export default Modal;
