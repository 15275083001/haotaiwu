$(function(){

	var header =  new Header();

	header.header_left();
	header.header_right();
	//生成侧边栏
	aside();

	//侧边栏显示隐藏
	conceal();
	//点击查找类型
	click_find();
	//查找选择框
	findSection();
	//生成商品列表
	commodity();
	//生成左侧列表
	commodity_right();
	sc_car();
	cookie_click();


	$(".secrion_right").find(".aaa").hover(function(){
					
					$(this).css("box-shadow","5px,5px,5px,#999");
				},function(){
					$(this).css("box-shadow","none");
				})
				$(".right_m").find("li").on("click",function(){
					window.open("../details/index.html")
				})
})


//==============================================================================================
//点击查找类型
function click_find(){

	$(".find").find("h3").find("div").eq(0).css("border","none").css({"background":"#fff","color":"#333"}).find("b").css("display","block");
	$(".find").find("h3").find("div").eq(1).css({"border":"1px solid #e3e3e3","border-left":"0","background":"#f8f8f8","color":"#999"}).find("b").css("display","none");

	$(".find").find("h3").find("div").eq(0).click(function(){
		$(this).find("b").css("display","block");
		$(this).css("border","none").css({"background":"#fff","color":"#333"});
		$(".find").find("h3").find("div").eq(1).css({"border":"1px solid #e3e3e3","border-right":"0","background":"#f8f8f8","color":"#999"}).find("b").css("display","none");
	})
	$(".find").find("h3").find("div").eq(1).click(function(){
		$(this).find("b").css("display","block");
		$(this).css("border","none").css({"background":"#fff","color":"#333"});
		$(".find").find("h3").find("div").eq(0).css({"border":"1px solid #e3e3e3","border-left":"0","background":"#f8f8f8","color":"#999"}).find("b").css("display","none");
	})
}


//===============================================================================================
//查找选择框


	function findSection(){
		var findSection = $(".find").find("h3");
		ajax({
			method:"get",
			url:"json/chooseCars.json",
			data:null,
			success:function(data){
				var arr = JSON.parse(data);
				arr = arr.data;
				for(let i = 0; i < arr.length; i++){
					
					let oDiv = document.createElement("div");
					oDiv.className = "oSection"
					for(let j = 0; j < arr[i].length; j++){
						let oSelect = document.createElement("select");
						
						for(let k = 0; k < arr[i][j].length; k++){
							let oOptions = document.createElement("option");
							oOptions.innerHTML = arr[i][j][k];
							oSelect.appendChild(oOptions);
						}
						oDiv.appendChild(oSelect);
					}

					findSection.eq(i).append(oDiv);
				}
				let oP = document.createElement("p");
				let oSpan1 = document.createElement("span");
				oSpan1.innerHTML = "热门搜索： ";
				oP.appendChild(oSpan1);
				for(let i = 0; i < 13; i++){
					let oSpan = document.createElement("span");
					oSpan.innerHTML = "蓝鸟";
					oP.appendChild(oSpan);

				}

				$(".oSection").append(oP);
				
			}
		})
		

	}



