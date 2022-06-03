
$(function(){ // 문서가 열리면 실행되는 메소드
	let html = "";
	let pwcheck = true;
	for(let i = 0; i<3; i++){
		html = 
		'<div class="col-md-4 " >'+
			'<span> 계좌비번 </span>'+
		'</div>'+
		'<div class="col-md-5">'+
			'<input id="accountpw" class="form-control" type="password" placeholder="계좌비밀번호 입력" maxlength="4">'+
		'</div>';
	}
	$("#acpw").html(html);
});



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
			}else{ 
				alert("비밀번호불일치");
				index++;
				if(index > 3){
					$.ajax({
						url : "/jigmBank/account/accountactive",
						type : "POST",
						data : {"accountno" : accountno, "accountpw" : accountpw },
					});
				}
			} // else end
		} // success end
	}); // ajax end
}

