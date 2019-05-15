import React, {Component} from 'react';
import BillRow from './bill_row';

class BillsTable extends Component {

    render(){
        console.log(this.props)
        const { col = 's12', list, checkbox, toggleModal } = this.props;
        const bills = list.map((bill)=>{ // on next line {...student} = props
            return <BillRow {...bill} key={bill.id} checkbox={checkbox} toggleModal={toggleModal}/>
        })

        return (
            <div className={`bill-table ${col}`}>
                <table>
                    <thead>
                        <tr className="teal lighten-4 blue-grey-text text-darken-3">
                            <th>Date</th>
                            <th>Pay From</th>
                            <th>Pay To</th>
                            <th>Type</th>
                            <th>Amount</th>                            
                            <th>Note</th>
                            <th>Complete</th>
                            <th>Delete & Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BillsTable;