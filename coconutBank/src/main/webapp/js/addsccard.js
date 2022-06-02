
// 계좌비밀번호 일치확인
function accountcheck(){
	alert("확인");
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
			}else{ 
				alert("비밀번호불일치");
			}
		} // success end
	}); // ajax end
}