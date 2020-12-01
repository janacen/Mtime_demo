function showLong(){
    $(".YP2").css("display", "none");
    $(".box").css("display", "block");
    $(".WYP i").css("display", "none");
    $(".CYP i").css("display", "block");
    $(".endText").css("top", "2350px");
}

$(function () {
    $(".more").mouseover(function () {
        $(".more em").css("background-position", "-59px -15px");
        $(".db_nav_sel").css("display", "block");
    });
    $("#detailMenuRegion").mouseout(function () {
        $(".more em").css("background-position", "-68px -15px");
        $(".db_nav_sel").css("display", "none");
    });

    $(".artists_btn").click(function () {
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
    });

    $(".image_btn").click(function () {
        $(".ImagesDiv").css("display", "block");
        $(".artists").css("display", "none");
        $(".endText").css("top", "2500px");
        $(".imageTitle").css("display", "block");
        $(".image_btn").css("background-color", "#004c7f");
        $(".image_btn").css("color", "white");
        $(".artists_btn").css("background-color", "white");
        $(".artists_btn").css("color", "#333");

        $(".YP_btn").css("background-color", "white");
        $(".YP_btn").css("color", "#333");
        $(".YP").css("display", "none");

    });


    $(".YP_btn").click(function () {
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
        showLong();
    });

    $(".WYP").click(function () {
        $(".box").css("display", "none");
        $(".YP2").css("display", "block");
        $(".WYP i").css("display", "block");
        $(".CYP i").css("display", "none");
        $(".endText").css("top", "2700px");
    });
    $(".CYP").click(showLong);

})
