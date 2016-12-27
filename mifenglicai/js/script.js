$(document).ready(function(){
	/*礼品*/
	$(".gift a:first-child").click( function(){
		$("#wrapper").show().siblings().hide();
		$(this).addClass('light').siblings().removeClass('light');
	})
	$(".gift a:last-child").click( function(){
		$("#wrapper").hide().siblings().show();
		$(this).addClass('light').siblings().removeClass('light');
	})

	/*发团*/
	var index=0;
	$(".fa_t a").click( function(){
		var index=$(this).index();
		$(this).addClass('light').siblings().removeClass('light');
		$(".ft_3 article").eq(index).show().siblings().hide();
	})
	
	$(".xz_data p a").click( function(){
		$(this).addClass('on').siblings().removeClass('on');
	})
	/*注册提示请输入*/
	$(".pl_wr").click(function(){
		$(this).hide();
	})
	/*阅读并同意*/
	$('.read_consent').toggle(function() {
		$(this).css("background-image","url(./images/sure_check_no.png)");
	}, function() {
		$(this).css("background-image","url(./images/sure_check.png)");
	});
	/*转入金额radio样式*/
	$('label').click(function(){
		var radioId = $(this).attr('name');
	    $('label').removeAttr('class') && $(this).attr('class', 'checked');
	    $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
	});
	/*投资记录*/
	$(".t_z .r_f").toggle(function(){
		$(this).css("background","#52dbd6");
		$(this).find('i').attr("class","i_img_bg");
		$(this).find('img').attr("src","./images/tz_down.png");
		$(this).find('p').css("color","#ffffff");
		$(this).find('font').show().css("color","#ffffff");
		$(this).parent().prev().css({"bottom":"70px"});
		//$('.t_z .in_box:last-child .r_f .pix').css({"bottom":"110px"});
	}, function() {
		$(this).css("background","#eaeaea");
		$(this).find('i').attr("class","i_img");
		$(this).find('img').attr("src","./images/tz_right.png");
		$(this).find('p').css("color","#999999");
		$(this).find('font').hide();
		$(this).parent().prev().css({"bottom":"70px"});
	});
	$(".t_z div:last-child .r_f").css("background","#52dbd6");
	$(".t_z div:last-child .r_f").find('i').attr("class","i_img_bg");
	$(".t_z div:last-child .r_f").find('p').css("color","#ffffff");
	$(".t_z div:last-child .r_f").find('font').css("color","#ffffff");
	$(".t_z div:last-child .r_f").find('img').attr("src","./images/tz_down.png");
	/*安全保障*/
	$(".safe ul li").toggle(function(){
		$(this).find('div').show();
	}, function() {
		$(this).find('div').hide();
	});
})
