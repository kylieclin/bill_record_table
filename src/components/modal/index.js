import React, {Fragment} from 'react';
import './modal.scss';

const Modal = props => {
    const {modal, close, children} = props;
  
    if(modal){
        return(
            <Fragment>
                <div className="popup-modal" onClick={close}></div>
                <div className="row">
                    <div className="popup-modalbody col s11 m6 l4 offset-m3 offset-l4">
                        {children}
                    </div>
                </div>
            </Fragment>
        ) 
    } else {
        return null;
    }
}

export default Modal;
