const express = require('express');
const bodyParser = require('body-parser');
// var cors = require('cors')
const connect = require('./dbUtil/dbConnect');
const cookie = require('cookie-parser');
const resSend = require('./dbUtil/resSend');
const app = express();

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*'); //需要显示设置来源
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Credentials",true); //带cookies
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors())
app.use(cookie())

app.post('/api/login', function (req, res) {
  const {
    username,
    userpwd
  } = req.body;
  console.log(username)
  let sql = "select * from team where adminName=? and adminPwd=?";

  connect.query(sql, [
    username,
    userpwd
  ], ( error, result )=>{
      if( error ){
          console.log('失败')
      }else{
        if( result.length >= 1 ) {
          res.cookie('token', 'asdgjwquyjegq87126312uh3879213jhsaidb872qe4', { expires: new Date(Date.now() + 900000), httpOnly: true });
          res.send(result[0]);
        } else {
          res.status(401).send({
            msg: '用户名密码错误'
          });
        }
        
      }
  })
});


app.post('/api/addStaff', function (req, res) {
  const {
    name,
    team,
    teamId,
    phone,
    type,
    startDate,
    money
  } = req.body;

  let sql = 'insert into user (name, team, teamId, phone, type, startDate, money) values (?,?,?,?,?,?,?)'
  connect.query(sql, [
    name,
    team,
    teamId,
    phone,
    type,
    startDate,
    money
  ], ( error, result) => {
    if( error ) {
      console.log('失败')
    }else{
      resSend(req, res, result)
    }
  })
});

app.post('/api/removeStaff', function (req, res) {
  const id = req.body.id;
  const status = req.body.status;
  const sql = 'update user set status=? where id=?';
  connect.query(sql, [status, id], (error, result)=>{
    if( error ) {
      console.log('失败')
    }else{
      resSend(req, res, {
        msg: '成功开除此员工',
        data: result
      })
    }
  })
})

app.get('/api/getStaffList', function (req, res) {
  const {
    page = 0,
    pageSize = 10,
    keyCode = '',
    status = 0,
    teamWorkId = 0,
    filters = {}
  } = req.query;

  console.log(req.query)

  let sql = "select count(*) num from user"
  connect.query(sql, [], ( error, result) => {
    if( error ) {
      console.log('失败')
    }else{
      
      let nums = result[0].num;
      let whereStr = ''
      if ( filters != '{}' ) {
        
        let filtersJSON = JSON.parse(filters)
        console.log('呵呵呵',filtersJSON)
        whereStr = 'where'
        for (let key in filtersJSON) {
          whereStr += ' '+key+'="'+filtersJSON[key] + '" and'
        }
        whereStr = whereStr.replace(/(and$)/,'')
        
      }
     

      sql = "select * from user ";
      sql += whereStr + "order by id desc limit ?,?";

      console.log(sql)
      connect.query(sql, [
        parseInt(page*pageSize),
        parseInt(pageSize)
      ], ( error, result) => {
        if( error ) {
          console.log(error)
        }else{
          resSend(req, res, {
            count: nums,
            data:result
          })
        }
      })
    }
  })

  
});




var server = app.listen( 8099, function(err){
  if( err ){
      console.log( '报错' )
  }
  console.log( 'http://localhost:1010' )
  //opn( 'http://localhost:1010' )
} )