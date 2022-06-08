var pwd1 = document.getElementById("security__password")
var pwd2 = document.getElementById("security__password__confirm")
var sctext = document.querySelectorAll(".security__text");
var errtext = document.getElementById("security__err__text");
var scacnum = document.getElementById("security__accnum");
var scacpwd = document.getElementById("security__accpwd");
pwd1.focus();
//비밀번호 1

pwd1.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(pwd1.value.length == 6){
			sctext[0].className = "security__text ";
			sctext[1].className += "active";
			errtext.innerHTML = " "	
			pwd2.focus();	
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

//비밀번호 2

pwd2.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(pwd2.value.length == 6){
			if(pwd1.value == pwd2.value){
				sctext[1].className = "security__text ";
				sctext[2].className += "active";
				errtext.innerHTML = " "	
				scacnum.focus();	
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

//계좌번호 

scacnum.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(scacnum.value.length == 14){
				sctext[2].className = "security__text ";
				sctext[3].className += "active";
				errtext.innerHTML = " ";
				scacpwd.focus();		
		}else{
			errtext.innerHTML = "14자리를 모두 입력해주세요."
		}
	}else {
		if(scacnum.value != (/[^0-9]/)){
			scacnum.value = scacnum.value.replace(/[^0-9]/gi, '');
			errtext.innerHTML = "숫자를 입력해주세요."
		}
		
	}
});

//계좌비밀번호
scacpwd.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(scacpwd.value.length == 4){
			console.log(scacpwd);
			console.log(scacpwd.value);
			console.log(scacnum.value);
			$.ajax({
				url : "/jigmBank/account/accountcheck",
				type : "POST",
				data : {"accountno" : scacnum.value, "accountpw" : scacpwd.value },
				success : function(result){
					if(result == 1){
						alert("해당계좌확인");
						sctext[3].className = "security__text ";
						sctext[4].className += "active";
						errtext.innerHTML = " "
					}else{ 
						alert("비밀번호불일치"+(index+1)+"회/3회");
						index++;
						if(index >= 3){
							$.ajax({
								url : "/jigmBank/account/accountactive",
								data : {"accountno" : scacnum.value},
								success : function(result){
									if(result == 1){
										alert("비밀번호입력횟수제한-해당계좌잠금(관리자문의)");
									} // end
								} // success end
							}); // ajax end
						} // if end
					} // else end
				} // success end
			});		
		}else{
			errtext.innerHTML = "4자리를 모두 입력해주세요."
		}
	}else {
		if(scacpwd.value != (/[^0-9]/)){
			scacpwd.value = scacpwd.value.replace(/[^0-9]/gi, '');
			errtext.innerHTML = "숫자를 입력해주세요."
		}
		
	}
});

