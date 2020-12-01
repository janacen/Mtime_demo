$(function(){
	$(".more").mouseover(function(){
		$(".db_nav_sel").css("display","block");
		$(".more .__r_c1").css("color","black");
	});
	
	$(".more").mouseout(function(){
		$(".db_nav_sel").css("display","none");
		$(".more .__r_c1").css("color","#fff");
	});
	
	var btnClick=false;
	$(".tooledit").click(function(){
		
		if(!btnClick)
		{
		   $(".tooledit").css("background-color","#49b6ff");
		   btnClick=true;
		}
		else{
		   $(".tooledit").css("background-color","white");
		   btnClick=false;
		}
	});
	$("#appdownloda").hover(function () {
		$("#code1,#code2").show();
    },function () {
        $("#code1,#code2").hide();
    })
})
