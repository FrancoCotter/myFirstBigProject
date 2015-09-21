/**
 * Created by Franco on 8/30/15.
 */
$(function () {

    $("#userName").blur(function () {
        var $reg = /^[A-Za-z0-9]{0,16}$/;
        if ($("#userName").val().length == 0) {
            $(".userNameTips").text("账户名为必填项")
            return false;
        } else if (!$reg.test($("#userName").val())) {
            $(".userNameTips").text("账户是无效的");
            return false;
        } else {
            return true;
        }
    });
    $("#userName").focus(function () {
        $(".userNameTips").text("");
    });
    $("#userPassword").blur(function () {
        var $reg = /^[A-Za-z0-9_-]{0,16}$/;
        if ($("#userPassword").val().length == 0) {
            $(".userPassTips").text("密码为必填项");
            return false;
        } else if (!$reg.test($("userPassword").val())) {
            $(".userPassTips").text("密码似乎无效");
            return false;
        } else {
            return true;
        }
    });
    $("#userPassword").focus(function () {
        $(".userPassTips").text("");
    });
});

function login(){
    $.ajax({
        url:"/login",
        type:"post",
        data:{username:$("#userName").val(),userpwd:$("#userPassword").val()},
        success:function(data){
            if(data=="success"){
                document.cookie="username="+$('#userName').val();
                window.location.href="http://localhost:9007/hotmovie.html";
            }else{
               window.location.href="htto://localhost:9007/login.html";
            }

        },
        error:function(err){
            console.log(err)
        }
    })

}

