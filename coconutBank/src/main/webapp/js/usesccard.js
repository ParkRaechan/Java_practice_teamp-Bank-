
$(function(){
	
// 계좌번호, 이체액 입력 - 유효성검사
let pass2 = [false,false,false];

	// 보내는 계좌 유효성검사
	$("#achostno").keyup( function(){  // 비밀번호 입력할때마다
		let achostno = $("#achostno").val();  
		let validation = /^[0-9]{14}$/; // 정규표현식

		if( validation.test( achostno ) ){ // 정규표현식 같으면1
			$("#acccheckspan").html("입력조건달성"); pass2[0] = true;
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("'-'를 포함한 14자리 숫자를 입력해주세요."); pass2[0] = false;
		}
	}); 
	
	// 받는 계좌 유효성검사
	$("#acguestno").keyup( function(){  // 비밀번호 입력할때마다
		let acguestno = $("#acguestno").val();  
		let validation = /^[0-9]{14}$/; // 정규표현식
		
		if( validation.test( acguestno ) ){ // 정규표현식 같으면1
			$("#acccheckspan").html("입력조건달성"); pass2[1] = true;
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("'-'를 포함한 14자리 숫자를 입력해주세요."); pass2[1] = false;
		}
	}); 
	
	// 이체액 유효성검사
	$("#trfamount").keyup( function(){  // 비밀번호 입력할때마다
		let trfamount = $("#trfamount").val();  
		let validation2 = /^[0-9]{1,17}$/;
		
		if( validation2.test( trfamount ) ){ // 정규표현식 같으면1
			$("#acccheckspan").html("입력조건달성"); pass2[2] = true;
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("보내실 금액을 입력해주십시오."); pass2[2] = false;
		}
	}); 
}); // 문서실행시 무조건 열리는 함수

// 예금액 천단위 쉼표
function input(balance){
	balance = balance.replace(/[^0-9]/g,'');   // 입력값이 숫자가 아니면 공백
	balance = balance.replace(/,/g,'');        // ,값 공백처리
	$("#trfamount").val(balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")); // 정규식을 이용해서 3자리 마다 , 추가 
}

// 계좌비밀번호뷰 열림
function acpwview(){
	$("#accountcheck").css("display", "block");
}

let index2 = 0;
// 계좌비밀번호 체크
function acpwcheck(){
	let accountno = $("#achostno").val();
	let accountpw = $("#acpw").val();
	$.ajax({
		url : "/jigmBank/account/accountcheck",
		type : "POST",
		data : {"accountno" : accountno, "accountpw" : accountpw },
		success : function(result){
			if(result == 1){
				alert("해당계좌확인");
				usesccard();
			}else{ 
				alert("비밀번호불일치"+(index2+1)+"회/3회//////비밀번호를 맞게 입력하였는데 이 메세지창이 뜬다면 잠금된 계좌이므로 가까운 지금은행으로가셔서 신분증과 휴대전화를 지참한 대면인증을 해주시길 바랍니다. ");
				index2++;
				if(index2 >= 3){
					$.ajax({
						url : "/jigmBank/account/accountactive",
						data : {"accountno" : arr},
						success : function(result){
							if(result == 1){
								alert("비밀번호입력횟수제한-해당계좌잠금(관리자문의)");
								accrock();
								window.location.href='main.jsp'
							} // end
						} // success end
					}); // ajax end
				} // if end
			} // else end
		} // success end
	}); // ajax end
}



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
	let accountno = $("#achostno").val();
	let boxno1 = $("#boxno1").val();
	let boxno2 = $("#boxno2").val();

	$.ajax({
		url : "/jigmBank/securitycard/usesccard",
		type : "POST",
		data : {"accountno" : accountno, "box1" : maxn, "box2" : minn, "boxno1" : boxno1, "boxno2" : boxno2 },
		success : function(result){
			if(result == 1){
				alert("확인완료");
				transfer1();
			}else{ // 보안박스 번호 불일치
				alert("번호 불일치"+(index+1)+"회/3회//////비밀번호를 맞게 입력하였는데 이 메세지창이 뜬다면 잠금된 계좌이므로 가까운 지금은행으로가셔서 신분증과 휴대전화를 지참한 대면인증을 해주시길 바랍니다. ");
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
} // 이체하기 버튼 클릭

// 이체진행-받는사람
function transfer1(){
	let achostno = $("#achostno").val();
	let acguestno = $("#acguestno").val();
	let trfamount = $("#trfamount").val().replace(/,/g, '');

	$.ajax({
		url : "/jigmBank/transferready" ,
		data : { "accnumr1" : achostno,"accnumr2":acguestno , "money":trfamount},
		type : "POST",
		success : function( result ){	/* 통신 성공시 받는 데이터 */
			if( result == 1 ){  
				alert("이체준비완료");
				transfer2();
			}else{ 
				alert("이체준비실패");
			}
		}
	});	
}
// 이체진행-하는사람
function transfer2(){
	let achostno = $("#achostno").val();
	let acguestno = $("#acguestno").val();
	let trfamount = $("#trfamount").val().replace(/,/g, '');

	$.ajax({
		url : "/jigmBank/transferlast" ,
		data : { "accnumr1" : achostno,"accnumr2":acguestno , "money":trfamount},
		type : "POST",
		success : function( result ){	/* 통신 성공시 받는 데이터 */
			if( result == 1 ){  
				alert("이체완료");
				window.location.href='main.jsp'
			}else{ 
				alert("이체실패");
			}
		}
	});	
}

function accrock(){
		$.ajax({
		url : "/jigmBank/accrock" ,
		data : { "accnumr" : accnumr },
		type : "POST",
		success : function( result ){
			if(result==1){
				alert("계좌잠금"+accnumr);
			}else{
				alert("계좌잠금 실패!");
			}
		}
	});
}
