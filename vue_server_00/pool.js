const mysql=require('mysql');
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'luotuo',
    connectionLimit:20
})
//导出连接池对象pool
 module.exports=pool;