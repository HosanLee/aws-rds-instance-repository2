var express = require('express'); var mysql =require('mysql');
var router =express.Router();
var connection =mysql.createConnection({
    
    
 user : 'user',
    host : 'aws-rds-mysql.cr4r99blaszb.us-west-2.rds.amazonaws.com:3306',
    password : 'ne504aa7',
    database : 'sopt'
});
router.get('/', function(req, res, next) { connection.query('select id, title, timestamp from board '+
'order by timestamp desc;', function (error, cursor){
res.json(cursor);
});
});
module.exports =router;
