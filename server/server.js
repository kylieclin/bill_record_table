const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const mysqlCreds = require('./mysqlcreds.js');
mysqlCreds.multipleStatements = true;
const database = mysql.createPool(mysqlCreds);
const server = express();
const cron = require('node-cron');

server.use(cors());
server.use(express.json());

database.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})

server.get('/api/bills', (req,res)=>{

        const query = "SELECT * FROM `bills`";
        database.query(query, (error, data)=>{
            const output ={
                success: false
            }

            if(!error){
                output.success = true;
                output.data = data;
            } else {
                output.error = error
            }
            res.send(output);
        })

})

server.post('/api/bills/add',(req, res)=>{

        const {payfrom, payto, type, amount, note } = req.body;
        if(payfrom === undefined || payto === undefined || type === undefined || amount === undefined || note === undefined){
            res.send({
                success: false,
                message: 'Input fields can not be blank.'
            })
            return;
        }
        
        const query = 'INSERT INTO `bills` SET `payfrom`= ?, `payto`=?, `type`=?, `amount`=?, `added`=NOW(), `paid`=0, `note`=?';

        database.query(query, [payfrom, payto, type, amount*100, note],(error,result)=>{
            if(!error){
                res.send({
                    success: true,
                    id: result.insertId
                })
                
            } else {
                res.send({
                    success: false,
                    error
                })
            }
        })
})

server.post('/api/bills/checkbox', (req,res)=>{

        if(req.body.id === undefined){
            res.send({
                success: false,
                message: 'Unable to make change'
            })
            return;
        }
        const {id, paid} = req.body
        const query ='UPDATE `bills` SET `paid` =? WHERE `bills`.`id` =?';

        database.query(query,[paid, id],(error)=>{
            if(!error){
                res.send({
                    success: true
                })
            } else {
                res.send({
                    success: false,
                    error
                })
            }
        })
})

server.post('/api/bills/update', (req,res)=>{

        const {payfrom, payto, type, amount, note, id } = req.body;
        if(payfrom === undefined || payto === undefined || type === undefined || amount === undefined || note === undefined){
            res.send({
                success: false,
                message: 'Input fields can not be blank.'
            })
            return;
        }

        const query ='UPDATE `bills` SET `payfrom`= ?, `payto`=?, `type`=?, `amount`=?, `note`=? WHERE `bills`.`id` =?';

        database.query(query,[payfrom, payto, type, amount*100, note, id],(error)=>{
            if(!error){
                res.send({
                    success: true
                })
            } else {
                res.send({
                    success: false,
                    error
                })
            }
        })

})

server.delete('/api/bills/:id',(req,res)=>{

        if(req.params.id === undefined){
            res.send({
                success: false,
                message: 'must have an id to delete item'
            })
            return;
        }

        const query = 'DELETE FROM `bills` WHERE `id`='+req.params.id;
        database.query(query,(error)=>{
            if(!error){
                res.send({
                    success: true
                })
            } else {
                res.send({
                    success: false,
                    error
                })
            }
        })
})

const cronNewTable = cron.schedule('10 * * * *', ()=> {
    const cronquery = "CREATE TABLE `bills_new` LIKE `bills`; RENAME TABLE `bills` TO `bills_old`, `bills_new` TO `bills`; INSERT INTO `bills` (`id`, `payfrom`, `payto`, `amount`, `added`, `type`, `paid`, `note`) VALUES (19, 'Chase', 'Amy', 1550, '2019-04-14 16:43:17', 'Credit Card', 1, 'Dinner'), (20, 'BofA', 'Kevin', 5520, '2019-05-13 21:24:43', 'Cash', 1, 'Basketball game'), (21, 'chase', 'sephora', 515, '2019-05-15 17:39:26', 'Credit Card', 1, 'lip stick'), (23, 'Chase', 'Trader Goes', 6835, '2019-05-16 12:02:54', 'Credit Card', 0, 'Food'), (25, 'Wells Fargo', 'REI', 8925, '2019-05-18 04:32:20', 'Cash', 1, 'Sports wear'), (28, 'BofA', 'Car wash', 1000, '2019-05-23 00:49:49', 'Credit Card', 0, 'Irvine blvd'), (29, 'Chase', 'Bill', 1800, '2019-05-23 00:51:16', 'Cash', 1, 'drinks'), (30, 'BofA', 'Phone bill', 3050, '2019-05-26 02:32:02', 'Credit Card', 0, 'April phone');";

    database.query(cronquery, (error)=>{
        console.error(error);
    })
});

cronNewTable.start();

const cronDropTable = cron.schedule('12 * * * *', ()=> {
    const cronDrop = "DROP TABLE `bills_old`";
    database.query(cronDrop, (error)=>{
        console.error(error);
    })
});

cronDropTable.start();


server.listen(3001, ()=>{
    console.log('server is running on port 3001');
});