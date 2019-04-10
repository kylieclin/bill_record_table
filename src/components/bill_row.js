import React from 'react';

export default props =>{
        const {payfrom, payto, type, amount, paid, id, added, deleteBill, note } = props;
        const date = added.substring(5, 10);
        const status = paid? <input id="checkbox" onChange={props.checkbox.bind(this, id)} type="checkbox" defaultChecked/> : <input id="checkbox"  onChange={props.checkbox.bind(this, id)} type="checkbox" /> ;
    
        return(
            <tr>
                <td>{payfrom}</td>
                <td>{payto}</td>
                <td>{type}</td>
                <td>{amount/100}</td>
                <td>{note}</td>                
                <td className="center">{date}</td>
                <td className="center">{status}</td>
                <td>
                    <button onClick={()=>{deleteBill(id)}} className="waves-effect waves-light btn-small btn-floating blue-grey lighten-1">
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        )

}

//onClick={()=>{deleteStudent(id)}} if we have to pass in parameters we have to use a function to warp it