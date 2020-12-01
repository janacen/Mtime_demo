function setData_detail(locationId, movieId) {
    var id1 = "" + locationId;
    var id2 = "" + movieId;
    $(".movieNavigationRegion dd a").attr({"target": "_blank", "href": "./subpage.html?a" + movieId});
    $(".movieNavigationRegion dd #btn_1").attr({"target": "_blank", "href": "./subpage.html?1" + movieId});
    $(".movieNavigationRegion dd #btn_2").attr({"target": "_blank", "href": "./subpage.html?2" + movieId});
    $(".movieNavigationRegion dd #btn_3").attr({"target": "_blank", "href": "./subpage.html?3" + movieId});
    $('.wri_name').html("--");
    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_detail_movies",
            "queryString": {
                "locationId": id1,
                "movieId": id2
            }
        },
        callback: function (data) {
            //回调函数
            initDetailPage(data.data);
        }
    });

    function initDetailPage(data) {
        var basic = data.basic;
        $('.db_cover_pic a img').attr("src", basic.img);

        var time = basic.releaseDate;
        var y = time.substring(0, 4);
        var m = time.substring(4, 6);
        var d = time.substring(6);
        $('.clearfix h1').html(basic.name + "(" + y + ")");
        $('.db_enname').html(basic.nameEn);
        $('.otherbox .mins').html(basic.mins);
        var type = "";
        $.each(basic.type, function (index, temp) {
            if (index == 0) {
                type = type + "-" + temp;
            } else {
                type = type + "/" + temp;
            }

        })
        $('.otherbox .typeandtime').html(type + "-" + y + "年" + m + "月" + d + "日");
        var result = "";
        if (basic.is3D) {
            result += "3D";
            if (basic.isIMAX) {
                result += "/IMAX";
            } else {
                $('.ico_imax').hide();
            }
            if (basic.isDMAX) {
                result += "/中国巨幕";
            } else {
                $('.ico_dmax').hide();
            }
        } else {
            result += "2D";
            if (basic.isIMAX) {
                result += "/IMAX";
            } else {
                $('.ico_imax').hide();
            }
            if (basic.isDMAX) {
                result += "/中国巨幕";
            } else {
                $('.ico_dmax').hide();
            }
        }
        $('.result').html(result);
        $('.tit_c').html("今日" + basic.showCinemaCount + "家影院");
        $('.tit_t').html("上映" + basic.showtimeCount + "场次");
        $('.video_count').html(basic.video.count);
        $('.pic_count').html(basic.stageImg.count);
        $('.member_count').html(basic.personCount);
        var grade = basic.overallRating;
        var grade_str = "" + grade;
        $('.num_pre').html(grade_str.substring(0, 1));
        $('.num_last').html(grade_str.substring(1));
        $('.ticketCont').html("票房：" + data.boxOffice.totalBoxDes + "亿元");
        $('.dir_name').html(basic.director.name);
        $('.area_name').html(basic.releaseArea);
        $('#story').html(basic.story);
        var actor_length = basic.actors.length;
        if (actor_length < 4) {
            var step = 0;
            $.each(basic.actors, function (index, actor) {
                step++;
                var memeber = $('.main_actor:nth-of-type(' + (index + 1) + ')');
                memeber.find("img").attr("src", actor.img);
                memeber.find(".actor_name").html(actor.name);
                memeber.find(".actor_nameEn").html(actor.nameEn);
                memeber.find(".ch").html("饰 " + actor.roleName);
            });
            while (step < 4) {
                step++;
                var memeber = $('.main_actor:nth-of-type(' + step + ')');
                memeber.find("img").attr("src", "");
                memeber.find(".actor_name").html("暂无");
                memeber.find(".actor_nameEn").html("暂无");
                memeber.find(".ch").html("饰 " + "暂无");
            }
        } else {
            $.each(basic.actors, function (index, actor) {
                if (index < 4) {
                    var memeber = $('.main_actor:nth-of-type(' + (index + 1) + ')');
                    memeber.find("img").attr("src", actor.img);
                    memeber.find(".actor_name").html(actor.name);
                    memeber.find(".actor_nameEn").html(actor.nameEn);
                    memeber.find(".ch").html("饰 " + actor.roleName);
                }
            })
        }

    }

    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_actors_movies",
            "queryString": {
                "movieId": id2
            }
        },
        callback: function (data) {
            //回调函数
            setWriter(data.types);
        }
    });

    function setWriter(types) {
        $.each(types, function (index, type) {
            if (type.typeNameEn == "Writer") {
                $('.wri_name').html(type.persons[0].name);
            }
        })
    }
}