import React, {Component} from 'react';


class StudentsTable extends Component {
    render(){
        const { col = 's12', list } = this.props;
        const studentElements = list.map((element, index, originArr)=>{
            return(
                <tr key={element.id}>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.grade}</td>
                        <td><button className="waves-effect waves-light btn">Delete</button></td>
                </tr>
            )
        })

        return (
            <div className={`col ${col}`}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Delete Student</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentElements}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentsTable;