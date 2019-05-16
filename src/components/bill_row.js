import React from 'react';
import {formatDate} from './helper';

const billRows = props =>{
        const {payfrom, payto, type, amount, paid, id, added, toggleModal, note } = props;
        const status = paid? <input id="checkbox" onChange={props.checkbox.bind(this, id)} type="checkbox" defaultChecked/> : <input id="checkbox"  onChange={props.checkbox.bind(this, id)} type="checkbox" /> ;
    
        return(
            <tr>
                <td>{formatDate(added)}</td>
                <td>{payfrom}</td>
                <td>{payto}</td>
                <td>{type}</td>
                <td>$ {(amount/100).toFixed(2)}</td>
                <td>{note}</td>                
                <td className="center">{status}</td>
                <td>
                    <button onClick={()=>{toggleModal(props)}} className="waves-effect waves-light btn-small teal lighten-4">
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                </td>
            </tr>
        )

}
//onclick modal fill in all the data , modal has btn for delete or update
export default billRows;