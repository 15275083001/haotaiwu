$(function(){

	var header = new Header();
	header.header_left();
	header.header_right();
	//生成侧边栏
	aside();
	//侧边栏显示隐藏
	conceal();
	//生成产品信息头部
	details_header();



	details_content();


	record();

	details_option();

	detailsCount();
	shopping_cart_cookie();
	sc_car();
	cookie_click()

	
});



//============================================================================================
//生成产品信息头部
function details_header(){
	ajax({
		method:"get",
		url:"json/details.json",
		data:null,
		success:function(data){
			var arr = JSON.parse(data);

			//头部信息

			
			let oA = document.createElement("a");
			oA.innerHTML = "首页";
			$(".heads").append(oA);
			let oSpan = document.createElement("span");
			oSpan.innerHTML = ">";
			$(".heads").append(oSpan);
			let oA2 = document.createElement("a");
			oA2.innerHTML = arr.site;
			$(".heads").append(oA2);
			let oSpan2 = document.createElement("span");
			oSpan2.innerHTML = ">";
			$(".heads").append(oSpan2);
			let oSpan3 = document.createElement("span");
			oSpan3.innerHTML = arr.title;
			$(".heads").append(oSpan3);
			
			$(".heads").find("a").attr("href","#").hover(function(){
				$(this).css("color","#ffc700");
			},function(){
				$(this).css("color","#333");
			});




			
			//左侧图片信息
			//
			
			let aDiv1 = document.createElement("div");
			aDiv1.className = "big";
			let area = document.createElement("div");
			area.className = "position_box"
			aDiv1.appendChild(area);

			let aImg = document.createElement("img");
			aImg.src = arr.img[0].src;
			aDiv1.appendChild(aImg);
			$(".sections_left").append(aDiv1);
			let aDiv2 = document.createElement("div");
			aDiv2.className = "small";
			for(let i = 0; i < arr.img.length; i++){
				let oImg = document.createElement("img");
				oImg.src = arr.img[i].src;
				aDiv2.appendChild(oImg);

			}

		
			$(".sections_left").append(aDiv2);
			let mDiv = document.createElement("div");
			mDiv.className = "b_box";
			let mmDiv = document.createElement("div");
			mmDiv.className = "b_box_all";
			let mImg = document.createElement("img");
			mImg.src = arr.img[0].src;
			mmDiv.appendChild(mImg);
			mDiv.appendChild(mmDiv);

			$(".sections_left").append(mDiv);

			$(".small").find("img").hover(function(){
				$(this).css("border","2px solid #f3a600");
				let src = $(this).attr("src");
				$(".big").find("img").attr("src", src);
				$(".b_box_all").find("img").attr("src", src);

			},function(){
				$(this).css("border","1px solid #e3e3e3");
			})

			magnify_img({box:$(".big"),area:$(".position_box"),magnify:$(".b_box"),"magnify_area":$(".b_box_all")});
			//右侧商品信息
			//

			//
			

			

			let aP = document.createElement("p");
			aP.innerHTML = arr.title;
			$(".right_top").append(aP);

			let aDiv3 = document.createElement("div");
			aDiv3.className = "parameter";
			for(let i = 0; i < arr.parameter.length; i++){
				let pp = document.createElement("p");
				let anSpan = document.createElement("span");
				anSpan.className = "color999"
				anSpan.innerHTML = arr.parameter[i].title;
				pp.appendChild(anSpan);
				let anSpan2 = document.createElement("span");
				anSpan2.innerHTML = arr.parameter[i].parameter;
				pp.appendChild(anSpan2);
				aDiv3.appendChild(pp);

			}
			$(".right_top").append(aDiv3);

			let aDiv4 = document.createElement("div");
			aDiv4.className = "cost";
			let costDiv1 = document.createElement("div");
			costDiv1.className = "costDiv1"
			let costSpan1 = document.createElement("span");
			costSpan1.innerHTML = "价格 ： ";
			costDiv1.appendChild(costSpan1);
			let costSpan2 = document.createElement("span");
			costSpan2.innerHTML = arr.cost;
			costDiv1.appendChild(costSpan2);
			let costP = document.createElement("p");
			costP.innerHTML = "促销";
			costDiv1.appendChild(costP);
			let costSpan3 = document.createElement("span");
			costSpan3.innerHTML = "市场 ： ";
			costDiv1.appendChild(costSpan3);
			let costSpan4 = document.createElement("span");
			costSpan4.innerHTML = arr.bazaar;
			costDiv1.appendChild(costSpan4);

			aDiv4.appendChild(costDiv1);


			let costDiv2 = document.createElement("div");
			costDiv2.className = "costDiv2"
			let bbdiv1 = document.createElement("div");
			let bbspan1 = document.createElement("span");
			bbspan1.innerHTML = "已售出";
			bbdiv1.appendChild(bbspan1);
			let bbspan2 = document.createElement("span");
			bbspan2.innerHTML = arr.sales;
			bbdiv1.appendChild(bbspan2);
			costDiv2.appendChild(bbdiv1);
			let bbdiv2 = document.createElement("div");
			let ccspan1 = document.createElement("span");
			ccspan1.innerHTML = "累计评论";
			bbdiv2.appendChild(ccspan1);
			let ccspan2 = document.createElement("span");
			ccspan2.innerHTML = arr.evaluate;
			bbdiv2.appendChild(ccspan2);
			costDiv2.appendChild(bbdiv2);
			let bbdiv3 = document.createElement("div");
			let ddspan1 = document.createElement("span");
			ddspan1.innerHTML = "购买送积分";
			bbdiv3.appendChild(ddspan1);
			let ddspan2 = document.createElement("span");
			ddspan2.innerHTML = arr.integral;
			bbdiv3.appendChild(ddspan2);
			costDiv2.appendChild(bbdiv3);
			aDiv4.appendChild(costDiv2);

			$(".right_top").append(aDiv4);

			
			//购物车
			
			let gSpan = document.createElement("span");
			gSpan.innerHTML = "服务支持 :  ";
			$(".tt").append(gSpan);

			let gdiv = document.createElement("div");
			let gdivspan = document.createElement("span");
			gdivspan.innerHTML = "真";
			gdiv.appendChild(gdivspan);
			let gdivspan2 = document.createElement('span');
			gdivspan2.innerHTML = "真实评价";
			gdiv.appendChild(gdivspan2);
			$(".tt").append(gdiv);

			let gdiv2 = document.createElement("div");
			let gdiv2span = document.createElement("span");
			gdiv2span.innerHTML = "免";
			gdiv2.appendChild(gdiv2span);
			let gdiv2span2 = document.createElement("span");
			gdiv2span2.innerHTML = "免费施工";
			gdiv2.appendChild(gdiv2span2);
			$(".tt").append(gdiv2);

			let gdiv3 = document.createElement("div");
			let gdiv3span = document.createElement("span");
			gdiv3span.innerHTML = "￥";
			gdiv3.appendChild(gdiv3span);
			let gdiv3span2 = document.createElement("span");
			gdiv3span2.innerHTML = "装完付款";
			gdiv3.appendChild(gdiv3span2);
			$(".tt").append(gdiv3);

		}
	})
}





