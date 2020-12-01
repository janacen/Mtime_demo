$(function () {
    var movieId = window.location.search.substring(1);
    var locationId = "671";
    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_detail_movies",
            "queryString": {
                "locationId": locationId,
                "movieId": movieId
            }
        },
        callback: function (data) {
            //回调函数
            setTicData(data.data);
        }
    });

    function setTicData(data) {
        var basic = data.basic;
        $('.db_cover_pic a img').attr("src", basic.img);
        $('.filmscore p').html(basic.overallRating);
        var time = basic.releaseDate;
        var y = time.substring(0, 4);
        var m = time.substring(4, 6);
        var d = time.substring(6);
        $(".filmtxt_1").html("上映：" + y + "年" + m + "月" + d + "日");
        var type = "";
        $.each(basic.type, function (index, temp) {
            if (index == 0) {
                type += temp;
            } else {
                type = type + "/" + temp;
            }

        });
        $(".filmtxt_2").html("类型：" + type);


        $(".filmtxt_3").html("时长：" + basic.mins);
        $(".clearfix .db_name").html(basic.name + "(" + y + ")");
        $(".db_enname").html(basic.nameEn);
        $("#filmcount").html("今天" + basic.showCinemaCount + "家影院，上映" + basic.showtimeCount + "场");


    }
    var nowday =new Date();
    var nextday=new Date(nowday.getTime()+(1000*60*60*24));
    var nextday_1=new Date(nowday.getTime()+(1000*60*60*24)*2);
    var nextday_2=new Date(nowday.getTime()+(1000*60*60*24)*3);
    $(".day_1").html(nowday.getMonth()+"月"+nowday.getDate()+"日");
    $(".day_2").html(nextday.getMonth()+"月"+nextday.getDate()+"日");
    $(".day_3").html(nextday_1.getMonth()+"月"+nextday_1.getDate()+"日");
    $(".day_4").html(nextday_2.getMonth()+"月"+nextday_2.getDate()+"日");
    var week="";
    switch (nextday_2.getDay()) {
        case 0:
            week="周日";
            break;
        case 1:
            week="周一";
            break;
        case 2:
            week="周二";
            break;
        case 3:
            week="周三";
            break;
        case 4:
            week="周四";
            break;
        case 5:
            week="周五";
            break;
        case 6:
            week="周六";
            break;
        default:
            break;
    }
    $(".lastday").html(week);

    $(".date_1,.date_2,.date_3,.date_4").click(function () {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
    })
})