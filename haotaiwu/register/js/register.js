$(function(){

	var header = new Header();
	header.header_left();
	header.header_right();
	
	verify();
	login();
	
 	
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
//判断注册条件
function login(){
	


	var subing = /^1[3|4|5|7|8][0-9]{9}$/;
	var state = false;
	$("#exampleInputName2").blur(function(){
		let abc = $(this).val();
		if(!subing.test(abc)){
			$(".number").html("请输入正确的手机号码").css("display","block");
			state = false;
		}else{
			$(".number").css("display","none");
			state = true;
		}
	})
	//判断验证码是否输入正确
	$("#img_verify").blur(function(){
		if($("#img_verify").val() != $(".verify").html()){
			$(".errorText").html("请输入正确的验证码").css("display","block");
			state = false;
		}else{
			$(".errorText").css("display","none");
			state = true;
		}
	})

	var aaa = /^[a-zA-Z0-9]{6,21}$/;

	$("#password").blur(function(){
		let abc = $(this).val();
		if(!aaa.test(abc)){
			$(".password").html("密码为至少6-20位数字、字母").css("display","block");
			state = false;
		}else{
			$(".password").css("display","none");
			state = true;
		}
	})


	$("#password2").blur(function(){
		
		if($("#password2").val() != $("#password2").val() || !$("#password2").val()){
			$(".password2").html("两次密码输入不一致").css("display","block");
			state = false;
		}else{
			$(".password2").css("display","none");
			state = true;
		}
	})


	$("#btn").click(function(){
		if(state){
			repetitionOfName();
		}
	})

	
}





//================================================
//判断是否重名
function repetitionOfName(){
	
	
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
			if($("#exampleInputName2").val() != acc[i][0]){
				alert("注册成功");
				
				$_cookie($("#exampleInputName2").val(), $("#password").val(), {expires:7, path: '/' })
			}else{
				$(".number").html("该用户名已被注册").css("display","block");
				alert("该用户名已被注册");
			}
		}
	}else{
		alert("注册成功");
				
				$_cookie($("#exampleInputName2").val(), $("#password").val(), {expires:7, path: '/' })
	}
}















