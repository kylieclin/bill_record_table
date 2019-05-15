import React from 'react';

const BillForm = props =>{
    const {payfrom, payto , amount, error, type, note, message, handleSubmit, handleInput, handleSelect} =props
    return(
        <form onSubmit={handleSubmit} action="">
        <div className="center addbill-header">
            <h5 className="teal lighten-4 add-header blue-grey-text text-darken-3" title="Add Bills">Add Bill</h5>
        </div>
        <div className="input-field">
            <input name="payfrom" autoComplete="off" id="payfrom" type="text" value={payfrom} onChange={handleInput} maxLength="20" required/>
            <label htmlFor="payfrom">Pay From</label>   
        </div>
        <div className="input-field">
            <input name="payto" autoComplete="off" id="payto" type="text" value={payto} onChange={handleInput} maxLength="20" required/>
            <label htmlFor="payto">Pay To</label>   
        </div>
        <div className="input-field">
            <label htmlFor="amount">Amount</label> 
            <input name="amount" autoComplete="off" id="amount" type="text" value={amount} onChange={handleInput} maxLength="20" required/>   
        </div>
        <div className="input-field">
        
            <select value={type} name="type" onChange={handleSelect} ref={(element)=>{this.formSelect = element}} required>
                <option value="default" disabled>Select Type</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash</option>
                <option value="Check">Check</option>
                <option value="Wire">Wire</option>
            </select>
            <label htmlFor="">Select Payment Type</label>
        </div>
        <div className="input-field">
            <input name="note" autoComplete="off" id="note" type="text" value={note} onChange={handleInput} maxLength="30" title="Add some notes"/>
            <label htmlFor="note">Note</label>   
        </div>
        <h6 className="teal-text">{message}</h6>
        <h6 className="red-text">{error}</h6>
        {/* <div className="btn teal lighten-2" onClick={openCalc} title="Open calculator"><i className="fas fa-calculator"></i></div> */}
        <button className="btn teal lighten-1" title="Add record to table"><i className="fas fa-file-invoice-dollar"></i> Add</button>
    </form>
    )
}

export default BillForm;