//=========================================================================
//生成商品信息列表

function details_content(){
	ajax({
		method:"get",
		url:"json/details2.json",
		data:null,
		success:function(data){
			var arr = JSON.parse(data);
			arr = arr.data;
			let oDiv = document.createElement("div");
			oDiv.className = "image bbb";
			let oH3 = document.createElement("h3");
			oH3.innerHTML = arr[0].title;
			oDiv.appendChild(oH3);
			for(let i = 0; i < arr[0].img.length; i++){
				let oImg = document.createElement("img");
				oImg.src = arr[0].img[i];
				oDiv.appendChild(oImg);
			}

			$(".left_content").append(oDiv);

			let oDiv2 = document.createElement("div");
			oDiv2.className = "left_parameter bbb";
			let oH32 = document.createElement("h3")
			oH32.innerHTML = arr[1].title;
			oDiv2.appendChild(oH32);
			let oUl = document.createElement("ul");

			for(let j = 0; j < arr[1].parameter.length; j++){
				let oLi = document.createElement("li");
				let oSpan = document.createElement("span");
				oSpan.innerHTML = arr[1].parameter[j].title;
				let oSpan2 = document.createElement("span");
				oSpan2.innerHTML = arr[1].parameter[j].parameter;
				oLi.appendChild(oSpan);
				oLi.appendChild(oSpan2);
				oUl.appendChild(oLi);

			}

			oDiv2.appendChild(oUl);
			let oH4 = document.createElement("h4");
			oH4.innerHTML = "权利声明：";
			oDiv2.appendChild(oH4);
			let oP = document.createElement("p");
			oP.innerHTML = arr[1].statement[0];
			oDiv2.appendChild(oP);
			let oP2 = document.createElement("p");
			oP2.innerHTML = arr[1].statement[1];
			oDiv2.appendChild(oP2);
			$(".left_content").append(oDiv2);



			let oDiv3 = document.createElement("div");
			oDiv3.className = "left_parameter bbb";
			let oH33 = document.createElement("h3")
			oH33.innerHTML = arr[2].title;
			oDiv3.appendChild(oH33);
			let oUl1 = document.createElement("ul");

			for(let j = 0; j < arr[2].parameter.length; j++){
				let oLi = document.createElement("li");
				let oSpan = document.createElement("span");
				oSpan.innerHTML = arr[2].parameter[j].vehicle;
				let oSpan2 = document.createElement("span");
				oSpan2.innerHTML = arr[2].parameter[j].series;
				oLi.appendChild(oSpan);
				oLi.appendChild(oSpan2);
				oUl1.appendChild(oLi);

			}

			oDiv3.appendChild(oUl1);
			let oH41 = document.createElement("h4");
			oH41.innerHTML = "权利声明：";
			oDiv3.appendChild(oH41);
			let oP1 = document.createElement("p");
			oP1.innerHTML = arr[2].statement[0];
			oDiv3.appendChild(oP1);
			let oP3 = document.createElement("p");
			oP3.innerHTML = arr[2].statement[1];
			oDiv3.appendChild(oP3);
			$(".left_content").append(oDiv3);




			let oDiv4 = document.createElement("div");
			let oH34 = document.createElement("h3")
			oH34.innerHTML = arr[3].title;
			oDiv4.appendChild(oH34);
			oDiv4.className = "left_parameter bbb"
			oDiv4.style.height = "500px";
			$(".left_content").append(oDiv4);





			let oDiv5 = document.createElement("div");
			let oH35 = document.createElement("h3")
			oH35.innerHTML = arr[4].title;
			oDiv5.appendChild(oH35);
			oDiv5.className = "left_parameter bbb"
			oDiv5.style.height = "500px";
			$(".left_content").append(oDiv5);
		
		}
	})
}


