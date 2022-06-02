//시작할때부터 작동
let com
$( function(){
	
	boxview();
	com = '<h2>생성할 OTP의 비밀번호를 입력해주십시오.</h2>';
	$("#comment").html(com);
});
//


//랜덤 키패드 만들기
function boxview(){	//comment키패드 쓰임새 설명
////////////////랜덤 배열 지정///////////////
	let bxx = ['0','1','2','3','4','5','6','7','8','9'];
	for(let t=0; t<10; t++){
		let renum = Math.floor(Math.random() * 10);
		if(t==0){bxx[0]=renum;}
		else{
			let i;
			for(i=0; i<t; i++){
				if(renum==bxx[i]){
					renum = Math.floor(Math.random() * 10);
					i=-1;
				}
				else if(i==t-1){
					bxx[t]=renum;
				}
				else{
				}
			}
		}
	}
	
/////////////////////////////////////////
/////////////랜덤배열 버튼만들기/////////////

	let bxb = '<div></div><div></div><div></div>';
	let ii;
	for(ii=0; ii<10; ii++ ){
		if(ii==9){
			bxb += '<button class="btn btn-success" onclick="removeone()"><-</button>';
		}
		bxb += '<button class="btn btn-success" onclick="clickpw('+bxx[ii]+')">'+bxx[ii]+'</button>';
	}
	bxb += '<button type="button" class="btn btn-success" onclick="checkpw()">확인</button>';
	$("#box").html(bxb);
/////////////////////////////////////////
}

///키패드 이동 관련 선언
let ttt = 0;
let pwt = 0;	let pww = '';//OTP비번
let pwt2 = 0;	let pww2 = '';//OTP비번확인
let pwt3 = 0;	let pww3 = '';//계좌비번

////++++추가) 계좌번호 선언
let accnumr;
////

///키패드 입력
function clickpw( num ){
	if(pwt <= 5){	//ttt로 구분한 OTP,확인,계좌 로직
		if(ttt==0){//OTP비번처음입력
			pww += num;alert(pww);pwt++;
		}	
	}
	else if(pwt2 <= 5){
		if(ttt==1){//OTP비번확인입력
			pww2 += num;alert(pww2);pwt2++;
		}	
	}
	else if(pwt3 <=3){
		if(ttt==2){//계좌비번입력
			pww3 += num;alert(pww3);pwt3++;
		}	
	}
}


//키패드 입력1 지우기
function removeone(){
	if(ttt==0){
		if(pwt>0){
			pww = pww.slice(0, -1);
			pwt--;
			alert(pww);		
		}
	}
	else if(ttt==1){
		if(pwt2>0){
			pww2 = pww2.slice(0, -1);
			pwt2--;
			alert(pww2);		
		}
	}
	else if(ttt==2){
		if(pwt3>0){
			pww3 = pww3.slice(0, -1);
			pwt3--;
			alert(pww3);		
		}
	}
}


//비번보관 실행
function checkpw(){
	checkpw0();
}


//유효성관련 선언
let pass = false;

//비번임시보관
function checkpw0(){
	if(ttt==0){
		if(pww.length==6){
			ttt=1;
			
			/////////
			boxview();
			com = '<h2>OTP의 비밀번호를 한번더 입력해 확인해주십시요.</h2>';
			$("#comment").html(com);
			/////////
			
			alert("비밀번호를 한번더 입력하여 비밀번호확인을 진행해주십시오.");
		}else{alert("6자리 모두 입력해주시길 바랍니다.");}
		
	}else if(ttt==1){
		if(pww2.length==6){
			if(pww2==pww){
				
				alert("일치");
				
				
				////////////////////
				//////키패드리뉴얼/////
				bxb = '<div></div><div></div><div></div>';
				$("#box").html(bxb);
				////////////////////
					
					
				
				///////////////////
				/////계좌번호입력/////
				com='';$("#comment").html(com);
				let acc = '<div></div>';
				acc += '<h3>계좌번호입력</h3><br>'+
				
				'<input id="accnum" name="accnum" class="form-control"  placeholder="계좌번호" rows=3>'+
				'<button class="form-control" type="button" onclick="accpw()">입력</button>'+
				'<span id="acccheckspan" name="acccheckspan">유효성검사</span>';
				
				$("#accin").html(acc);
				///////////////////
				
				
					
				////////////////////
				//////유효성검사//////
				keycheck();
				////////////////////
				
			}
			else{
				alert("입력 비밀번호 불일치");
			}
		}else{
			alert("6자리 모두 입력해주시길 바랍니다.");
		}
	}else if(ttt==2){
		if(pww3.length==4){
			/////계좌번호,계좌비번확인과정////
		checkaccpw(pww3,accnumr);
		}else{
			alert("4자리 모두 입력해주시길 바랍니다.");
		}
	}
}

