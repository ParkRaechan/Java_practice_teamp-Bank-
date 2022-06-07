
var index=0;
// 계좌비밀번호 일치확인
function accountcheck(){
	let accountno = $("#accountno").val();
	let accountpw = $("#accountpw").val();
	alert(accountpw);
	$.ajax({
		url : "/jigmBank/account/accountcheck",
		type : "POST",
		data : {"accountno" : accountno, "accountpw" : accountpw },
		success : function(result){
			if(result == 1){
				alert("해당계좌확인");
				$("#sccardpwview").css("display","block");
			}else{ 
				alert("비밀번호불일치"+(index+1)+"회/3회");
				index++;
				if(index >= 3){
					$.ajax({
						url : "/jigmBank/account/accountactive",
						data : {"accountno" : accountno},
						success : function(result){
							if(result == 1){
								alert("비밀번호입력횟수제한-해당계좌잠금(관리자문의)");
								$("#accountno").html("");
							} // end
						} // success end
					}); // ajax end
				} // if end
			} // else end
		} // success end
	}); // ajax end
} // 계좌비밀번호 일치check end

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

/*
// 보안카드 일련번호 중복체크
function secnocheck(ran){
	$.ajax({
		url : "/jigmBank/account/secnocheck",
		data : {"secno" : ran},
		success : function(result){
			if(result == 1){
				// 보안카드번호 중복시 다시 난수생성받아서 처리해야함
			}else{
				alert("보안카드 일련번호 생성!");
				return result;
			} // else end
		} // success end
	}); // ajax end
}
*/

// 보안카드생성
function addsccard(){
	let secno = secnoran();  	// 보안카드 일련번호 난수
	let scbox = boxran();		// 보안카드 박스 난수
	let accountno = $("#accountno").val();
	let sccardpw = $("#sccardpw").val();
	alert("계좌생성시보안카드일련번호 : "+secno);
	alert("계좌생성시보안카드번호 : "+scbox);
	$.ajax({
		url : "/jigmBank/account/addsccard",
		type : "POST",
		data : {"secno" : secno, "scbox" : scbox, "accountno" : accountno, "sccardpw" : sccardpw},
		success : function(result){
			if(result == 1){
				alert("보안카드일련번호 중복");
				// 보안카드번호 중복시 다시 난수생성 받아서 처리해야함
			}else if(result == 2){
				alert("보안카드생성완료");
				location.href="/jigmBank/main.jsp";
			}else{
				alert("보안카드생성실패(관리자에게문의)");
				location.href="/jigmBank/main.jsp";
			} // else end
		} // success end
	}); // ajax end
	
} // 보안카드 생성 end