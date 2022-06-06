
// 이체 버튼 클릭
function transfer(){
	let value = $("input:radio[name='transfer']:checked").val();
	if(value == 'sccard'){
		usesccard();
	}
	
	
}

// sccard 사용선택시
function usesccard(){
	let accountno = $("#accountno").val();
	
	$.ajax({
		url : "/jigmBank/account/getsccard",
		data : {"accountno" : accountno},
		success : function(result){
			alert(result);
			let obj = JSON.parse(result);
			alert(obj);
//			let secno = result.substring(result.indexOf('secno'), result.indexOf(','));
//			let seccon = result.substring(result.indexOf('seccon'), result.indexOf(', secpw'));
//			let secpw = result.substring(result.indexOf('secpw'), result.indexOf(', seactive'));
//			alert(secno);
//			alert(seccon);
//			alert(secpw);
		}
	}); // ajax end
}