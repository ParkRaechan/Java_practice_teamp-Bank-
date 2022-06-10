var pwd1 = document.getElementById("security__password")
var pwd2 = document.getElementById("security__password__confirm")
var sctext = document.querySelectorAll(".security__text");
var errtext = document.getElementById("security__err__text");
var scacnum = document.getElementById("security__accnum");
var scacpwd = document.getElementById("security__accpwd");
var scemail = document.getElementById("security__email");
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
let arr = undefined;
scacnum.addEventListener("keyup", function(key){
	
	if(key.keyCode == 13){
		if(scacnum.value.length == 12){
			
	//계좌번호 저장//
	let arr1 = 	scacnum.value;
	let arr2 = arr1.slice(undefined,3);
	let arr3 = arr1.slice(3,6);
	let arr4 = arr1.slice(6,undefined);
	arr = arr2[0]+arr2[1]+arr2[2]+"-"+arr3[0]+arr3[1]+arr3[2]+"-"+arr4[0]+arr4[1]+arr4[2]+arr4[3]+arr4[4]+arr4[5];

				sctext[2].className = "security__text ";
				sctext[3].className += "active";
				errtext.innerHTML = " ";
				scacpwd.focus();		
		}else{
			errtext.innerHTML = "12자리를 모두 입력해주세요."
		}
	}else {
		if(scacnum.value != (/[^0-9]/)){
			scacnum.value = scacnum.value.replace(/[^0-9]/gi, '');
			errtext.innerHTML = "숫자를 입력해주세요."
		}
		
	}
});
index = 0;
//계좌비밀번호
scacpwd.addEventListener("keyup", function(key){
	if(key.keyCode == 13){
		if(scacpwd.value.length == 4){
			$.ajax({
				url : "/jigmBank/account/accountcheck",
				type : "POST",
				data : {"accountno" : arr, "accountpw" : scacpwd.value },
				success : function(result){
					if(result == 1){
						alert("해당계좌확인");
						sctext[3].className = "security__text ";
						sctext[4].className += "active";
						errtext.innerHTML = " "
					}else{ 
						alert("비밀번호불일치"+(index+1)+"회/3회//////비밀번호를 맞게 입력하였는데 이 메세지창이 뜬다면 잠금된 계좌이므로 가까운 지금은행으로가셔서 신분증과 휴대전화를 지참한 대면인증을 해주시길 바랍니다. ");
						index++;
						if(index >= 3){
							$.ajax({
								url : "/jigmBank/account/accountactive",
								data : {"accountno" : arr},
								success : function(result){
									if(result == 1){
										alert("비밀번호입력횟수제한-해당계좌잠금(관리자문의)");
										accrock();
										window.location.href='main.jsp'
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
  
scemail.addEventListener("keyup", function(key){
	let email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
	console.sc
	if(key.keyCode == 13){
		if(email_format.test(scemail.value)){
			sctext[4].className = "security__text ";
			sctext[5].className += "active";
			errtext.innerHTML = " "		
		}else{
			errtext.innerHTML = "잘못된 이메일 형식입니다."
		}
	}
});






// 보안카드 일련번호 난수생성
function secnoran(){
	let ran = "";
	for(let i = 0; i<10; i++){
		ran += Math.floor(Math.random()*10)
	} // for end
	return ran;
} // 일련번호난수생성 end

// 보안카드 보안박스 난수생성
function boxran(){
	let box = [];
	for(let j = 0; j<30; j++){
		box[j] = "";
		for(let i = 0; i<4; i++){
			box[j] += Math.floor(Math.random()*10)
		} // for end
	} // for end
	return box.toString();
	
} // 보안박스난수생성 end

// 보안카드생성
function addsccard(){
	let secno = secnoran();  	// 보안카드 일련번호 난수
	let scbox = boxran();		// 보안카드 박스 난수
	alert("계좌생성시보안카드일련번호 : "+secno);
	alert("계좌생성시보안카드번호 : "+scbox);
	$.ajax({
		url : "/jigmBank/securitycard/addsccard",
		type : "POST",
		data : {"secno" : secno, "scbox" : scbox, "accountno" : arr, "sccardpw" : scacpwd.value, "scemail" : scemail.value},
		success : function(result){
			if(result == 1){
				alert("보안카드일련번호 중복");
				// 보안카드번호 중복시 다시 난수생성 받아서 처리해야함
			}else if(result == 2){
				alert("보안카드생성완료");
				location.href="/jigmBank/main.jsp";
			}else if(result == 3){
				alert("보안카드이미존재합니다.");
			}else{
				alert("보안카드생성실패(관리자에게문의)");
				location.href="/jigmBank/main.jsp";
			} // else end
		} // success end
	}); // ajax end
	
} // 보안카드 생성 end

//////계좌잠금
function accrock(){
		$.ajax({
		url : "/jigmBank/accrock" ,
		data : { "accnumr" : accnumr },
		type : "POST",
		success : function( result ){
			if(result==1){
				alert("계좌잠금"+accnumr);
			}else{
				alert("계좌잠금 실패!");
			}
		}
	});
}