//시작할때부터 작동
let com
$( function(){
	
	boxview3();
	com = '<h2>OTP 고유번호를 입력해주십시오.</h2>';
	$("#comment").html(com);
});
//


//랜덤 키패드 만들기
function boxview3(){	//comment키패드 쓰임새 설명
////////////////랜덤 배열 지정///////////////
	let bxx = ['0','1','2','3','4','5','6','7','8','9'];
	for(let t=0; t<10; t++){
		let renum = Math.floor(Math.random() * 10);
		if(t==0){bxx[0]=renum;}
		else{
			let iii;
			for(iii=0; iii<t; iii++){
				if(renum==bxx[iii]){
					renum = Math.floor(Math.random() * 10);
					iii=-1;
				}
				else if(iii==t-1){
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
	let iiii;
	for(iiii=0; iiii<10; iiii++ ){
		if(iiii==9){
			bxb += '<button class="btn btn-success" onclick="removeone3()"><-</button>';
		}
		bxb += '<button class="btn btn-success" onclick="clickpw3('+bxx[iiii]+')">'+bxx[iiii]+'</button>';
	}
	bxb += '<button type="button" class="btn btn-success" onclick="checkpw3()">확인</button>';
	$("#box").html(bxb);
/////////////////////////////////////////
}

///키패드 이동 관련 선언
let ttt3 = 0;
let pwt31 = 0;	let pww31 = '';//OTP비번


///키패드 입력
function clickpw3( num ){
	if(pwt31<=5){
		if(ttt3==0){//보내는 계좌 비번 입력
			pww31 += num;pwt31++;
			////입력값 표시/////
			let bbb = '<div>'+pww31+'</div>';
			$("#billboard").html(bbb);	
		}
	}
}

//키패드 입력1 지우기
function removeone3(){
	if(ttt3==0){
		if(pwt31>0){
			pww31 = pww31.slice(0, -1);
			pwt31--;
			////입력값 표시/////
			let bbb = '<div>'+pww31+'</div>';
			$("#billboard").html(bbb);	
		}
	}
}

//비번보관 실행
function checkpw3(){
	checkpw000();
}


//고유번호확인
function checkpw000(){

	if(pwt31==6){
		if(ttt3==0){
			////입력값 표시/////
			let bbb = '<div></div>';
			$("#billboard").html(bbb);
			$("#box").html(bbb);
			$("#comment").html(bbb);
			checkotpyno(pww31);
		}
	}else{
		alert('현재'+pwt31+'자리입니다.~6자리로 입력해주세요.');
	}
}





function checkotpyno(otpno){
	/////otp랜덤생성//////
	let r = random();
	putrand(otpno,r[0],r[1],r[2],r[3],r[4],r[5]);
	///////저장된 난수 빼오기////////
	let rr = catchactive(otpno);
	///////////////////
	
	let modal = 
			'<!-- Button trigger modal -->'+
		'<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">'+
		  'Launch static backdrop modal'+
		'</button>'+
		'<!-- Modal -->'+
		'<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">'+
		  '<div class="modal-dialog">'+
		    '<div class="modal-content">'+
		      '<div class="modal-header">'+
		        '<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>'+
		        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
		      '</div>'+
		      '<div class="modal-body">'+
		        'otp - 60초 마다 바뀌는'+rr+'<div id="timein"></div>'
		      '</div>'+
		      '<div class="modal-footer">'+
		        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'+
		      '</div>'+
		    '</div>'+
		  '</div>'+
		'</div>';

		$("#box00").html(modal);
		timeout();

}



//시간재기
function timeout(){
	const timeLimitValue = 60; // 1분 
	var timeLimit = 60; 
	var min, sec;
	var timerObj = setInterval(callTimer, 1000);
	callTimer(otpno);
	// 1초 간격으로 함수 호출
	
	function callTimer(){
	
	
		min = parseInt(timeLimit/60);
		sec = parseInt(timeLimit%60);
	
		const displayTime = min.toString().padStart(2,"0") + " : " + sec.toString().padStart(2,"0");
	    $("#timein").html(displayTime);
	
		timeLimit -= 1;
	
		if(timeLimit < -1) {
			timerObj = setInterval(callTimer, 1000);
			clearInterval(timerObj);
			timeLimit = timeLimitValue;
	 		return;
	     }
	}
}

//OTP난수 확인
function catchactive(otpno){
	$.ajax({
		url : "/jigmBank/checkotpyno" ,
		data : { "otpno" : otpno },
		type : "POST",
		success : function( result ){	/* 통신 성공시 받는 데이터 */
			if( result != "false" ){  
				alert("고유번호 존재");
				alert(result);
				return result;
			}else{ 
				alert("정보불일치");
				return result;
			}
		}
	});	
	return result;
}
///////////////////


//////////난수생성///
function random(){
	let certification = [0,0,0,0,0,0]
	for(let t=0; t<6; t++){
		let renum = Math.floor(Math.random() * 10);
		certification[t] = renum;
	}
	return certification;
}
///////////////////////

////////난수넣기//////////
function putrand(otpno,r1,r2,r3,r4,r5,r6){
	$.ajax({
		url : "/jigmBank/putrand" ,
		data : { "otpno":otpno,"r1" : r1,"r2" : r2,"r3" : r3,"r4" : r4,"r5" : r5,"r6" : r6 },
		type : "POST",
		success : function( result ){	/* 통신 성공시 받는 데이터 */
			if( result != "false" ){  
				
			}else{ 

			}
		}
	});	
}


////otp난수집어넣고 빼오기///
function gear(otpno){
	/////otp랜덤생성//////
	let r = random();
	putrand(otpno,r[0],r[1],r[2],r[3],r[4],r[5]);
	///////저장된 난수 빼오기////////
	let rr = catchactive(otpno);
	///////////////////
	alert(rr);
	return rr;
}
