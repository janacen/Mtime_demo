$(function () {
    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_saling_movies",
            "queryString": {
                "locationId": "671"
            }
        },
        callback: function (data) {
            //回调函数
            $('#saling span').html(data.count);
            initSalingMovies(data.movies);
        }
    });

    function initSalingMovies(movies) {
        $.each(movies, function (index, movie) {
            if (index == 0) {
                var member = $('.first');
                member.find(".title").data("movie_id", movie.movieId);
                member.find("img").attr("src", movie.img);
                member.find(".title").html(movie.titleCn);
                member.find(".time_time").html(movie.rMonth + "月" + movie.rDay + "日上映");
                member.find(".time_type").html(movie.type);
                member.find(".length").html("影片时长：" + movie.length + "分钟");
                member.find(".dis_text").html(movie.commonSpecial);
                if (movie.nearestShowtime.isTicket) {
                    member.find(".btn_buy").show();
                } else {
                    member.find(".btn_buy").hide();
                }
            } else if (index < 10) {
                var member = $(".others:nth-of-type(" + (index + 1) + ")");
                member.find(".movie_title").data("movie_id", movie.movieId);
                member.find("img").attr("src", movie.img);
                member.find(".movie_title").html(movie.titleCn);
                member.find(".salingtime").html(movie.rMonth + "月" + movie.rDay + "日上映");
                member.find(".salingtype").html(movie.type);
                member.find(".salinglength").html(movie.length + "分钟");
                member.find(".salingdis_text").html(movie.commonSpecial);
                if (movie.nearestShowtime.isTicket) {
                    member.find(".btn_buy").show();
                } else {
                    member.find(".btn_buy").hide();
                }
            }
        })
    }


    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_newcoming_movies",
            "queryString": {
                "locationId": "671"
            }
        },
        callback: function (data) {
            //回调函数
            var list_length = data.moviecomings.length;
            $('#coming span').html(list_length);
            initComingMovies(data.moviecomings);
        }
    });


    function initComingMovies(movies) {
        $.each(movies, function (index, movie) {
                if (index < 20) {
                    var member = $(".cominglist li:nth-of-type(" + (index + 1) + ")");
                    member.find(".comingtitle").data("movie_id", movie.id);
                    member.find("img").attr("src", movie.image);
                    member.find(".comingtitle").html(movie.title);
                    member.find(".comingtype").html(movie.type);
                    member.find(".director").html("导演："+movie.director);
                    var time=movie.releaseDate.substring(0,movie.releaseDate.length-2);
                    member.find(".comingtime").html(time);
                    if (movie.isTicket) {
                        member.find(".comingbuy").show();
                    } else {
                        member.find(".comingbuy").hide();
                    }
                }
            }
        )
    }


})