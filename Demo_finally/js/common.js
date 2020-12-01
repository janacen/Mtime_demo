function requestAPI(reqdata) {
    $.ajax({
        url:reqdata.url,
        data:reqdata.data,
        dataType:"jsonp",
        jsonp:"callback",
        success:function (res) {
            reqdata.callback(res);
        }/*,
		error:function (err) {
			console.warn(err.status);
		}*/
    });
}

window.requestURL="http://www.igeekhome.com/mplayer/MovieAPI.php";

$(function () {
    window.requestAPI=requestAPI;
});