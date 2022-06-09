//시작할때부터 작동
let com
$( function(){
	firewallmodechange();
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
	timeout(otpno);
	gear(otpno);

}



//시간재기
function timeout(otpno){
	const timeLimitValue = 60; // 1분 
	var timeLimit = 60; 
	var min, sec;
	var timerObj = setInterval(callTimer, 1000);
	// 1초 간격으로 함수 호출
	
	function callTimer(){
	
	
		min = parseInt(timeLimit/60);
		sec = parseInt(timeLimit%60);
	
		const displayTime = min.toString().padStart(2,"0") + " : " + sec.toString().padStart(2,"0");
	    $("#timein").html(displayTime);
	
		timeLimit -= 1;
	
		if(timeLimit < 0) {
			timerObj = setInterval(callTimer, 1000);
			clearInterval(timerObj);
			timeLimit = timeLimitValue;
			gear(otpno);
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
				console.log(result);
			}else{ 
				console.log(result);
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
	let rr = ''+r[0]+r[1]+r[2]+r[3]+r[4]+r[5];
	let rr00 = '<div>'+rr+'</div>';
	$("#box0000").html(rr00);
}

function firewallmodechange(){
	$("#firewallagain").css({"display" : "none"});
}
