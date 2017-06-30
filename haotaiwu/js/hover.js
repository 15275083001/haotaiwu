

$(function(){


	$("footer").find("a").attr("class","active");
	$(".foot_bottom").find("dd").attr("class","active333").css("cursor","pointer")
	$(".store_l").find("span").attr("class","active").css("cursor","pointer")

	


//======================================================================
//滑过dd列表效果

	$(".aaa").hover(function(){
		
		$(this).css("box-shadow","5px,5px,5px,#999")
	}, function(){
		$(this).css("box-shadow","none")
	})











//======================================================================
//滑过字体变色
	$(".fisd").removeClass("active333");
	$(".active").hover(function(){
	
		$(this).css("color", "#f3a600")
	},function(){
		$(this).css("color", "#999")
	})

	$(".active333").hover(function(){
	
		$(this).css("color", "#f3a600")
	},function(){
		$(this).css("color", "#333")
	})

//==================================================================
//滑过购物车变色

	$(".backgroundcolor").hover(function(){
	
	$(this).css("background-image", "url(../img/07.gif) no-repeat 8px 8px").css("background-color","#ffc700")
},function(){
	$(this).css("background-url", "url('../img/7.gif') no-repeat 8px 8px").css("background-color","#f5f5f5")
})


	


//=========================================================================
//滑过页脚按钮效果
$(".foot_bottom_l").find("div").find(".ios").hover(function(){
	$(this).css("background","rgba(51,51,51,1)")
},function(){
	$(this).css("background","rgba(51,51,51,0.6)")
})




//==============================================================================
//固定菜单滑过效果
$("#fixed_menu").find("ul").find("li").find("a").hover(function(){
	$(this).find("div").css("z-index","11").stop().animate({left:-100}, 200, function(){})
	$(this).find("i").css("background","#ffc700").css("color","#333")
},function(){
	$(this).find("div").stop().animate({left:0}, 200, function(){})
	$(this).find("i").css("background","#333").css("color","#ffc700")
})

//===================================================================
//
//滚动
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var fixed = $("#fixed_menu").find("ul").find("li:last");
	var top = fixed.css("top");
	window.onscroll = function(){
		fixed.css("top", top + scrollTop)
	}
	fixed.click(function(){
		scrollTop = 0;
	})










})




//==============================================================================
//侧边栏显示隐藏
	function conceal(){
		$(".aside").css("display","none");
		$(".nav_6").hover(function(){
		$(".aside").css("display","block")
		},function(){
			$(".aside").css("display","none");

		})
		$(".aside").hover(function(){
			$(".aside").css("display","block")
		},function(){
			$(".aside").css("display","none");

		})

	}

//===============================================================================
//滑过商品效果
	function hover_commodity(){
		$(".aaa").find("img").css("opacity","0.9")
			$(".aaa").hover(function(){
				
				$(this).css("box-shadow","0px 0px 10px #999")
				$(this).find("img").stop(true).animate({opacity : 1}, 200, function(){
					
				});
			}, function(){

				$(this).css("box-shadow","none")
				$(this).find("img").stop(true).animate({opacity : 0.9}, 200, function(){
					
				});
				
			})

			$(".o_p").hover(function(){

				$(this).css("text-decoration","underline")
			}, function(){
				$(this).css("text-decoration","none")
			})
	}















