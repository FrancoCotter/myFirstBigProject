/**
 * Created by Franco on 9/15/15.
 */
$(function () {
    $("#userName").blur(function () {
        var $reg = /^[A-Za-z0-9]{0,16}$/;
        if ($(this).val().length == 0) {
            $(".userTips").text("账户名为必填项")
            return false;
        } else if (!$reg.test($(this).val())) {
            $(".userTips").text("账户是无效的");
            return false;
        } else {
            return true;
        }
    });
    $("#userName").blur(function(){
        $.ajax({
            url:"/index",
            type:"post",
            data:{username:$("#userName").val()},
            success:function(data){
                if(data=="fail"){
                    $(".userTips").text("账户已存在");
                }
            }
        })
    })
    $("#userName").focus(function () {
        $(".userTips").text("");
    });
    $("#userPass").blur(function () {
        var $reg = /^[A-Za-z0-9_-]{0,16}$/;
        if ($(this).val().length == 0) {
            $(".passTips").text("密码为必填项");
            return false;
        } else if (!$reg.test($(this).val())) {
            $(".passTips").text("密码似乎无效");
            return false;
        } else {
            return true;
        }
    });
    $("#userPass").focus(function () {
        $(".passTips").text("");
    });
    $("#userEmail").blur(function () {
        var $reg =/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/
        if ($(this).val().length == 0) {
            $(".mailTips").text("邮箱为必填项");
            return false;
        } else if (!$reg.test($(this).val())) {
            $(".mailTips").text("邮箱似乎无效");
            return false;
        } else {
            return true;

        }
    });
    $("#userEmail").focus(function () {
        $(".mailTips").text("");
    });
});

function regist(){
    $.ajax({
        url:"/regist",
        type:"post",
        data:{username:$("#userName").val(),userpwd:$("#userPass").val(),useremail:$("#userEmail").val()},
        success:function(data){
            if(data=="success"){
                document.cookie="username="+$("#userName").val();
                window.location.href="http://localhost:9007/hotmovie.html";
            }else{
                window.location.href="htto://location:9007/regist.html";
            }

        },
        error:function(err){
            console.log(err)
        }
    })

}