//====================================================================================
//生成商品列表
	function commodity(){

		ajax({
			method:"get",
			url:"json/commodity.json",
			data:null,
			success:function(data){
				let arr = JSON.parse(data);
				arr = arr.data
				for(let i = 0; i < arr.length; i++){
					let oDiv = document.createElement("div");
					let oSpan = document.createElement("span");
					oSpan.innerHTML = arr[i].title;
					let oH3 = document.createElement("h3");
					oH3.appendChild(oSpan);
					oDiv.appendChild(oH3);
					let oUl = document.createElement("ul");
					for(let j = 0; j < arr[i].list.length; j++){
						let oLi = document.createElement("li");
						let oImg = document.createElement("img");
						oImg.src = arr[i].list[j].img;
						oLi.appendChild(oImg);
						let oP = document.createElement("p");
						oP.innerHTML = arr[i].list[j].describe;
						oP.className = "o_p";
						oLi.appendChild(oP);
						let aDiv = document.createElement("div");
						let odiv1 = document.createElement("div");
						let op1 = document.createElement("p");
						op1.innerHTML = arr[i].list[j].price;
						let op2 = document.createElement("p");
						op2.innerHTML = arr[i].list[j].original_cost;
						odiv1.appendChild(op1);
						odiv1.appendChild(op2);
						aDiv.appendChild(odiv1);
						let odiv2 = document.createElement("div");
						let ospan1 = document.createElement("span");
						ospan1.innerHTML = "立省￥";
						let ospan2 = document.createElement("span");
						ospan2.innerHTML = arr[i].list[j].save;
						odiv2.appendChild(ospan1);
						odiv2.appendChild(ospan2);

						aDiv.appendChild(odiv2);
						oLi.appendChild(aDiv);
						oLi.className = "aaa";
						oUl.appendChild(oLi);
					}
					oDiv.appendChild(oUl);
					$(".commodity").append(oDiv);
				}
				hover_commodity();
				$(".commodity").find("div").find("ul").on("click","li", function(){
					window.open("../details/index.html")
				})
			}
		})
		
	}



//=======================================================================
//生成右侧列表
//
	function commodity_right(){
		
		ajax({
			method:"get",
			url:"json/commodity_right.json",
			data:null,
			success:function(data){
				
				var arr = JSON.parse(data);
				arr = arr.data;
				let oDiv = document.createElement("div");
				oDiv.className = "right-top"
				let oH3 = document.createElement("h3");
				let oSpan = document.createElement("span");
				oSpan.innerHTML = arr[0].title;
				oH3.appendChild(oSpan);
				oDiv.appendChild(oH3);
				let oUl= document.createElement("ul");
				for(let i = 0; i < arr[0].list.length; i++){
					let oLi = document.createElement("li");
					let oImg = document.createElement("img");
					oImg.src = arr[0].list[i].img;
					oLi.appendChild(oImg);
					let oP = document.createElement("p");
					oP.className = "active";
					oP.innerHTML = arr[0].list[i].describe;
					oLi.appendChild(oP);
					let oP2 = document.createElement("p");
					oP2.innerHTML = arr[0].list[i].price;
					oLi.appendChild(oP2);
					oUl.appendChild(oLi);

				}
				oDiv.appendChild(oUl);

				$(".secrion_right").append(oDiv);
				hover_commodity();

				let aImg = document.createElement("img");
				aImg .src = "img/a2.jpg";
				$(".secrion_right").append(aImg);
				

				let aUl = document.createElement("ul");
				aUl.className = "right_m";
				let oLi = document.createElement("li");
				oLi.innerHTML = arr[1].title;
				aUl.appendChild(oLi);
				for(let i = 0; i < arr[1].list.length; i++){
					let aLi = document.createElement("li");
					aLi.className = "aaa";
					let oImg = document.createElement("img");
					oImg.src = arr[1].list[i].img;
					aLi.appendChild(oImg);
					let oP = document.createElement("p");
					oP.innerHTML = arr[1].list[i].describe;
					aLi.appendChild(oP);
					let oDiv = document.createElement("div");
					let oSpan = document.createElement("span");
					oSpan.innerHTML = arr[1].list[i].price;
					oDiv .appendChild(oSpan);
					let oSpan1 = document.createElement("span");
					oSpan1.innerHTML = arr[1].list[i].saleroom;
					oDiv.appendChild(oSpan1);
					aLi.appendChild(oDiv);
					aUl.appendChild(aLi);
				}
				$(".secrion_right").append(aUl);	
				$(".secrion_right").find(".aaa").hover(function(){
					
					$(this).css("box-shadow","5px,5px,5px,#999");
				},function(){
					$(this).css("box-shadow","none");
				})
				$(".right_m").find("li").on("click",function(){
					window.open("../details/index.html")
				})
				






			}
		})
	}


















































