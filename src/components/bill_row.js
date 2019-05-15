import React from 'react';
import {formatDate} from './helper';

const billRows = props =>{
        const {payfrom, payto, type, amount, paid, id, added, deleteBill, note } = props;
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
                    <button onClick={()=>{deleteBill(id)}} className="waves-effect waves-light btn-small btn-floating blue-grey lighten-1">
                        <i className="fas fa-edit"></i>
                    </button>
                </td>
            </tr>
        )

}

export default billRows;