



//===================================================================================

	//左侧导航栏
	function aside(){
		ajax({
			method : "get",
			url : "../json/serve.json",
			data : null,
			success : function(data){
				
				var arr = JSON.parse(data);
				//创建标题
				
				for(let i = 0; i < arr.length; i++){
					let oImg = document.createElement("img");
					oImg.src = arr[i][0].img;
					let oSpan = document.createElement("span");
					oSpan.innerHTML = arr[i][0].title;
					oSpan.className = "colors"
					let oSpan2 = document.createElement("span");
					oSpan2.innerHTML = "&gt;";
					let oBox = document.createElement("div");
					oBox.className = "box";
					let oDiv = document.createElement("div");
					oDiv.className = "aa"
					//创建选项菜单
					for(let j = 1; j < arr[i].length; j++){
						let oDiv1 = document.createElement("div");
						let oDiv2 = document.createElement("div");
						for(let k = 0; k < arr[i][j].content.length; k++){
							let oSpan3 = document.createElement("span");
							oSpan3.innerHTML = arr[i][j].content[k];
							oSpan3.style.display = "block";
							
							oSpan3.style.borderRight = "1px solid #f0f0f0";
							oDiv2.appendChild(oSpan3);

						}
						let oP1 = document.createElement("p");
						oP1.innerHTML = arr[i][j].title + " &gt;";
						oDiv1.appendChild(oP1);
						oDiv1.appendChild(oDiv2);
						oBox.appendChild(oDiv1);
					}

					oDiv.appendChild(oBox);
					oDiv.appendChild(oImg);
					oDiv.appendChild(oSpan);
					oDiv.appendChild(oSpan2);
					$(".aside").append(oDiv);
				}

				let oImg2 = document.createElement("img");
				oImg2.src = arr[3][0].images;
				$(".aside").find(".aa:last").find(".box").append(oImg2);

				$(".aside").find(".aa").css("cursor","pointer").css({"width":"202","border":"1px solid #333","border-bottom":"0","height":"65","padding-left":"26px","font":"14px/65px ''","color":"#fff"}).hover(function(){
						$(this).css("background","#fff").css("border-right","0px").css("width","203px")
						$(this).find(".colors").css("color","#333")
						$(this).find(".box").css("display","block")
					},function(){
						$(this).css("background","none").css("border-right","1px solid #323232").css("border-top","1px solid #323232").css("width","202px")
						$(this).find(".colors").css("color","#fff")
						$(this).find(".box").css("display","none")
					});

				$(".box").css({"background-color":"#fff","width":"700","height":"100%","position":"absolute","left":"229px","top":"-1px","padding":"0","color":"#333","font":"12px/14px ''","display":"none","border":"1px solid #323232", "border-left":"0px","z-index":"11"})
				
				$(".box").find("div").css("padding","11px 20px 0").attr("class","clear")
				
				$(".box").find("div").find("div").css("float","right").css("width","548").css("height","auto").css("padding","0").css("padding-bottom","1px").css("border-bottom","1px dashed #cdcdcd")
				
				$(".box").find("div").find("p").css({"float":"left"})
				
				$(".box").find("div").find("div").find("span").css("cursor","pointer").css({"padding-right":"8px","margin-right":"8px","float":"left","margin-bottom":"10px","height":"14px"}).attr("class","active").hover(function(){
	
					$(this).css("color", "#f3a600")
					},function(){
					$(this).css("color", "#333")
					})

				$(".aside").find(".aa:last").find(".box").css("width","auto").css("height","320").css("padding","0").css("padding","20px 20px")
				let oDiv = document.createElement("div");
				oDiv.className = "last"
				let oImg = document.createElement("img");
				oImg.className = "te"
				oImg.src = "img/13.jpg";
				oDiv.appendChild(oImg);
				$(".aside").append(oDiv);
				$(".aside").find(".last").css({"border":"1px solid #333","border-bottom":"none","padding":"15px 0 9px 7px"})
				$(".aside").find(".te").css({"width":"216px","height":"72px"})

			}

		})

	}
	

	
	
	
		//==========================================================================
		//======================================================================
	//右侧服务列表
	function asideright(){
		
		ajax({
			method : "get",
			url : "json/severRight.json",
			data : null,
			success : function(data){
		
				var arr = JSON.parse(data);
				for(let i = 0; i < 9; i++){
					let oLi = document.createElement("li");

					let oFont = document.createElement("p");
					oFont.className = "fonts iconfont " + arr.data[i].class_name;
					
					oLi.appendChild(oFont);
					let oFont2 = document.createElement("p");
					oFont2.className = "fonts2";
					oFont2.innerHTML = arr.data[i].headline;
					oLi.appendChild(oFont2);

					
					$(".category_list").append(oLi);
					

				}
				$(".category_list").css("width","231").css("border-right","1px solid #eaeaea").css("height","213");
				$(".category_list").find("li").css("width","76").css("height","62").css("border","1px solid #eaeaea").css("border-top","0").css("border-right","0").css("float","left").css("padding-top","8px").css("text-align","center").css("color","#333");

				$(".category_list").find("li").find(".fonts").css({"font-size":"27px"}); 
				$(".category_list").find("li").find(".fonts2").css({"font":"12px/24px ''"});


				//滑过变颜色

				$(".category_list").find("li").hover(function(){
					$(this).css({"background":"#333","color":"#fff"})
				},function(){
					$(this).css({"background":"#fff","color":"#333"})
				})
			}


		})
	}
	
	




//=====================================================================================
//-------=================================================================================
//选择车系查找列表

	function chooseCars(){
		
		ajax({
			method:"get",
			url:"json/chooseCars.json",
			data:null,
			success:function(data){
				var arr = JSON.parse(data);
				arr = arr.data;
				for(let i = 0; i < arr.length; i++){
					let oBtn = document.createElement("button");
					oBtn.innerHTML = "搜索";
					let oDiv = document.createElement("div");
					
					for(let j = 0; j < arr[i].length; j++){
						let oSelect = document.createElement("select");
						
						for(let k = 0; k < arr[i][j].length; k++){
							let oOptions = document.createElement("option");
							oOptions.innerHTML = arr[i][j][k];
							oSelect.appendChild(oOptions);
						}
						oDiv.appendChild(oSelect);
					}

					oDiv.append(oBtn);
					$(".active_span").eq(i).append(oDiv);
				}
				$(".active_span").eq(0).css({"color":"#333","border-bottom":"2px solid #333"});
				$(".active_span").eq(0).find("div").css("z-index","10");
				$(".active_span").eq(1).find("div").css("z-index","1");
				$(".active_span").click(function(){
					$(".active_span").css({"color":"#999","border":"0"});
					$(".active_span").find("div").css("z-index","1");
					$(this).css({"color":"#333","border-bottom":"2px solid #333"});
					$(this).find("div").css("z-index","10");
				})
			}
		})
	}


	

























































