$(function(){
	//获取按钮和广告图
	var oBtns = $(".btn").find("ol").find("li");
	var aLi = $("#banner").find("ul").find("li");
	var arr = ["#ffc700","#ff8a00","#f4bcbb","#f7edda"]
	$("#banner").css("background",arr[0]);
	oBtns.eq(0).css("background-color","#ffc700")
	aLi.eq(0).css({"z-index":"4"})
	//设计数变量
	var iNow = 1;
	//设定定时器
	
	
	var timer = null;
	timer = setInterval(tab, 2000);


	function tab(){

		$("#banner").css("background",arr[iNow]).css("opacity","0").fadeTo(800, 1, function(){});
		aLi.css("z-index","1");
		aLi.eq(iNow).css("z-index","4").css("opacity","0").fadeTo(800, 1, function(){});
		oBtns.css("background-color","#fff");
		oBtns.eq(iNow).css("background-color","#ffc700")
		iNow++;
		if(iNow > 3){
			iNow = 0;
		}	
	}
	aLi.hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(tab,2000)
	});
	oBtns.hover(function(){
		iNow = $(this).index();
		tab();
		clearInterval(timer);
	}, function(){
		timer = setInterval(tab,2000)
	});

	//===================================================================
	//车主评价栏滚动
	

	var oUl = $("#evaluate").find("ul");
	var oLi = oUl.find("li");

	var count = 0;
	var tmer = null;
	
	tmer = setInterval(evaluate,4000);
	function evaluate(){
		oUl.animate({"left": count * -300}, function(){
			if(count == oLi.length-3){
				count = 0;
				oUl.css("left", "299px");
			}
		});
		count++;
	}
	




})