
$(function(){
	
	// 예금주 유효성검사
	$("#accounthost").keyup(function(){
		let name = $("#accounthost").val();
		let namej = /^[가-힣]{2,10}$/;
		if(namej.test(name)){
			$("#namecheck").html("사용가능한 이름입니다.");
		}else{
			$("#namecheck").html("한글 2~10자 사이만 입력가능합니다.");
		}
	}); // 예금주check end
	
	// 이메일 유효성검사
	
	
	
	
}); // 문서열리면 실행 end









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