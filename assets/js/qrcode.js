$(document).ready(function(){
    var $url = location.search,
        $img = $('img');
    console.log($url);
    var param = $url.substring(1).split('=');
    console.log(param[1]);
    if(param[1] == "weixin"){
        $img.attr('src','images/QRcodeWX.jpg');
    }else{
        $img.attr('src','images/QRcodeQQ2.jpg');
    }
})
