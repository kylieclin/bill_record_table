const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const mysqlCreds = require('./mysqlcreds.js');
const database = mysql.createConnection(mysqlCreds);
const server = express();

server.use(cors());
server.use(express.json());

server.get('/api/bills', (req,res)=>{
    database.connect(()=>{
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
})

server.post('/api/bills',(req, res)=>{
    database.connect(()=>{
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
})

server.post('/api/bills/checkbox', (req,res)=>{
    database.connect(()=>{
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
})

server.post('/api/bills/update', (req,res)=>{
    database.connect(()=>{
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
})

server.delete('/api/bills/:id',(req,res)=>{
    database.connect(()=>{

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
})

server.listen(3001, ()=>{
    console.log('server is running on port 3001');
});