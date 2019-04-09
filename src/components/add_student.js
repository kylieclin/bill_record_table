import React from 'react';

class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            amount: '',
            type: ''
        }
        

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(event){
        const { name, value} =event.target
        this.setState({
             [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.callBack({...this.state});
        
        this.setState({
            name: '',
            amount: ''
        })
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
        const {name , amount} = this.state;

        return(
            <div className={`col ${col}`}>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="center">Add Paid Bill</div>

                    <div className="input-field">
                        <input name="name" autoComplete="off" id="name" type="text" value={name} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="name">Pay To</label>   
                    </div>
                    <div className="input-field">
                        <input name="amount" autoComplete="off" id="amount" type="text" value={amount} onChange={this.handleInput} maxLength="10" required/>
                        <label htmlFor="amount">Amount</label>   
                    </div>
                    <div className="input-field">
                        <select defaultValue="" onChange={this.handleSelect} ref={(element)=>{this.formSelect = element}}>
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