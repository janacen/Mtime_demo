$(function() {
            $(".mboxofficetab dd").each(function(index) {
                $(this).mouseover(function() {
                    $("dd.cur").removeClass("cur"); //注意这里
                    $(this).addClass("cur"); //注意这里
                    $(".tab-content div.active-txt").removeClass("active-txt");
                    $(".tab-content div").eq(index).addClass("active-txt");
                });
            })
        });
        //实现tab-box