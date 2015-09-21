/**
 * Created by Franco on 9/16/15.
 */
var mysql=require("mysql");


exports.getConn=function(){
    var conn=mysql.createConnection({
        host:'localhost',
        database:'user',
        user:'root',
        port:3306
    });

    return conn;
};

exports.closeConn=function(conn){
    conn.end();
};