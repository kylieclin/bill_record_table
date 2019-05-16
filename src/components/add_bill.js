import React, {Fragment} from 'react';
import Modal from './modal';
import Calculator from './calculator';

class AddBill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            payfrom: '',
            payto: '',
            amount: '',
            type: 'default',
            note:'',
            error: '',
            message: '',
            modal: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.getAmontFromCalc = this.getAmontFromCalc.bind(this);
    }
    handleInput(event){
        const { name, value} =event.target;

        this.setState({
             [name]:value,
             message: ''
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const {payfrom, payto, amount, type} =this.state;

        if(payfrom && payto && !isNaN(amount) && type !== 'default' ){
            this.props.callBack({...this.state});
            this.resetInputs();
            this.setState({
                message: 'Bill record added'
            })
        } else {
            if(type === 'default'){
                this.setState({
                error: 'Please select payment type'
                }) 
            } else {
                this.setState({
                    error: 'Please input numbers for amount',
                    amount: ''
                }) 
            }
        }
        
    }
    resetInputs(){
        this.setState({
            payfrom: '',
            payto: '',
            amount: '',
            type: 'default',
            note:'',
            error:''
        }, () => M.FormSelect.init(this.formSelect));
    }
    handleSelect(event){
        this.setState({
            type: event.target.value
        })
    }
    toggleModal(){
        this.setState({
            modal: !this.state.modal
        })
    }
    getAmontFromCalc(number){
        if(number){
            this.setState({
            modalOpen: false,
            amount: number
            }, ()=> M.updateTextFields());
        } 
    }
    componentDidMount(){
        M.FormSelect.init(this.formSelect);
        M.updateTextFields()
    }
    render(){
        const {col = 's12'} = this.props;
        const {payfrom, payto , amount, error, type, note, message, modal} = this.state;

        return(
            <Fragment>
            <div className={`add-bills ${col}`}>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="center addbill-header">
                        <h6 className="teal lighten-4 add-header blue-grey-text text-darken-3" title="Add Bills">ADD BILL</h6>
                    </div>
                    <div className="input-field">
                        <input name="payfrom" autoComplete="off" id="payfrom" type="text" value={payfrom} onChange={this.handleInput} maxLength="20" required/>
                        <label htmlFor="payfrom">Pay From</label>   
                    </div>
                    <div className="input-field">
                        <input name="payto" autoComplete="off" id="payto" type="text" value={payto} onChange={this.handleInput} maxLength="20" required/>
                        <label htmlFor="payto">Pay To</label>   
                    </div>
                    <div className="input-field">
                        <label className="active" htmlFor="amount">Amount</label> 
                        <input name="amount" autoComplete="off" id="amount" type="text" value={amount} onChange={this.handleInput} maxLength="20" required/>   
                    </div>
                    <div className="input-field">
                        <select value={type} name="type" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}} required>
                            <option value="default" disabled>Select Type</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Cash">Cash</option>
                            <option value="Check">Check</option>
                            <option value="Wire">Wire</option>
                        </select>
                        <label htmlFor="">Select Payment Type</label>
                    </div>
                    <div className="input-field">
                        <input name="note" autoComplete="off" id="note" type="text" value={note} onChange={this.handleInput} maxLength="30" title="Add some notes"/>
                        <label htmlFor="note">Note</label>   
                    </div>
                    <h6 className="teal-text">{message}</h6>
                    <h6 className="red-text">{error}</h6>
                    <div className="btn teal lighten-2" onClick={this.toggleModal} title="Open calculator"><i className="fas fa-calculator"></i></div>
                    <button className="btn teal lighten-1" title="Add record to table">Add <i className="fas fa-check"></i></button>
                </form>  
            </div>
            <Modal modal={modal}  close={this.toggleModal}>
                <Calculator ref="cal" getAmount={this.getAmontFromCalc}/>
            </Modal>
            </Fragment>
        )
    }
}

export default AddBill;
