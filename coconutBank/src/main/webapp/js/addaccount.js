
// 예금주, 생년월일, 전화번호 유효성확인 체크
let pass = [false, false, false]

$(function(){
	
	// 예금주 유효성검사
	$("#accounthost").keyup(function(){
		let name = $("#accounthost").val();
		let namej = /^[가-힣]{2,10}$/;
		if(namej.test(name)){
			$("#namecheck").html(""); pass[0] = true;
		}else{
			$("#namecheck").html("한글 2~10자 사이만 입력가능합니다."); pass[0] = false;
		} // else end
	}); // 예금주check end
	
	// 생년월일 유효성검사
	$("#birth").change(function(){
		let birth = $("#birth").val();
		let birthj = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
		if(birthj.test(birth)){
			$("#birthcheck").html("");pass[1] = true;
		}else{
			$("#birthcheck").html("올바른 생년월일이 아닙니다."); pass[1] = false;
		} // else end
	}); // 생년월일check end
	
	// 전화번호 유효성검사
	$("#phone").keyup(function(){
		let phone = $("#phone").val();
		let phonej = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
		if(phonej.test(phone)){
			$("#phonecheck").html("");pass[2] = true;
		}else{
			$("#phonecheck").html("올바른 휴대폰번호 형식이 아닙니다."); pass[2] = false;
		} // else end
	}); // 전화번호check end
	
	
	$("#balance").keyup(function(){
	
	});
	
}); // 문서열리면 실행 end



// 예금주, 생년월일, 전화번호 작성완료
function next(){
	let check = true;
	for(let i = 0; i<pass.length; i++){
		if(pass[i]==false) check = false;
	} // for end
	if(check){
		$("#addcount").css("display", "block");
		let accountno = "112-"+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+"-"+
					Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+
					Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
		alert(accountno);
		$.ajax({
			url : "/jigmBank/account/accountnocheck",
			data : {"accountno" : accountno},
			success : function(result){
				if(result == 1){
					// 계좌번호 중복시 다시 난수생성받아서 처리해야함
				}else{
					$("#accountno").html(accountno);
				} // else end
			} // success end
		}); // ajax end
	}else{
		alert("필수입력사항이 입력되지 않았습니다.");
	}
} // 인적사항입력 end


function input(obj){
	obj = String(obj.value);
	obj.to
}

// 예금액 천단위 쉼표
function inputNumberFormat(obj) {
     obj.value = comma(uncomma(obj.value));
}
function comma(str) {
     str = String(str);
     return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
function uncomma(str) {
     str = String(str);
     return str.replace(/[^\d]+/g, '');
}








function add(){
	let accounthost = $("#accounthost").val();
	let birth = $("#birth").val();
	let phone = $("#phone").val();
	
	$.ajax({
		url : "/jigmBank/account/addaccount",
		type : "POST",
		data : {"accounthost" : accounthost,
			"birth" : birth,
			"phone" : phone},
		success : function(result){
			if(result == 1){
				alert("계좌생성이 완료되었습니다.");
				location.href="/jigmBank/main.jsp";
			}else{
				alert("계좌생성실패(관리자에게문의)")
				location.href="/jigmBank/main.jsp";
			} // else end
		} // success end
	}); // ajax end
	
} // 계좌등록 end