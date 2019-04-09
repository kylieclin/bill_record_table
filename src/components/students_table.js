import React, {Component} from 'react';
import BillRow from './student_row';

class BillsTable extends Component {

    render(){
        const { col = 's12', list, deleteBill } = this.props;
        const bills = list.map((bill)=>{ // on next line {...student} = props
            return <BillRow {...bill} key={bill.id} deleteBill={deleteBill} />
        })

        return (
            <div className={`col ${col}`}>
                <table>
                    <thead>
                        <tr>
                            <th>Pay To</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Actions</th>
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