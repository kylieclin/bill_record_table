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
                message: 'must add items into todolist'
            })
            return;
        }
        
        const query = 'INSERT INTO `bills` SET `payfrom`="'+payfrom+'", `payto`="'+payto+'", `type`="'+type+'", `amount`='+amount+', `added`=NOW(), `paid`=0, `note`="'+note+'"';
        database.query(query,(error,result)=>{
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

server.post('/api/bills/update', (req,res)=>{
    database.connect(()=>{
        if(req.body.id === undefined){
            res.send({
                success: false,
                message: 'must have an id to delete item'
            })
            return;
        }
        const {id, paid} = req.body
        const query ='UPDATE `bills` SET `paid` ='+paid+' WHERE `bills`.`id` ='+id+'';

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