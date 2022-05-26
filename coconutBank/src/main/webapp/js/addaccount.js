
function add(){
	let accountno = $("#accountno").val();
	let accounthost = $("#accounthost").val();
	let birth = $("#birth").val();
	let phone = $("#phone").val();
	let balance = $("#balance").val();
	let accountpw = $("#accountpw").val();
	
	$.ajax({
		url : "/jigmBank/account/addaccount",
		type : "POST",
		data : {"accountno" : accountno, 
			"accounthost" : accounthost,
			"birth" : birth,
			"phone" : phone,
			"balance" : balance,
			"accountpw" : accountpw},
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