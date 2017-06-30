$(function(){
 	
	function tabControl(obj, url){
		
	 	ajax({
	 		method:"get",
	 		url:url,
	 		data:null,
	 		success:function(data){
	 			var arr = JSON.parse(data);
	 			
	 			 var oA = $(obj).find("a");
	 			for(let i = 0; i < oA.length; i++){
	 				let oDl = document.createElement("dl");
	 				let aImg = document.createElement("img");
	 				aImg.src = arr.image;
	 				let oDt = document.createElement("dt");
	 				oDt.appendChild(aImg);
	 				oDl.appendChild(oDt);
	 				oDl.className = "clear";

	 				for(let j = 0; j < 6; j++){
	 					let oDd = document.createElement("dd");
	 					oDd.className = "aaa";
	 					let oImg = document.createElement("img");
	 					oImg.src = arr.data[i][j].image;
	 					oDd.appendChild(oImg);
	 					

	 					if(arr.data[i][j].abstract && arr.data[i][j].price && arr.data[i][j].original_cost){
	 						let oP = document.createElement("p");
		 					oP.innerHTML = arr.data[i][j].abstract;
		 					oP.className = "o_p";

		 					let oSpan = document.createElement("span");
		 					oSpan.innerHTML = arr.data[i][j].price;

		 					let oSpan2 = document.createElement("span");
		 					oSpan2.className = "price";
		 					oSpan2.innerHTML = arr.data[i][j].original_cost;

		 					oDd.appendChild(oP);
	 						oDd.appendChild(oSpan);
	 						oDd.appendChild(oSpan2);
	 					}else{

	 						let oP2 = document.createElement("p");
	 						oP2.innerHTML = arr.data[i][j].site;
	 						oP2.className = "site";
	 						oDd.appendChild(oP2);

	 						let oP3 = document.createElement("p");
	 						oP3.innerHTML = arr.data[i][j].purpose;
	 						oP3.className = "purpose";
	 						oDd.appendChild(oP3);

	 						let oDiv = document.createElement("div");
	 						oDiv.className = "evaluate";

	 						for(var k = 0; k < 5; k++){
	 							let oSpan4 = document.createElement("span");
	 							oSpan4.innerHTML = arr.data[i][j].quality;
	 							oDiv.appendChild(oSpan4);
	 						}

	 						let oB = document.createElement("b");
	 						oB.innerHTML = arr.data[i][j].evaluate;
	 						oDiv.appendChild(oB);
	 						oDd.appendChild(oDiv);

	 					}
	 					
	 					
	 					oDl.appendChild(oDd);

	 				}

	 				oA[i].appendChild(oDl);

	 			}

	 			hover_commodity();

	 			$(".aaa").find("img").css("opacity","0.9")


	 			oA.eq(0).find("dl").css("z-index","100")
	 			oA.hover(function(){
	 				oA.attr("class","").find("dl").css("z-index","1");
	 				$(this).attr("class","active_a").find("dl").css("z-index","10")


	 			}, function(){

	 			})





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

				$(".site").hover(function(){
		
					$(this).css("text-decoration","underline")
				}, function(){
					$(this).css("text-decoration","none")
				})




	 		}
	 	});




	 }

	 tabControl("#recommend", "json/tab.json")
	 tabControl("#maintain", "json/tab2.json")
	 tabControl("#store", "json/tab3.json")
})