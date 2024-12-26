
$(function(){
		
	$(".btn_android").click(function(){
		$("#android_box").fadeIn(500);
		$("#ios_box").hide();
		return false;
	});
	
	$(".btn_ios").click(function(){
		$("#ios_box").fadeIn(500);
		$("#android_box").hide();
		return false;
	});
	
	$(".btn08 , .mobile_nav06").click(function(){
		$("html,body").animate({scrollTop:0},900);
		return false;
	});
	

	
});

