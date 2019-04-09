import React from 'react';

export default props =>{
        const {name, type, amount, id, deleteBill } = props;
        const date = 'today';
        return(
            <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>
                    <button onClick={()=>{deleteBill(id)}} className="waves-effect waves-light btn btn-floating red darken-2">
                        <i className="material-icons">delete_forever</i>
                    </button>
                </td>
            </tr>
        )

}

//onClick={()=>{deleteStudent(id)}} if we have to pass in parameters we have to use a function to warp it