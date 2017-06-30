class Header{
	constructor(){
		this.header = $("header").find(".margin");
		this.header.css("height", "100%")
	}


	header_left(){

		//创建左边节点
		let oDiv = document.createElement("div");
		oDiv.className = "header_left";
		this.header.append(oDiv);
		
		let oP1 = document.createElement("p");
		oDiv.appendChild(oP1);
		oP1.className = "location";
		let oSpan = document.createElement("span");
		oSpan.innerHTML = "广州市";
		oP1.appendChild(oSpan);
		let oImg = document.createElement("img");
		oImg.src = "../index/img/2.gif";
		oP1.appendChild(oImg);
		
		let oSpan1 = document.createElement("span");
		oSpan1.innerHTML = "|"
		$(".header_left").append(oSpan1);

		$(".header_left").find("span").eq(1)
		.css("height", "12")
		.css("color", "#ddd")
		.css("float","left");

		let oP2 = document.createElement("p");
		oDiv.appendChild(oP2);
		oP2.className = "cellphone";
		$(".cellphone").css({"width":"90", "height":"100%"})

		let oSpan2 = document.createElement("span");
		oSpan2.innerHTML = "下载手机版";
		$(".cellphone").append(oSpan2);

		let oImg1 = document.createElement("img");
		oImg1.src = "../index/img/2.gif"
		oP2.appendChild(oImg1);
		

		let oSpan3 = document.createElement("span");
		oSpan3.innerHTML = "|"
		$(".header_left").append(oSpan3);

		$(".header_left").find("span").eq(3)
		.css("height", "12")
		.css("color", "#ddd")
		.css("float","left");

		let oP3 = document.createElement("p");
		oDiv.appendChild(oP3);
		oP3.className = "WAP";

		let oA = document.createElement("a");
		oA.innerHTML = "手机访问";
		oP3.appendChild(oA);
		$(".WAP").append(oA);
		
		$(".WAP").find("a")
		.attr("href", "#")
		.addClass("active");

		var arr = [{
	title:"广东省",
	city:[
			"广州市",
			"深圳市",
			"东莞市",
			"佛山市",
			"中山市",
			"惠州市",
			"珠海市",
			"江门市",
			"肇庆市",
			"韶关市",
			"河源市",
			"梅州市",
			"清远市",
			"汕头市",
			"潮州市",
			"汕尾市",
			"揭阳市",
			"阳江市",
			"湛江市",
			"茂名市",
			"云浮市"
			]
},{
	title:"四川省",
	city:[
			"成都市",
			"攀枝花市",
			"德阳市",
			"绵阳市",
			"乐山市",
			"雅安市",
			"眉山市",
			"遂宁市",
			"南充市",
			"达州市",
			"资阳市",
			"巴中市",
			"梁山州",
			"广元市",
			"泸州市",
			"内江市",
			"宜宾市",
			"自贡市",
			"广安市"
			]
},{
	title:"北京",
	city:["北京市"]
},{
	title:"重庆",
	city:["重庆市"]
},{
	title:"天津",
	city:["天津市"]
},{
	title:"上海",
	city:["上海市"]
}]

		//创建城市列表
		let oCity = document.createElement("div");
		oCity.className = "city";
		oP1.appendChild(oCity);
		$(".city").css({"width": "530", "height": "346px", "position": "absolute", "left":"-1px","top": "31px","background-color":"#fff","line-height":"33px","border":" 1px solid #ddd", "border-top":"0px","display":"none","z-index":"100"});

		for(let i = 0; i < arr.length; i++){
			let oDiv1 = document.createElement("div");
			oDiv1.className = "clear";
			oDiv1.style.height = "auto";
			$(".city").append(oDiv1);
			let oP = document.createElement("p");
			oP.innerHTML = arr[i].title;
			oDiv1.appendChild(oP);
			let oDiv = document.createElement("div");
			oDiv.style.width = "420px";
			oDiv.style.height = "auto";
			oDiv.style.float = "right";
			oDiv.style.marginRight = "15px";
			oDiv.style.borderBottom = "1px dashed #ddd";
			oDiv1.appendChild(oDiv);
			for(let j = 0; j < arr[i].city.length; j++){
				let oA = document.createElement("a");
				oA.innerHTML = arr[i].city[j];
				oA.style.margin = "0 10px"
				oA.style.float = "left"
				oA.href = "#";
				oA.className = "active";

				oDiv.appendChild(oA);
			}
		}
		$(".city").find("div").find("p").css("height", "100%").css("width","47").css("float","left").css("margin-left","29px");


		$(".location").css("background","url('../index/img/1.gif') no-repeat 11px 8px")


		$(".location").hover(function(){
			$(this).css("border","1px solid #ddd").css("height","31px").css("border-top","0px").css("border-bottom","0px").css("background","url('../index/img/1.gif') no-repeat 11px 8px").css("background-color","#fff").css("padding-left","28px");
			$(".city").css("display","block");
		}, function(){
			$(this).css("border","none").css("height","30px").css("padding-left","29px").css("background","url('../index/img/1.gif') no-repeat 12px 8px");
			$(".city").css("display","none");
		})




	}


	//创建头部右面
	

	header_right(){
		let oDiv = document.createElement("div");
		oDiv.className = "header_right";
		this.header.append(oDiv);
		this.header.append(oDiv)
		
		$(".header_right").html("<a href='../login/login.html' class='login'>你好，请登录</a><a href='../register/register.html' class='login'>免费注册</a><span>|</span><a>我的订单</a><span>|</span><a>收藏夹</a><span>|</span><a>积分收藏</a>");
		
		$(".header_right").find("a").css({"margin-left":"9px", "margin-right":"9px"}).css("color", "#333");;
		$(".header_right").find("a").not(".login").attr("class","active333").attr("href", "#");
		$(".header_right").find("a:last").css("margin-right","0px");
		$(".header_right").find("span").css("color", "#ddd");
		$(".header_right").find("a").eq(0).css("color","#f3a600").attr("class","").attr("class","te")
		$(".header_right").find(".active333").hover(function(){
			$(this).css("color", "#f3a600");
		},function(){
			$(this).css("color", "#333");

		})

	}

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






function cookie_click(){
	$(".shopping_cart").click(function(){
		window.open("../indent/index.html")
	})
	
}

















