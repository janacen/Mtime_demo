$(function () {
    $("#pageMovieDetail").hide();
    $(".first .title").click(function () {
        var movieid = $(this).data("movie_id");
        setData_detail(671, movieid);
        $(".index_page").hide();
        $("#pageMovieDetail").fadeIn(1000);
        $("html,body").animate({"scrollTop":"0"}, "fast");
    });

    $(".others .movie_title").click(function () {
        var movieid = $(this).data("movie_id");
        setData_detail(671, movieid);
        $(".index_page").hide();
        $("#pageMovieDetail").fadeIn(1000);
        $("html,body").animate({"scrollTop":"0"}, "fast");
    });

    $(".comingtitle").click(function () {
        var movieid = $(this).data("movie_id");
        setData_detail(671, movieid);
        $(".index_page").hide();
        $("#pageMovieDetail").fadeIn(1000);
        $("html,body").animate({"scrollTop":"0"}, "fast");
    });


    $(".first img").click(function () {
        var movieid = $(this).parent().find(".title").data("movie_id");
        setData_detail(671, movieid);
        $(".index_page").hide();
        $("#pageMovieDetail").fadeIn(1000);
        $("html,body").animate({"scrollTop":"0"}, "fast");
    });

    $(".others .cover_info").click(function () {
        var movieid = $(this).parent().find(".movie_title").data("movie_id");
        setData_detail(671, movieid);
        $(".index_page").hide();
        $("#pageMovieDetail").fadeIn(1000);
        $("html,body").animate({"scrollTop":"0"}, "fast");
    });

    $(".cominglist img").click(function () {
        var movieid = $(this).parent().find(".comingtitle").data("movie_id");
        setData_detail(671, movieid);
        $(".index_page").hide();
        $("#pageMovieDetail").fadeIn(1000);
        $("html,body").animate({"scrollTop":"0"}, "fast");
    });


    $("#back_btn").click(function () {
        $("#pageMovieDetail").hide();
        $(".index_page").fadeIn(1000);
        $("html,body").animate({"scrollTop":"1050"}, "fast");
    })

    $(".first .btn_buy").click(function () {
        var id=$(this).parent().find(".title").data("movie_id");
        window.open("./ticpage.html?"+id,"_blank");
    })

    $(".others .btn_buy").click(function () {
        var id=$(this).parent().find(".movie_title").data("movie_id");
        window.open("./ticpage.html?"+id,"_blank");
    })

    $(".comingbuy").click(function () {
        var id=$(this).parent().find(".comingtitle").data("movie_id");
        window.open("./ticpage.html?"+id,"_blank");
    })
})