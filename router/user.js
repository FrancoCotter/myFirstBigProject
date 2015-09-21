/**
 * Created by Franco on 9/16/15.
 */
var userSql=require("./sql/user.js");

exports.login=function(req,res){
    var name=req.body.username;
    var pwd=req.body.userpwd;
    userSql.login(name,pwd,res)

};



exports.regist=function(req,res){
    var name=req.body.username;
    var pwd=req.body.userpwd;
    var email=req.body.useremail;
    userSql.regist(name,pwd,email,res);
};


exports.judge=function(req,res){
    var name=req.body.username;
    console.log(name);
    userSql.judge(name,res);
}