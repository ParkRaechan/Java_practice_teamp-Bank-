
// 이체 버튼 클릭
function transfer(){
	let value = $("input:radio[name='transfer']:checked").val();
	if(value == 'sccard'){
		usesccard();
	}
	
	
}

// 사용자에게 입력받은 보안카드 난수생성
function ran(){
	let random = [];
	for(let i = 0; i<2; i++){
		ranno = Math.floor(Math.random()*31);
		if(random.indexOf(ranno) == -1){
			random.push(ranno);
		} // if end
	}
	alert(random);
	let maxn = Math.max.apply(null, random);
	alert(maxn);
}

// sccard 사용선택시
function usesccard(){
	let accountno = $("#accountno").val();
	let box1 = Math.floor(Math.random()*31);
	let box2 = Math.floor(Math.random()*31);
	alert(box1);
	alert(box2);

	let html = "";
	
	// 1. 사용자 한테 입력받을 보안카드 위치 
	// 2. 난수 생성 1~30까지 중복없는 난수 2개 생성 
	//	예) 05 : 뒷자리 2개        27: 앞자리 2개 
	// 3. 사용자에게 입력받기.
	// 4. 입력가지고 -> DB에서 동일여부 체크
	
/*	
	$.ajax({
		url : "/jigmBank/account/getsccard",
		data : {"accountno" : accountno},
		success : function(result){
		}
	}); // ajax end
*/
}

