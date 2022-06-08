
// 이체 버튼 클릭
function selectway(){
	let value = $('input[name=way]:checked').val();
	if(value == 'sccard'){
		usesccard();
	} // if end
	
} // 이체 end


// 사용자에게 입력받은 보안카드 난수생성
function ran(){
	let random = [];
	for(let i = 0; i<2; i++){
		ranno = Math.floor((Math.random()*30)+1);
		if(random.indexOf(ranno) == -1){
			random.push(ranno);
		} // if end
	} // for end
	return random;
//	let maxn = Math.max.apply(null, random);
//	alert(maxn);
} // 보안박스 난수 end

let maxn = "";
let minn = "";
// sccard 사용선택시
function usesccard(){
	$("#sccard").css("display", "block");
	// 보안카드 난수번호
	let random = ran();
	maxn = Math.max.apply(null, random); 	// 큰값
	minn = Math.min.apply(null, random);	// 작은값

	// 첫번째 보안카드 랜덤
	$("#ranbox1").html(
		'<span>['+maxn+'] 앞의 두자리</span>'	
	);
	// 두번째 보안카드 랜덤
	$("#ranbox2").html(
		'<span>['+minn+'] 뒤의 두자리</span>'	
	);
	// 1. 사용자 한테 입력받을 보안카드 위치 
	// 2. 난수 생성 1~30까지 중복없는 난수 2개 생성 
	//	예) 05 : 뒷자리 2개        27: 앞자리 2개 
	// 3. 사용자에게 입력받기.
	// 4. 입력가지고 -> DB에서 동일여부 체크
}

let index = 0;
function transfer(){
	let accountno = $("#accountno").val();
	let boxno1 = $("#boxno1").val();
	let boxno2 = $("#boxno2").val();

	$.ajax({
		url : "/jigmBank/securitycard/usesccard",
		type : "POST",
		data : {"accountno" : accountno, "box1" : maxn, "box2" : minn, "boxno1" : boxno1, "boxno2" : boxno2 },
		success : function(result){
			if(result == 1){
				alert("확인완료");
			}else{ // 보안박스 번호 불일치
				alert("번호 불일치"+(index+1)+"회/3회");
				index++;
				if(index >= 3){
					$.ajax({
						url : "/jigmBank/securitycard/sccardactive",
						data : {"accountno" : accountno},
						success : function(result){
							if(result == 1){
								alert("입력횟수제한-해당보안카드잠금(관리자문의)");
								location.href="/jigmBank/main.jsp"
							}
						} // success end
					}); // ajax end
				} // if end
			} // else end
		} // success end
	}); // ajax end
}

