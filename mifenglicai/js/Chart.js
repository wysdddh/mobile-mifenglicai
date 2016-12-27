/*
 *
 * 产品详情页JS
 *
 */
$(function() {



	var Chartl = $(".ChartWarp .l"),Chartr = $(".ChartWarp .r"),Chart = $(".Chart"),ChartBtnL = $(".ChartBtnL"),ChartBtnR = $(".ChartBtnR");
	
	Chartl.find("li").on("tap", function() {
		if ($(this).find(".chartbtns").length == 0) {
			var x = $(this).attr("data-x"),y = $(this).attr("data-y"),num = $(this).attr("data-num");
			movers(y, x, num,1);
		} else {
			$(".chartbtns").hide();
			$(this).find(".chartbtns").show();
		}
	})
	Chartr.find("li").on("tap", function() {
		if ($(this).find(".chartbtns").length == 0) {
			var x = $(this).attr("data-x"),y = $(this).attr("data-y"),num = $(this).attr("data-num");
			movers(y, x, num,0);
		} else {
			$(".chartbtns").hide();
			$(this).find(".chartbtns").show();
		}

	})
	
	function movers (y,x,t,b){
		if(b){
			$(ChartBtnL).css({top: y + "px",left: x + "px"});
			$(ChartBtnL).find(".num i").html(t);
		}else{
			$(ChartBtnR).css({top: y + "px",right: x + "px"})
			$(ChartBtnR).find(".num i").html(t);
		}
	}

	


		/*******发团详情页面******/

	var ftsele = $(".ft-select");
	var ftop = $(ftsele).find("ul");
	$(ftsele).on("tap", function() {

		if (!$(this).hasClass("active")) {
			$(this).addClass("active");
			$(this).removeClass("actred");
			ftop.show();
		} else {
			$(this).removeClass("active");
			ftop.hide();
		}
		
	})

	ftop.find("li").on("tap", function() {
		var thisHTML = $(this).html();
		$(".Chart-Tip span").html("+"+thisHTML);
		ftsele.find("span").html(thisHTML);
		ftsele.addClass("actred");
		$(this).attr("data-num",true).siblings().attr("data-num",false)
		ftop.hide();

	})
	
//	$(".ft-form input").focus(function() {
//		$(".cp-fx").hide();
//	}).blur(function() {
//		$(".cp-fx").show();
//	})


	;(function() {
		var time = Math.round(new Date().getTime() / 1000);
		var version, script;
		for (var i = document.scripts.length - 1; i >= 0; i--) {
			script = document.scripts[i];
			if (script.src && script.src.indexOf('js') >= 0) {
				var src = script.src;
				script.src = src + (src.indexOf("?") == -1 ? "?" : "&") + "ver=" + time
			}
		};
	}())



})