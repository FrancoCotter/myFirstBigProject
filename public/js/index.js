/**
 * Created by Franco on 9/11/15.
 */
var video=document.getElementById("video1");
video.onclick=function(){
    if(this.paused){
        this.play();
    }else{
        this.pause();
    }
};

$(window).resize(function(){
    if(document.body.clientWidth<1120){
        video.pause();
    }
});