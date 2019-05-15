import React, {Component} from 'react';
import Calculator from './calculator';
import './modal.scss';

class Modal extends Component{

    render(){
        const {modalOpen, close, getAmount} = this.props
        if(modalOpen){
            return(
            <div className="calc-modal">
                <div className="modalbody">
                    <i className="fas fa-times right close-modal" onClick={close} title="Close calculator"></i>
                    <Calculator ref="cal"/>
                    <div className="modal-notes col s12 m4">
                        <button className="btn import-answer" onClick={()=> getAmount(this.refs.cal.state.answer)} title="Export answer to amount">
                            <i className="fas fa-file-import"></i> Export
                        </button>   
                    </div>  
                </div>  
            </div>
            ) 
        } else {
            return null;
        }
    }

}

export default Modal;
