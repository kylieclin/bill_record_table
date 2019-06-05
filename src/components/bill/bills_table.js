import React from 'react';
import BillRow from './bill_row';

const BillsTable = props => {

    const { col = 's12', list, checkbox, toggleModal } = props;
    const bills = list.map((bill)=>{ 
        return <BillRow {...bill} key={bill.id} checkbox={checkbox} toggleModal={toggleModal}/>
    });

    return (
        <div className={`bill-table ${col}`}>
            <table>
                <thead>
                    <tr className="teal lighten-4 blue-grey-text text-darken-3">
                        <th>DATE</th>
                        <th>PAY FROM</th>
                        <th>PAY TO</th>
                        <th>TYPE</th>
                        <th>AMOUNT</th>                            
                        <th>NOTE</th>
                        <th>PAID</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                    {bills}
                </tbody>
            </table>
        </div>
    )

}

export default BillsTable;