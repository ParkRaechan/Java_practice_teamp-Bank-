var pwd1 = document.getElementById("security__password")
var pwd2 = document.getElementById("security__password__confirm")
var sctext = document.querySelectorAll(".security__text");
var errtext = document.getElementById("security__err__text");
pwd1.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(pwd1.value.length == 6){
			sctext[0].className = "security__text ";
			sctext[1].className += "active";
			errtext.innerHTML = " "		
		}else{
			errtext.innerHTML = "6자리를 모두 입력해주세요."
		}
	}else {
		if(pwd1.value != (/[^0-9]/)){
			pwd1.value = pwd1.value.replace(/[^0-9]/gi, '');
			errtext.innerHTML = "숫자를 입력해주세요."
		}
		
	}
});
pwd2.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(pwd2.value.length == 6){
			if(pwd1.value == pwd2.value){
				sctext[1].className = "security__text ";
				sctext[2].className += "active";
				errtext.innerHTML = " "		
			}else{
				pwd2.value = ""
				errtext.innerHTML = "비밀번호가 일치하지 않습니다"
			}
		}else{
			errtext.innerHTML = "6자리를 모두 입력해주세요."
		}
	}else {
		if(pwd2.value != (/[^0-9]/)){
			pwd2.value = pwd2.value.replace(/[^0-9]/gi, '');
			errtext.innerHTML = "숫자를 입력해주세요."
		}
		
	}
});