//=======================================================================
//选项卡点击效果





function details_option(){

	var count = $(".left_bom").find("ul").find("li");
	count.find(".li_span").css("display","none");
	count.eq(0).css({"height":"41px","background":"#fff"}).find(".li_span").css("display","block");
	$(".bbb").css("display","none");
	$(".bbb").eq(0).css("display","block");

	for(let i = 0; i < count.length; i++){
		let abc = i;
		count.eq(i).click(function(){
			for(let j = 0; j < $(".bbb").length; j++){
				count.eq(j).css({"height":"40","background":"#f8f8f8"});
				count.eq(j).find(".li_span").css({"display":"none"});
				$(".bbb").css("display","none");
			}
			$(this).css({"height":"41px","background":"#fff"});
			$(this).find(".li_span").css({"display":"block"});
			$(".bbb").eq(abc).css("display","block");
		})
	}

	



}




//=======================================================================
//点击增加数量
function detailsCount(){
	let count = 1;
	
	$(".sum").click(function(){
		count++;
		$(".mm_count").html(count);
	})
	$(".subtract").click(function(){
		count--;
		if(count < 1){
			count = 1;
		}
		$(".mm_count").html(count);
	})
}











//=============================================================================
//右侧浏览记录


function record(){
	ajax({
		method:"get",
		url:"json/record.json",
		data:null,
		success:function(data){
			var arr = JSON.parse(data);
			let oH3 = document.createElement("h3");
			oH3.innerHTML = arr.title;
			$(".details_right").append(oH3);
			let oUl = document.createElement("ul");
			for(let i = 0; i < arr.data.length; i++){
				let oLi = document.createElement("li");
				let oImg = document.createElement("img");
				oImg.src = arr.data[i].img;
				oLi.appendChild(oImg);
				let oP = document.createElement("p");
				oP.innerHTML = arr.data[i].parameter;
				oLi.appendChild(oP);
				let oSpan = document.createElement("span");
				oSpan.innerHTML = arr.data[i].cost;
				oLi.appendChild(oSpan);
				oUl.appendChild(oLi);

			}
			$(".details_right").append(oUl);
			let div = document.createElement("div");

			let aImg = document.createElement("img");
			aImg.src = arr.img;
			div.appendChild(aImg);
			$(".details_right").append(div);
			$(".details_right").find("ul").find("li").find("p").css("cursor","pointer").hover(function(){
				$(this).css("color","#eba517");
			},function(){
				$(this).css("color","#333");
			})

		}
	})
}


