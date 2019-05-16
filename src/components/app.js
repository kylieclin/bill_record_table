import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import axios from 'axios';
import BillsTable from './bills_table';
import AddBill from './add_bill';
import UpdateBill from './update';

class App extends Component{
    constructor(props){
        super(props)

        this.state ={
            billsList: [],
            error: '',
            modal: false,
            updateData: {}
        }
        this.addBill = this.addBill.bind(this);
        this.deleteBill = this.deleteBill.bind(this);
        this.checkbox = this.checkbox.bind(this);
        this.updateBill = this.updateBill.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
            this.toggleModal();
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
            await axios.post(`/api/bills/checkbox`, data);
            this.getBillsData();
        } catch(error){
            this.errorHandle();
        }
    }
    async updateBill(data){
        try{
            await axios.post('/api/bills/update', data);
            this.getBillsData();
            this.toggleModal();
        } catch (err){
            this.errorHandle();
        }
    }
    errorHandle(){
        this.setState({
            error: "Error: Unable to retrieving bill data"
        });
    }
    toggleModal(data){
        this.setState({
            modal: !this.state.modal,
            updateData: data || null
        })
    }
    render(){
        const {error, billsList, modal, updateData} = this.state;
        return(
            <div>
                <div className="header-box">
                    <h2 className='center page-header  blue-grey-text text-darken-4'>Bill Record Table <i className="fas fa-comment-dollar"></i></h2>
                    <h4 className='center page-header  blue-grey-text text-darken-4'>Bill Record Table <i className="fas fa-comment-dollar"></i></h4>
                </div>
                <h5 className='red-text text-darken-2 center'>{error}</h5>
                <div className="row">
                    <BillsTable list={billsList} toggleModal={this.toggleModal} checkbox={this.checkbox} col="col s12 l9"/>  
                    <AddBill col="col s12 l3 " callBack={this.addBill}/>
                </div>
                {modal? <UpdateBill display={modal} updateData={updateData} toggleModal={this.toggleModal} deleteBill={this.deleteBill} updateBill={this.updateBill}/>:null}
            </div>
        )
    }
}   

export default App;
