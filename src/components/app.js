import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss'; //no matter where import style sheet it apply to the entire project
import React, {Component} from 'react';
import axios from 'axios';
import BillsTable from './students_table';
import AddBill from './add_student';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            billsList: [],
            error: ''
        }
        this.addBill = this.addBill.bind(this);
        this.deleteBill = this.deleteBill.bind(this);
        this.checkbox = this.checkbox.bind(this);
    }
    async addBill(data){
        try{
            await axios.post('/api/bills', data);
            this.getBillsData();
        } catch (err){
            this.errorHandle();
        }
        
    }
    componentDidMount(){
        this.getBillsData();
    }
    async getBillsData(){
        try{
            const resp = await axios.get('/api/bills');
            console.log(resp)
            if(resp.data.success){
                this.setState({
                    billsList: resp.data.data
                });
            } 
        } catch (err){
            this.errorHandle();
        }
    }
    async deleteBill(id){
        try{
            await axios.delete(`/api/bills/${id}`);
            this.getBillsData();
        }catch (err){
            this.errorHandle();
        }
    }
    async checkbox(id, event){
        const data ={
            id: id,
            paid: event.target.checked? 1:0
        }
        try{
            await axios.post(`/api/bills/update`, data);
            this.getBillsData();
        } catch(error){
            this.errorHandle();
        }
    }
    errorHandle(){
        this.setState({
            error: "Error: Unable to retrieving bill data"
        });
    }
    render(){
        return(
            <div>
                <h1 className='center'>Bill Pay Record</h1>
                <h5 className='red-text text-darken-2 center'>{this.state.error}</h5>
                <div className="row">
                    <BillsTable list={this.state.billsList} deleteBill={this.deleteBill} checkbox={this.checkbox}col="col s12 m8"/>
                    <AddBill col="col s12 m4" callBack={this.addBill}/>
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
//             billsList: resp.data.data
//         });
//     }
// }).catch((err)=>{ //catch server error
//     this.setState({
//         error: "Error: Unable to retrieving student data"
//     });
// });