$(function () {
    $('.prev_list').hide();
    $('.prev_coming').hide();
    $('.comingmovies').hide();
    $('#saling').css({"color": "red", "border-bottom": "3px solid red"});
    $('.readmore').data("href","http://theater.mtime.com/China_Jiangsu_Province_Zhenjiang/");
    var list_length = 0;
    var coming_length = 0;
//上一个按钮
    $('.prev_list').click(function () {
        if (list_length < 0) {
            $('.next_list').show();
            list_length += 175;
            $('.salinglist').stop().animate({left: list_length}, "fast");
            if (list_length == 0) {
                $('.prev_list').hide();
            }
        }
    });
// 下一个按钮
    $('.next_list').click(function () {
        if (list_length > -875) {
            $('.prev_list').show();
            list_length -= 175;
            $('.salinglist').stop().animate({left: list_length}, "fast");
            if (list_length == -875) {
                $('.next_list').hide();
            }

        }

    });


    $('.prev_coming').click(function () {
        if (coming_length < 0) {
            $('.next_coming').show();
            coming_length += 290;
            $('.cominglist').stop().animate({left: coming_length}, "fast");
            if (coming_length == 0) {
                $('.prev_coming').hide();
            }
        }
    });
// 下一个按钮
    $('.next_coming').click(function () {
        if (coming_length > -4640) {
            $('.prev_coming').show();
            coming_length -= 290;
            $('.cominglist').stop().animate({left: coming_length}, "fast");
            if (coming_length == -4640) {
                $('.next_coming').hide();
            }

        }

    });

    $('#coming').hover(function () {
        $(this).css({"color": "red", "border-bottom": "3px solid red"});
        $('#saling').css({"color": "dimgrey", "border-bottom": "0px"});
        $('.salingmovies').hide();
        $('.comingmovies').show();
        $('.readmore').attr("href","http://movie.mtime.com/comingsoon/#comingsoon");
    });

    $('#saling').hover(function () {
        $(this).css({"color": "red", "border-bottom": "3px solid red"});
        $('#coming').css({"color": "dimgrey", "border-bottom": "0px"});
        $('.comingmovies').hide();
        $('.salingmovies').show();
        $('.readmore').attr("href","http://theater.mtime.com/China_Jiangsu_Province_Zhenjiang/");
    });



})