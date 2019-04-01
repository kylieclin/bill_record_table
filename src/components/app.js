import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss'; //no matter where import style sheet it apply to the entire project
import StudentsTable from './students_table';
import AddStudent from './add_student';
import studentsList from '../dummy_data/student_list';

let id = 100;

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            studentsList: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    addStudent(student){
        student.id = id++;
        
        this.setState({
            studentsList:[...this.state.studentsList, student]
        })
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
    deleteStudent(id){
        const studentCopy = this.state.studentsList.slice();
        const index = studentCopy.findIndex((student)=>{
            return student.id === id;
        })
        if(index > -1){
            studentCopy.splice(index, 1); 
            this.setState({
            studentsList: [...studentCopy]
            })
        }

    }
    render(){
        return(
            <div>
                <h1 className='center'>React SGT</h1>
                <div className="row">

                    <StudentsTable list={this.state.studentsList} deleteStudent={this.deleteStudent}col="col s12 m8"/>
                    <AddStudent col="col s12 m4" callBack={this.addStudent}/>

                </div>

            </div>
        )
    }
}   

export default App;
