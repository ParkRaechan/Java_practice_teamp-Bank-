
let rand = null;

function makeSignature(){
	//입력한 전화번호를 넘겨받음
	let phonenum = $("#phonenum").val();
	
	$.ajax({ //폰번호를 받아서 그 번호로 문자 발송 성공
		url : '/jigmBank/makeSignature',
		data : { "phonenum" : phonenum } ,
		success : function(re){
			rand = re; 
		}
	});
}


const otpnum = Math.floor(Math.random() * 100000 + 1);
//랜덤 6자리 난수 생성
function checkotp(){ //입력한 랜덤번호가 발송한 랜덤번호와 일치하는지 확인
	if( rand == $("#typing").val() ){ //일치할 경우
		alert("본인 인증이 완료 되었습니다.");
 		alert("otp 고유 번호 : "+otpnum); //otpnum을 저장할 수 있도록 해야함****
	} else {
		alert("인증 번호가 다릅니다. 다시 진행 해주세요.");
		location.reload(true); //현재 페이지 새로고침
	}
}



/////	비동기	메인에서	띄우기	/////
function pagechange( page ){
	$("#mainbox").load( "acount/"+page+".jsp");
};
