$(function () {
    var args=window.location.search;
    var flag=args.substring(1,2);
    var id=args.substring(2);
    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_minicomment_movies",
            "queryString": {
                "movieId": id
            }
        },
        callback: function (data) {
            //回调函数
            console.log(data.data.cts);
            initMini(data.data.cts);
        }
    });

    function initMini(comments) {
        $.each(comments, function (index, comment) {
            if(index<20){
                var member = $(".bord:nth-of-type(" + (index + 1) + ")");
                member.find("img").attr("src",comment.caimg);
                member.find("h3").html(comment.ce);
                member.find("p a").html(comment.ca);
            }

        })
    }

    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_pluscomment_movies",
            "queryString": {
                "movieId": id
            }
        },
        callback: function (data) {
            //回调函数
            console.log(data.comments);
            initPlus(data.comments);
        }
    });

    function initPlus(comments) {
        $.each(comments, function (index, comment) {
            if(index<10){
                var member = $(".box1:nth-of-type(" + (index + 1) + ")");
                member.find("h3 a").html(comment.title);
                member.find(".content").html(comment.content);
                member.find("img").attr("src",comment.headurl);
                member.find("p a").html(comment.nickname);
            }

        })
    }

    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_imgs_movies",
            "queryString": {
                "movieId": id
            }
        },
        callback: function (data) {
            //回调函数
            setImg(data.images);
        }
    });

    function setImg(images){
        var step_jz=0;
        var step_hb=0;
        var step_qt=0;
        var juzhao=null;
        var haibao=null;
        var qita=null;
        $.each(images, function (index, image) {

            if(image.type==6){
                step_jz++;
                if(step_jz<12){
                    juzhao=$(".JZ th").eq(step_jz);
                    juzhao.find("img").attr("src",image.image);
                }
            }else if(image.type==1){
                step_hb++;
                if(step_hb<8){
                    haibao=$(".HB th").eq(step_hb);
                    haibao.find("img").attr("src",image.image);
                }
            }else{
                step_qt++;
                if(step_qt<12){
                    qita=$(".GZZ th").eq(step_qt);
                    qita.find("img").attr("src",image.image);
                }
            }
        })
    }

    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_actors_movies",
            "queryString": {
                "movieId": id
            }
        },
        callback: function (data) {
            //回调函数
            setActors(data.types);
        }
    });
    
    function setActors(types) {
        $.each(types, function (index, type) {
            if(type.typeNameEn=="Director"){
                $('#director').html(type.persons[0].name);
                $('#directorEn').html(type.persons[0].nameEn);
            }else if(type.typeNameEn=="Writer"){
                $('#writer').html(type.persons[0].name);
                $('#writerEn').html(type.persons[0].nameEn);
            }else if(type.typeNameEn=="Produced by"){
                $('#producer').html(type.persons[0].name);
                $('#producerEn').html(type.persons[0].nameEn);
            }else if(type.typeNameEn=="Actor"){
                $.each(type.persons, function (index, person) {
                    if(index<6){
                        var member = $(".credits1 dd:nth-of-type(" + (index + 1) + ")");
                        member.find("img").attr("src",person.image);
                        member.find(".pic_1 h3").html(person.name);
                        member.find(".pic_1 p").html(person.nameEn);
                        member.find(".character_inner h3").html(person.personate);

                    }
                })
            }
        })
    }

    requestAPI({
        url: window.requestURL,
        data: {
            "API_type": "get_detail_movies",
            "queryString": {
                "movieId": id,
                "locationId": "671",
            }
        },
        callback: function (data) {
            //回调函数
            sethead(data.data);
        }
    });

    function sethead(data) {
        var basic = data.basic;
        $('.moviePic a img').attr("src", basic.img);
        var time = basic.releaseDate;
        var y = time.substring(0, 4);
        $(".textTop .db_year a").html(y);
        $('.textTop h1 a').html(basic.name);
        $('.textTop .db_enname a').html(basic.nameEn);
        $('.video span').html(basic.video.count);
        $('.image_btn span').html(basic.stageImg.count);
        $('.artists_btn span').html(basic.personCount);
    }

    {
        if(flag==1){
            $(".image_btn").css("background-color", "#004c7f");
            $(".image_btn").css("color", "white");
        }else if(flag==2){
            $(".ImagesDiv").css("display", "none");
            $(".artists").css("display", "block");
            $(".endText").css("top", "880px");
            $(".imageTitle").css("display", "none");
            $(".artists_btn").css("background-color", "#004c7f");
            $(".artists_btn").css("color", "white");
            $(".image_btn").css("background-color", "white");
            $(".image_btn").css("color", "#333");

            $(".YP_btn").css("background-color", "white");
            $(".YP_btn").css("color", "#333");
            $(".YP").css("display", "none");
        }else if(flag==3){
            $(".ImagesDiv").css("display", "none");
            $(".artists").css("display", "none");
            $(".imageTitle").css("display", "none");
            $(".image_btn").css("background-color", "white");
            $(".image_btn").css("color", "#333");
            $(".artists_btn").css("background-color", "white");
            $(".artists_btn").css("color", "#333");
            $(".YP_btn").css("background-color", "#004c7f");
            $(".YP_btn").css("color", "white");
            $(".YP").css("display", "block");
            $(".endText").css("top", "2350px");
        }
    };
})

