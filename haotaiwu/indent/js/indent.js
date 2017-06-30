$(function(){
	var header = new Header();
	header.header_left();
	header.header_right();

	recommend();
	
	cookie_list();

	tab();

	$(".all").click(function(){
				
		if($(this).is(':checked')){
			
			$(".chec").prop("checked",true).addClass("pitch_on")
			$(".all").prop("checked",true)
		}else if(!$(this).is(':checked')){
			
			$(".chec").prop("checked",false).removeClass("pitch_on")
			$(".all").prop("checked",false)
		}
	})
	
	$(".delete").click(function(){
		
		$(".pitch_on").parent().parent().parent().remove('li');
		if($(".all").is(':checked')){
			$(".cookieList").find("ul").html("");
			$.cookie("goods", null,{ expires: -100, path: '/' });
			tab();

		}

	})

	

})

//===================================================================================
//推荐商品
function recommend(){
	ajax({
		method:"get",
		url:"json/indent.json",
		data:null,
		success:function(data){
			var arr = JSON.parse(data);
			let oH3 = document.createElement("h3");
			let oSpan = document.createElement("span");
			oSpan.innerHTML = arr.title;
			oH3.appendChild(oSpan);
			$("#recommend").append(oH3);

			let oUl = document.createElement("ul");


			for(let i = 0; i < arr.data.length; i++){
				let oLi = document.createElement("li");
				let oImg = document.createElement("img");
				oImg.src = arr.data[i].img;
				let oP = document.createElement("p");
				oP.innerHTML = arr.data[i].parameter;
				let oB = document.createElement("b");
				oB.innerHTML = arr.data[i].cost;
				let oDiv = document.createElement("div");
				oDiv.appendChild(oImg);
				oDiv.appendChild(oP);
				oDiv.appendChild(oB);
				oLi.appendChild(oDiv);
				let oDiv2 = document.createElement("div");
				oDiv2.className = "shopping_cart"
				oDiv2.innerHTML = "加入购物车";
				oDiv2.id = arr.data[i].id;
				oLi.appendChild(oDiv2);
				oUl.appendChild(oLi);

			}
			$("#recommend").append(oUl);


			$("#recommend").find("ul").find("li").hover(function(){
				$(this).find(".shopping_cart").css("display","block");
			},function(){
				$(this).find(".shopping_cart").css("display","none");
			})
			$("#recommend").find("ul").find("li").find("p").hover(function(){
				$(this).css("color","#eca519")
			},function(){
				$(this).css("color","#333");
			})
			shopping_cart_cookie();

		}
	})
}












function shopping_cart_cookie(){
	$(".shopping_cart").on('click', function(){
		//点击对应的按钮，将当前点击按钮所在的商品cookie进行缓存。
		//取出商品的id
		var id = $(this).attr("id")
		var first = $.cookie("goods") == null ? true : false;
		var same = false; //判断是否之前添加过相同的商品


		if(first){
			//第一次添加，建立json结构
			var arr = [{id: id, num: 1}];
			$.cookie("goods", JSON.stringify(arr), { expires: 7, path: '/' });
		}else{
			//不是第一次添加，判断之前是否有存储过这个商品
			var str = $.cookie("goods");
			var arr = JSON.parse(str);
			//遍历已经存储的所有商品，如果有id相同的，让数量进行递增
			for(var attr in arr){
				if(arr[attr].id == id){
					arr[attr].num = arr[attr].num + 1; //数量进行+1
					//再将数据存储到cookie中
					var cookieStr = JSON.stringify(arr);

					$.cookie("goods", cookieStr, { expires: 7, path: '/' });
					same = true;
				}
			}

			if(!same){
				//没有相同的商品
				var obj = {id: id, num: 1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr,{ expires: 7, path: '/' });
			}
		}
		sc_car();
		
	})
	
}





//==========================================================
//取cookie商品数据
function cookie_list(){
	$.ajax({
		url: "json/indent2.json",
		type: "GET",
		success: function(res){
			var sc_str = $.cookie("goods");
			if(sc_str){
				var sc_arr = JSON.parse(sc_str);
				
				var sc_num = 0;
				var count = 0;
				for(var i in sc_arr){
					count += parseInt(res.data[i].cost2) * parseInt(sc_arr[i].num)
					let oLi = document.createElement("li");
					oLi.innerHTML = '<li><div class="check"><input type="checkbox" checked="checked" class="chec"></input></div><div class="shopping2"><img src=' + res.data[i].img +'><p>' + res.data[i].parameter + '</p></div><div class="dj">' + res.data[i].cost + '</div><div class="dj2 djs"><span> ' +sc_arr[i].num+ ' </span></div><div class="dj3 djs">￥'+ parseInt(res.data[i].cost2) * parseInt(sc_arr[i].num) + '</div><div class="dj4 djs">删除</div></li>';
					$(".tbody ul").append(oLi);
					

				}
				$(".aggregate").html("￥" + count);
				
			}


			//删除数据
			$(".dj4").on("click",function(){
				$(this).parent().parent().remove('li');
				
				var index = $(".djs").index($(this));
				var str = $.cookie("goods");
				var arr = JSON.parse(str);
				arr.splice(index,1);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr,{ expires: 7, path: '/' });

				if($.cookie("goods") == "[]"){
					// console.log($.cookie("goods"))
					$.cookie("goods", cookieStr,{ expires: -100, path: '/' });
					tab()
				}
				

			})
			$(".chec").click(function(){
				
				if($(this).is(':checked')){
					$(this).addClass("pitch_on")
				}else{
					$(this).removeClass("pitch_on")
				}
			
			})	
			
			
			
		}
	})


}








//=======================================================
//判断cookie是否为空，切换
function tab(){
	if($.cookie("goods")){
		$(".no").css("display","none");
		$(".cookieList").css("display","block");
		$("section").css("padding-top","none")
	}else{
		$("section").css("padding-top","70px")
		$(".no").css("display","block");
		$(".cookieList").css("display","none");
	}
}























