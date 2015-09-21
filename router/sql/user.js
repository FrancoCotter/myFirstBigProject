/**
 * Created by Franco on 9/16/15.
 */
var mysql=require("./mysql.js");
exports.login=function(username,userpwd,res){
    var conn=mysql.getConn();
    var sql='select count(*) as count from user u where u.user_name= ? and u.user_pwd= ?';
    conn.query(sql,[username,userpwd],function(err,data){
        if(data[0].count!=0){
            res.send("success");
        }else{
            res.sendfile("login.html");
        }
    })

};

exports.judge=function(username,res){
    var conn=mysql.getConn();
    var sql="select count(*) as count from user where user_name= ?";
    conn.query(sql,[username],function(err,data){
        if(data[0].count!=0){
            res.send("fail");
        }
    })
}


exports.regist=function(username,userpwd,useremail,res){
    var conn=mysql.getConn();
    var sql="insert into user (user_name,user_pwd,user_email) values (?,?,?)";
    conn.query(sql,[username,userpwd,useremail],function(err,data){
        console.log(data);
        if(data.affectedRows!=0){
            res.send("success");
        }else{
            res.sendfile("regist.html");
        }
    });
    //mysql.closeConn(conn);
};



