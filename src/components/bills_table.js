import React, {Component} from 'react';
import BillRow from './bill_row';

class BillsTable extends Component {

    render(){
        const { col = 's12', list, deleteBill, checkbox } = this.props;
        const bills = list.map((bill)=>{ // on next line {...student} = props
            return <BillRow {...bill} key={bill.id} deleteBill={deleteBill} checkbox={checkbox}/>
        })

        return (
            <div className={`bill-table ${col}`}>
                <table>
                    <thead>
                        <tr className="blue-grey lighten-5 blue-grey-text text-darken-3">
                            <th>Pay From</th>
                            <th>Pay To</th>
                            <th>Type</th>
                            <th>Amount</th>                            
                            <th>Note</th>
                            <th>Date Added</th>
                            <th>Complete</th>
                            <th>Delete</th>
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