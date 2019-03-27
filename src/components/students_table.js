import React, {Component} from 'react';
import studentsList from '../dummy_data/student_list';

class StudentsTable extends Component {
    constructor(props){
        super(props)

        this.state ={
            studentsList: []
        }
    }
    componentDidMount(){
        this.getStudentData();
    }
    getStudentData(){
        //Call server

        this.setState({
            studentsList: studentsList
        })
    }
    render(){
        const { studentList } = this.state;

        const studentElements = studentsList.map((element, index, originArr)=>{
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
            <div className="col s12 m8">
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