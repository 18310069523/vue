var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database: 'wages',
  port: 3306
});

connection.connect( (e)=>{
    console.log(e)
    console.log('数据库连接成功')
} );


connection.on( 'error', ()=>{
    console.log('数据库连接失败')
} );

module.exports = connection;