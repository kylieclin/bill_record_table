import React, {Component} from 'react';
import Modal from '../modal';

class UpdateBill extends Component{
    constructor(props){
        super(props);

        this.state = {
            payfrom: '',
            payto: '',
            amount: '',
            type: '',
            note:'',
            id: null,
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
        const {payfrom, payto, amount, type, note, id}= this.props.updateData;

        this.setState({
            payfrom,
            payto,
            amount: amount/100,
            type,
            note,
            id
        })
        M.FormSelect.init(this.formSelect);
    }

    render(){
        const {toggleModal, deleteBill} = this.props;
        const {payfrom, payto, amount, type, note, error, id } = this.state;

        return(
            <Modal modal={true}  close={toggleModal}>
                <div className="update-form card s12 m8">
                    <form onSubmit={this.handleSubmit} action="">
                        <div className="center updatebill-header">
                            <h5 className="add-header blue-grey-text text-darken-3">Update <i className="fas fa-pen-alt"></i></h5>
                        </div>
                        <div className="input-field">
                            <input name="payfrom" autoComplete="off" id="payfrom" type="text" value={payfrom} onChange={this.handleInput} maxLength="20" required/>
                            <label className="active" htmlFor="up-payfrom">Pay From</label>   
                        </div>
                        <div className="input-field">
                            <input name="payto" autoComplete="off" id="payto" type="text" value={payto} onChange={this.handleInput} maxLength="20" required/>
                            <label className="active" htmlFor="up-payto">Pay To</label>   
                        </div>
                        <div className="input-field"> 
                            <input name="amount" autoComplete="off" id="amount" type="text" value={amount} onChange={this.handleInput} maxLength="20" required/>   
                            <label className="active" htmlFor="up-amount">Amount</label>
                        </div>
                        <div className="input-field">
                            <label className="active" htmlFor="">Select Payment Type</label>
                            <select value={type} name="type" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}} required>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Cash">Cash</option>
                                <option value="Check">Check</option>
                                <option value="Wire">Wire Wire Transfer</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <input name="note" autoComplete="off" id="note" type="text" value={note} onChange={this.handleInput} maxLength="30" title="Add some notes"/>
                            <label className="active" htmlFor="up-note">Note</label>   
                        </div>
                        <h6 className="red-text">{error}</h6>
                        <div className="btn red lighten-2" onClick={()=>deleteBill(id)} title="Delete"><i className="fas fa-trash-alt"></i></div>
                        <button className="btn teal lighten-1 right" title="Update" onClick={this.handleSubmit}>Update <i className="fas fa-check"></i></button>
                    </form>
                </div>  
            </Modal>
        )
    }
}

export default UpdateBill;
