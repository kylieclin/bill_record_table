import React from 'react';

class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            amount: '',
            type: 'default',
            error: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleInput(event){
        const { name, value} =event.target
        this.setState({
             [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const {name, amount, type} =this.state;
        if(name && amount && type !== 'default' ){
            this.props.callBack({...this.state});
            this.resetInputs();
        } else {
            this.setState({
                error: 'Please complete the inputs.'
            })
        }
        
    }
    resetInputs(){
        this.setState({
            name: '',
            amount: '',
            type: 'default'
        }, () => M.FormSelect.init(this.formSelect));
    }
    handleSelect(event){

        this.setState({
            type: event.target.value
        })
    }
    componentDidMount(){
        M.FormSelect.init(this.formSelect);
    }
    render(){
        const {col = 's12'} = this.props;
        const {name , amount, error, type} = this.state;

        return(
            <div className={`col ${col}`}>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="center">Add Paid Bill</div>
                    <h6 className="text-red">{error}</h6>
                    <div className="input-field">
                        <input name="name" autoComplete="off" id="name" type="text" value={name} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="name">Pay To</label>   
                    </div>
                    <div className="input-field">
                        <input name="amount" autoComplete="off" id="amount" type="text" value={amount} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="amount">Amount</label>   
                    </div>
                    <div className="input-field">
                        <select value={type} name="type" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}} required>
                            <option value="default" disabled>Select Type</option>
                            <option value="credit">Credit Card</option>
                            <option value="cash">Cash</option>
                            <option value="Check">Check</option>
                        </select>
                        <label htmlFor="">Select Payment Type</label>
                    </div>
                    <button className="btn green">Add Record</button>
                </form>
                <div>
                    <button className="btn green darken-3">Calcs</button>
                </div>
            </div>
        )
    }
}

export default AddStudent;
