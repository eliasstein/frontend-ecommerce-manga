import React from "react"; 

const Modal = ({isOpen,closeModal})=>{
    if (!isOpen) return null
    return( 
    <div>
        <div>
            <h1 onClick={closeModal}>test</h1>
        </div>
    </div>
    );
}

export default Modal;
