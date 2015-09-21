/**
 * Created by Franco on 9/16/15.
 */
//var http=require("http");
var express=require("express");
/*用户处理*/
var user=require('./router/user.js');
var app=express();//获取应用的实例

/*使用静态路劲*/
app.use(express.static(__dirname+"/public"));

/*让应用创建cookie数据*/
app.use(express.cookieParser());
/*启动session*/
app.use(express.session({
    secret:"123456",
    name:'userLogin',
    cookie:{maxAge:1000*60*60*60}
}));



app.use(express.bodyParser());

/*处理用户发送的请求,app.all（）会处理用户的所有提交方式的请求*/
app.post('/login',user.login);
app.post('/regist',user.regist);
app.post('/index',user.judge);
app.listen("9007",'localhost',function(){
    console.log("正在监听,服务启动")
});