//////유효성검사//////
function keycheck(){
	$("#accnum").keyup( function(){  // 비밀번호 입력할때마다
		let accnum = $("#accnum").val();  
		
		let validation = /^[0-9]{14}$/; // 정규표현식
		
		if( validation.test( accnum ) ){ // 정규표현식 같으면
			$("#acccheckspan").html("입력조건 달성"); pass = true;
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("14자리 숫자를 입력해주세요."); pass = false;
		}
	}); 
}


///계좌번호입력후비번입력///
function accpw(){
	if(pass == true){
		
	//계좌전호 임시 저장//
	accnumr = $("#accnum").val();

	////키패드 형태변환///
	ttt=2;
	
	////계좌번호입력제거////
	acc = '<div></div>';
	$("#accin").html(acc);
	////////////////////
	
	//계좌번호 비번입력용 키패드 새로  띄우기//
	boxview();
	com = '<h2>계좌의 비밀번호를 입력해주십시오.</h2>';
	$("#comment").html(com);
	////////////////
	}
}


///계좌번호와 비번 db비교 확인///
function checkaccpw(pww3,accnumr){
	//pww3 계좌비번
	//accnumr 계좌번호
	
	alert("계좌번호 및 비번확인중");
	$.ajax({
		url : "/jigmBank/checkaccpw" ,
		data : { "pww3" : pww3,"accnumr" : accnumr },
		type : "POST",
		success : function( result ){	/* 통신 성공시 받는 데이터 */
			if( result == 1 ){  
				alert("정보가 일치합니다.~문자보냄");
				
				
				
				
				////////////////////
				//////키패드리뉴얼/////
				bxb = '<div></div><div></div><div></div>';
				$("#box").html(bxb);
				////////////////////
					
					
				
				///////////////////
				/////인증번호입력/////
				com='';$("#comment").html(com);
				let acc = '<div></div>';
				acc += 
				'<form action="">'+
				'전화번호 <input type="text">'+
				'인증번호 (1분 안에 입력 바랍니다.)'+
				'<button onclick="makeSignature()">발송</button> <br>'+
				'인증번호 입력 <input type="text">'+
				'<button>확인</button>'+
				'</form>';
				
				$("#accin").html(acc);
				//////////////////////
				random();
				OO();
				
				
				///////////////////
				//setTimeout(function() {
				//  alert("시간다됨");
				//}, 3000);
				//3초
					
					
				//입력성공시 시간 초기화
				//clearTimeout(myTimer);
				
				
				////////////////////
				//////유효성검사//////
				keycheck();
				////////////////////
				
				
			}else{ 
				alert("해당정보가 틀렸습니다.");
			}
		}
	});	
}


/////////////문자api js////
function makeSignature(){
	alert("통신2"); //통신
	
	$.ajax({ //안으로 안 들어옴
		url : 'makeSignature',
		success : function(re){
			alert("통신"+re); //안들어옴
			
		}
	});
};
////////////////////////



//계좌에 해당하는 전화번호 불러오기
/*
function checkphonenum(accnumr){
	$.ajax({
		url : "/jigmBank/checkaccpw" ,
		data : { "accnumr" : accnumr },
		type : "POST",
		success : function( result ){
			if(result==1){
				console.log("qwe");
			}
		}
	});
}
*/
///////////////




///////////////시간제한////
function OO(){
	const timeLimitValue = 60; // 1분 
	var timeLimit = 60; 
	var min, sec;
	var timerObj = setInterval(callTimer, 1000);
	callTimer();
	// 1초 간격으로 함수 호출
	
	function callTimer(){
	
	
		min = parseInt(timeLimit/60);
		sec = parseInt(timeLimit%60);
	
		const displayTime = min.toString().padStart(2,"0") + " : " + sec.toString().padStart(2,"0");
	    $("#accin2").html(displayTime);
	
		timeLimit -= 1;
	
		if(timeLimit < -1) {
			alert("시간초과");
			timerObj = setInterval(callTimer, 1000);
			clearInterval(timerObj);
			timeLimit = timeLimitValue;
	 		return;
	     }
	}
}


//////////난수생성///
function random(){
	let certification = [0,0,0,0,0,0]
	for(let t=0; t<6; t++){
		let renum = Math.floor(Math.random() * 10);
		certification[t] = renum;
	}
	console.log(certification);
}
