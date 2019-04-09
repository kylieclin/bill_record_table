import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss'; //no matter where import style sheet it apply to the entire project
import React, {Component} from 'react';
import axios from 'axios';
import StudentsTable from './students_table';
import AddStudent from './add_student';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            studentsList: [],
            error: ''
        }
        this.addStudent = this.addStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    async addStudent(student){
    
        try{
            await axios.post('/api/grades', student);
            this.getStudentData();
        } catch (err){
            this.errorHandle();
        }
        
    }
    componentDidMount(){
        this.getStudentData();
    }
    async getStudentData(){
        try{
            const resp = await axios.get('/api/grades'); // origin go to dev_sever and then direct to proxy in package.json

            if(resp.data.success){
                this.setState({
                    studentsList: resp.data.data
                });
            } 
        } catch (err){
            this.errorHandle();
        }
    }
    async deleteStudent(id){
        try{
            await axios.delete(`/api/grades/${id}`);
            this.getStudentData();
        }catch (err){
            this.errorHandle();
        }
    }
    errorHandle(){
        this.setState({
            error: "Error: Unable to retrieving student data"
        });
    }
    render(){
        return(
            <div>
                <h1 className='center'>Bill Pay Record</h1>
                <h5 className='red-text text-darken-2 center'>{this.state.error}</h5>
                <div className="row">
                    <StudentsTable list={this.state.studentsList} deleteStudent={this.deleteStudent}col="col s12 m8"/>
                    <AddStudent col="col s12 m4" callBack={this.addStudent}/>

                </div>

            </div>
        )
    }
}   

export default App;


//Call server
// axios.get('http://localhost:3001/api/grades').then((resp)=>{
//     
//     if(resp.data.success){
//         this.setState({
//             studentsList: resp.data.data
//         });
//     }
// }).catch((err)=>{ //catch server error
//     this.setState({
//         error: "Error: Unable to retrieving student data"
//     });
// });