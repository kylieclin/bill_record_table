import React from 'react';

export default props =>{
        const {payfrom, payto, type, amount, paid, id, deleteBill, note } = props;
        console.log(id);
        const date = 'today';
        const status = paid? <input id="checkbox" onChange={props.checkbox.bind(this, id)} type="checkbox" defaultChecked/> : <input id="checkbox"  onChange={props.checkbox.bind(this, id)} type="checkbox" /> ;

        return(
            <tr>
                <td>{payfrom}</td>
                <td>{payto}</td>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>{status}</td>
                <td>{note}</td>
                <td>
                    <button onClick={()=>{deleteBill(id)}} className="waves-effect waves-light btn-small btn-floating red darken-2">
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        )

}

//onClick={()=>{deleteStudent(id)}} if we have to pass in parameters we have to use a function to warp it