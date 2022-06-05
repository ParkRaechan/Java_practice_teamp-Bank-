
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
				addsccard();
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
function secnoran(n){
	let ran = "";
	for(let i = 0; i<n; i++){
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
	let scbox = JSON.stringify(box);
	return scbox;
//	let jsondata = JSON.parse(scbox);
//	alert(scbox);
//	alert(jsondata[0]);
	
} // 보안박스난수생성 end

// 보안카드생성
function addsccard(){
	$("#sccardpw").css("display","block");
	let secno = secnoran(10); 	// 보안카드 일련번호 난수
	let scbox = boxran();		// 보안카드 박스 난수
	let accountno = $("#accountno").val();
	let sccardpw = $("#sccardpw").val();
	alert(secno);
	alert(scbox);
	
	$.ajax({
		url : "/jigmBank/account/addsccard",
		type : "POST",
		data : {"secno" : secno, "scbox" : scbox, "accountno" : accountno, "sccardpw" : sccardpw},
		success : function(result){
			if(result == 1){
				alert("보안카드생성이 완료되었습니다.");
				location.href="/jigmBank/main.jsp";
			}else{
				alert("보안카드생성실패(관리자에게문의)");
				location.href="/jigmBank/main.jsp";
			} // else end
		} // success end
	}); // ajax end
	
	
} // 보안카드 생성 end

