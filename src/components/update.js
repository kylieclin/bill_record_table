import React, {Component} from 'react';
import UpdateForm from './add_bill';

class UpdateBill extends Component{
    constructor(props){
        super(props);

        this.state = {
            payfrom: '',
            payto: '',
            amount: '',
            type: '',
            note:'',
            error: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleInput(event){
        const { name, value} =event.target;

        this.setState({
             [name]:value,
        })
    }
    handleSelect(event){
        this.setState({
            type: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const {payfrom, payto, amount, type} =this.state;

        if(payfrom && payto && !isNaN(amount) && type !== 'default' ){
            this.props.updateBill({...this.state});

        } else {
            this.setState({
                error: 'Please enter correct updates',
                amount: ''
            }) 
        }
        
    }
    componentDidMount(){
        const {payfrom, payto, amount, type, note}= this.props.updateData;
        this.setState({
            payfrom,
            payto,
            amount,
            type,
            note
        })
        M.FormSelect.init(this.formSelect);
    }
    render(){

        const {toggleModal, deleteBill} = this.props;
        const {payfrom, payto, amount, type, note, error } = this.state;

            return(
                <div className="calc-modal">
                    <div className="modalbody">
                        <i className="fas fa-times right close-modal" onClick={toggleModal} title="Close"></i>
                        <div className="modal-notes col s12 m4">
                            <form onSubmit={this.handleSubmit} action="">
                                <div className="center addbill-header">
                                    <h5 className="teal lighten-4 add-header blue-grey-text text-darken-3" title="Add Bills">Update Bill</h5>
                                </div>
                                <div className="input-field">
                                    <input name="payfrom" autoComplete="off" id="payfrom" type="text" value={payfrom} onChange={this.handleInput} maxLength="20" required/>
                                    <label className="active" htmlFor="payfrom">Pay From</label>   
                                </div>
                                <div className="input-field">
                                    <input name="payto" autoComplete="off" id="payto" type="text" value={payto} onChange={this.handleInput} maxLength="20" required/>
                                    <label className="active" htmlFor="payto">Pay To</label>   
                                </div>
                                <div className="input-field"> 
                                    <input name="amount" autoComplete="off" id="amount" type="text" value={amount/100} onChange={this.handleInput} maxLength="20" required/>   
                                    <label className="active" htmlFor="amount">Amount</label>
                                </div>
                                <div className="input-field">
                                    <label className="active" htmlFor="">Select Payment Type</label>
                                    <select value={type} name="type" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}} required>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Check">Check</option>
                                        <option value="Wire">Wire</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <input name="note" autoComplete="off" id="note" type="text" value={note} onChange={this.handleInput} maxLength="30" title="Add some notes"/>
                                    <label className="active" htmlFor="note">Note</label>   
                                </div>
                                <h6 className="red-text">{error}</h6>
                                <div className="btn red lighten-2" onClick={deleteBill} title="Open calculator"><i className="fas fa-trash-alt"></i></div>
                                <button className="btn teal lighten-1 right" title="Add record to table">Update <i className="fas fa-check"></i></button>
                            </form>
                        </div> 
                    </div>  
                </div>
            )
    }
}

export default UpdateBill;
