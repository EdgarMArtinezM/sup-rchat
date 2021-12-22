//import knex from "knex";
const knex=require('knex')
const database=knex({
    client:'mysql',
    version:'7.4.21',
    connection:{
        host:'localhost',
        port:8889,
        user:'root',
        password:'root',
        database:'nueva'
    },
    pool:{min:0,max:10}
})
module.exports=database;
