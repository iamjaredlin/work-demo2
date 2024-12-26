//為彈出層添加樣式
function reset_element(id){
	$("#"+id).addClass("myboxdiv");
}

//打開層
function show_element(id){
	reset_element(id);
	$("a[mode='dialog_a']").each(function(){
		$("#"+$(this).attr("bind")).hide();
	});

	//---------- 設置位置 ----------
	var e_width = $("#"+id).width();
	var e_height = $("#"+id).height();
	var sc_width = $(window).width();
	var sc_height = $(window).height();


	var to_left = (sc_width-e_width)/2;
	var to_top = (sc_height-e_height)/2+$(document).scrollTop();
	if(to_left<0){
		to_left = 0;
	}
	if(sc_height<e_height){
		to_top = $(document).scrollTop();
	}
	$("#"+id).css({left:to_left+"px",top:to_top+"px"});
	//---------- 設置位置 ----------

	$("#"+id).show();
	show_bg(id);
}
var click_a_callbak = function(source){
	if($(source).attr("callback")){
		$.globalEval($(source).attr("callback"));
	}
};
//關閉層並隱藏背景
function close_element(id){
	$("#"+id).hide(0);
	hide_bg();
}

//初始化背景
function initbg(id){
	if (!$("#myboxOverlay")[0]) {
        $(document.body).append("<div id='myboxOverlay' class='myboxOverlay'></div>");
	}

	$('#myboxOverlay').click(function() {
		close_element(id);
	});
}

//顯示背景
function show_bg(id){
	initbg(id);

	$("#myboxOverlay").show();
	$("#myboxOverlay").fadeTo(0, 0.8);
	$("#myboxOverlay").css({width:$(document).width(),height:$(document).height()});
}

//隱藏背景
function hide_bg(){
	$("#myboxOverlay").hide();
}

$(document).ready(function(){
	$("a[mode='dialog_a']").bind("click",function(){
		close_element($(this).attr("bind"));
		click_a_callbak($(this));
	});
	
	$("a[mode='dialog_a']").each(function(){
		$(this).attr("href","javascript:void(0)");
	});
});

$(window).resize(function(){
	$("a[mode='dialog_a']").each(function(){
		var bind = $(this).attr("bind");
		if($("#"+bind).css("display")!='none'){
			
			show_element(bind);
		}
	});
});