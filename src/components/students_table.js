import React, {Component} from 'react';
import StudentRow from './student_row';

class StudentsTable extends Component {

    render(){
        const { col = 's12', list, deleteStudent } = this.props;
        const studentElements = list.map((student)=>{ // on next line {...student} = props
            return <StudentRow {...student} key={student.id} deleteStudent={deleteStudent} />
        })

        return (
            <div className={`col ${col}`}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Actions</th>
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