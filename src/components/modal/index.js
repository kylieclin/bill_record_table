import React from 'react';
import './modal.scss';

const Modal = props => {
    const {modal, close, children} = props;
  
    if(modal){
        return(
        <div className="popup-modal row">
            <div className="popup-close right">
                <i className="fas fa-times close-modal" onClick={close} title="Close"></i>
            </div>
            <div className="popup-modalbody col s10 m6 l4 offset-s1 offset-m3 offset-l4">
                {children}
            </div>  
        </div>
        ) 
    } else {
        return null;
    }
}

export default Modal;
