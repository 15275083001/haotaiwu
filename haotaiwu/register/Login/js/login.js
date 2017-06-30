$(function(){

	var header = new Header();
	header.header_left();
	header.header_right();
	verify();
	login();
	alert(document.cookie);

 	
})
	
//==============================================================================
//验证码
function verify(){
	var res = createCode();
    $(".verify").html(res);
	function randomInt(){
        // 48--122  [48,123)
        while(true){
            var int = Math.floor(Math.random()*(123-48) + 48);
            if((48 <= int && int <= 57) || (65 <= int && int <= 90) || (97 <= int && int <= 122)){
                return int;
            }
        }
    }

	 function createCode(){
        // 大写字母  小写字母  数字
        //  65-90     97-122   48-57

        // 48--122
        var result = "";
        for(var i = 0; i < 4; i++){
            var code = randomInt();
            result += String.fromCharCode(code);
        }

        return result;
    }

   
    $(".refresh").click(function(){
    	 var res = createCode();
   		 $(".verify").html(res);
    })
}













//===================================================================================
//判断登陆条件
function login(){
	


	var subing = /^1[3|4|5|7|8][0-9]{9}$/;
	var state = false;
	$("#exampleInputName2").blur(function(){
		let abc = $(this).val();
		if(!subing.test(abc)){
			$(".errorText").html("请输入正确的手机号码").css("color","red");
			state = false;
		}else{
			$(".errorText").html("用户名输入正确").css("color","green");
			state = true;
		}
	})
	//判断验证码是否输入正确
	$("#verify").blur(function(){
		if($("#verify").val() != $(".verify").html()){
			$(".errorText").html("请输入正确的验证码").css("color","red");
			state = false;
		}else{
			$(".errorText").html("验证码输入正确").css("color","green");
			state = true;
		}
	})

	$("#btn").click(function(){
		
			repetitionOfName();
			alert(document.cookie)
		
	})

	
}





//================================================
//判断是否有该用户
function repetitionOfName(){
	alert(document.cookie.length);
	if(document.cookie.length){
		var str = document.cookie;
		var arr = str.split(";");
		var acc = [];
		for(let i = 0; i < arr.length; i++){
			let add = arr[i].split("=");
			acc.push(add);
			alert(add);
		}
		alert(acc);
		for(let i = 0; i < acc.length; i++){
			if($("#exampleInputName2").val() == acc[i][0]){
				if($("#password").val() == acc[i][1]){
					alert("登陆成功");
				}else{
					alert("密码错误");
				}
				
			}else{
				alert(该用户不存在);
			}
		}
	}else{
		//alert("该用户不存在");
				
	}
}
















