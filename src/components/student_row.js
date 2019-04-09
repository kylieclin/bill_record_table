import React from 'react';

export default props =>{
        const {name, type, grade, id, deleteStudent} = props
        return(
            <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>{grade}</td>
                <td>
                    <button onClick={()=>{deleteStudent(id)}} className="waves-effect waves-light btn btn-floating red darken-2">
                        <i className="material-icons">delete_forever</i>
                    </button>
                </td>
            </tr>
        )

}

//onClick={()=>{deleteStudent(id)}} if we have to pass in parameters we have to use a function to warp it