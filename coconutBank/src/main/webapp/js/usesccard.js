
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
			if(result == 1)
		}
	}); // ajax end
}