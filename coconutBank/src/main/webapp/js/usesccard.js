
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

	// 1. 사용자 한테 입력받을 보안카드 위치 
	// 2. 난수 생성 1~30까지 중복없는 난수 2개 생성 
	//	예) 05 : 뒷자리 2개        27: 앞자리 2개 
	// 3. 사용자에게 입력받기.
	// 4. 입력가지고 -> DB에서 동일여부 체크
	
	
	$.ajax({
		url : "/jigmBank/account/getsccard",
		data : {"accountno" : accountno},
		success : function(result){
			alert(result);
			let obj = JSON.parse(result);
			alert(obj[0]);
//			let secno = result.substring(result.indexOf('secno'), result.indexOf(','));
//			let seccon = result.substring(result.indexOf('seccon'), result.indexOf(', secpw'));
//			let secpw = result.substring(result.indexOf('secpw'), result.indexOf(', seactive'));
//			alert(secno);
//			alert(seccon);
//			alert(secpw);
		}
	}); // ajax end
}