//===========================================================================
//放大镜
//
//

function magnify_img(json){
	 /*magnify({box:$("#s_box"),area:$(".position_box"),magnify:$("#b_box"),"magnify_area":$("#b_box_all")});
		box:图片父框
		area:要放大的区域
		magnify:图片放大父框
		magnify_area：图片移动父框

	 */
	json.box.mouseover(function(){
	
		json.area.css("display","block");
		json.magnify.css("display","block");
	}).mouseout(function(){
		json.area.css("display","none");
		json.magnify.css("display","none");
	}).on("mousemove", function(ev){
		ev.stopPropagation();
		
		let left = ev.pageX - json.area.width()/2 - json.box.offset().left;
		if(left < 0){
			left = 0;
		}else if(left > json.box.width() - json.area.width()){
			left = json.box.width() - json.area.width();
		}
		
		json.area.css("left",left)
		
		let top = ev.pageY - json.area.height()/2 - json.box.offset().top;

		if(top < 0){
			top = 0;
		}else if(top > json.box.height() - json.area.height()){
			top = json.box.height() - json.area.height();
		}
		
		json.area.css("top",top)

		let proportionX = left / ( json.box.width() - json.area.width());
		let proportionY = top / ( json.box.height() - json.area.height());
		let Left = proportionX*(json.magnify.width() - json.magnify_area.width());
		let Top = proportionY*(json.magnify.height() - json.magnify_area.height())


		json.magnify_area.css({"left":Left,"top":Top})
	})
}





//==================================================================
//cookie缓存
function shopping_cart_cookie(){
	$(".shoppingCart").on('click', function(){
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
			//console.log($.cookie("goods"))
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

function sc_car(){
	var cookieStr = $.cookie("goods");
	if(cookieStr){
		var sc_arr = JSON.parse(cookieStr);
		var sc_num = 0; //累加
		for(var i in sc_arr){
			sc_num += Number(sc_arr[i].num);
		}

	}

	if(sc_num){
		$(".shopping").find("span").eq(1).html("(" + sc_num + ")");
		
	}else{
		$(".shopping").find("span").eq(1).html("(" + 0 + ")");
	}
	
}








































