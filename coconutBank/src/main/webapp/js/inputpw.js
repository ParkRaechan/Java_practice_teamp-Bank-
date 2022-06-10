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
			pww += num;pwt++;
			////입력값 표시/////
			let bbb = '<div>'+pww+'</div>';
			$("#billboard").html(bbb);
		}	
	}
	else if(pwt2 <= 5){
		if(ttt==1){//OTP비번확인입력
			pww2 += num;pwt2++;
			////입력값 표시/////
			let bbb = '<div>'+pww2+'</div>';
			$("#billboard").html(bbb);
		}	
	}
	else if(pwt3 <=3){
		if(ttt==2){//계좌비번입력
			pww3 += num;pwt3++;
			////입력값 표시/////
			let bbb = '<div>'+pww3+'</div>';
			$("#billboard").html(bbb);
		}	
	}
}


//키패드 입력1 지우기
function removeone(){
	if(ttt==0){
		if(pwt>0){
			pww = pww.slice(0, -1);
			pwt--;
			////입력값 표시/////
			let bbb = '<div>'+pww+'</div>';
			$("#billboard").html(bbb);
		}
	}
	else if(ttt==1){
		if(pwt2>0){
			pww2 = pww2.slice(0, -1);
			pwt2--;
			////입력값 표시/////
			let bbb = '<div>'+pww2+'</div>';
			$("#billboard").html(bbb);	
		}
	}
	else if(ttt==2){
		if(pwt3>0){
			pww3 = pww3.slice(0, -1);
			pwt3--;
			////입력값 표시/////
			let bbb = '<div>'+pww3+'</div>';
			$("#billboard").html(bbb);	
		}
	}
}


//비번보관 실행
function checkpw(){
	checkpw0();
}


//유효성관련 선언
let pass = false;
//잠금성
let ghgh01=0;
//비번임시보관
function checkpw0(){
	if(ttt==0){
		if(pww.length==6){
			ttt=1;
			
			/////////
			boxview();
			com = '<h5 style="text-align: center;"><b>OTP의 비밀번호를 한번 더 입력해 확인해주십시오.</b></h5>';
			$("#comment").html(com);
			/////////
			////입력값 표시/////
			let bbb = '<div></div>';
			$("#billboard").html(bbb);
			alert("비밀번호를 한번더 입력하여 비밀번호확인을 진행해주십시오.");
		}else{alert("6자리 모두 입력해주시길 바랍니다.");}
		
	}else if(ttt==1){
		if(pww2.length==6){
			if(pww2==pww){
				
				alert("일치");
				////입력값 표시/////
				let bbb = '<div></div>';
				$("#billboard").html(bbb);
				
				////////////////////
				//////키패드리뉴얼/////
				bxb = '<div></div><div></div><div></div>';
				$("#box").html(bxb);
				////////////////////
					
					
				
				///////////////////
			/////계좌번호입력/////////////////////////////////////////////
			com='';$("#comment").html(com);
			let acc = '<div></div>';
			acc += 
			'<h4 style="text-align: center;"><b>계좌번호 입력</b></h4><br>'+
			'<span id="acccheckspan" name="acccheckspan"></span>'+
			'<div class="otpaccountcheck">'+
				'<input id="accnum" name="accnum" class="form-control" placeholder="보유한 계좌번호를 입력해주세요.">'+
				'<button class="form-control" id="inputpwbtn" type="button" onclick="accpw()">입력</button>'+
			'</div><br><br><br><br><br>';
			
			$("#accin").html(acc);
			///////////////////
				
				
					
				////////////////////
				//////유효성검사//////
				keycheck();
				////////////////////
				
			}
			else{
				if(ghgh01==3){
				window.location.href='main.jsp'
				}
				ghgh01+=1;
				alert("입력 비밀번호 불일치 입력오류횟수:"+ghgh01+"/3"+"------//////비밀번호를 맞게 입력하였는데 이 메세지창이 뜬다면 잠금된 계좌이므로 가까운 지금은행으로가셔서 신분증과 휴대전화를 지참한 대면인증을 해주시길 바랍니다. ");
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
		
		let validation = /^[0-9]{12}$/; // 정규표현식
		
		if( validation.test( accnum ) ){ // 정규표현식 같으면
			$("#acccheckspan").html("입력조건 달성"); pass = true;
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("'-'를 제외한 12자리 숫자를 입력해주세요."); pass = false;
		}
	}); 
}


///계좌번호입력후비번입력///
function accpw(){
	if(pass == true){
		
	//계좌번호 저장//
	let arr1 = 	$("#accnum").val();
	let arr2 = arr1.slice(undefined,3);
	let arr3 = arr1.slice(3,6);
	let arr4 = arr1.slice(6,undefined);
	let arr = arr2[0]+arr2[1]+arr2[2]+"-"+arr3[0]+arr3[1]+arr3[2]+"-"+arr4[0]+arr4[1]+arr4[2]+arr4[3]+arr4[4]+arr4[5];
	
	alert(arr);
	
	accnumr = arr;
	////키패드 형태변환///
	ttt=2;
	
	////계좌번호입력제거////
	acc = '<div></div>';
	$("#accin").html(acc);
	////////////////////
	
	//계좌번호 비번입력용 키패드 새로  띄우기//
	boxview();
	com = '<h4 style="text-align: center;"><b>계좌의 비밀번호를 입력해주십시오.</b></h4>';
	$("#comment").html(com);
	////////////////
	}
}

///문자보내기처음유무
let ppt = 0;
//잠금성
let ghgh02=0;
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
				
				////입력값 표시 리뉴얼/////
				let bbb = '<div></div>';
				$("#billboard").html(bbb);
				
				////////////////////
				//////키패드리뉴얼/////
				bxb = '<div></div><div></div><div></div>';
				$("#box").html(bxb);
				////////////////////
				checkphonenum(accnumr);
				let phonenumber=$("#phonenumber").val();
				if(ppt==1){
					timeout(phonenumber);
				}
				
			}else{ 
				if(ghgh02==3){
				//계좌잠금
				accrock();
				window.location.href='main.jsp'
				}
				ghgh02= ghgh02+1;
				alert("입력 비밀번호 불일치 /// 입력오류횟수:"+ghgh02+"/3------////////비밀번호를 맞게 입력하였는데 이 메세지창이 뜬다면 잠금된 계좌이므로 가까운 지금은행으로가셔서 신분증과 휴대전화를 지참한 대면인증을 해주시길 바랍니다. ");
			}
		}
	});	
}

//난수임시 저장 변수
let rrrrrr;
/////////////문자api js////
function makeSignature(phonenumber){
	//alert("js연결"); //통신
	let phonenum = $("#phonenum").val();
	alert(phonenum);
	
	if(ppt==0){
		timeout(phonenumber);
	}
	//난수
	let r = random();
	let rr = ''+r[0]+r[1]+r[2]+r[3]+r[4]+r[5];
	rrrrrr = rr;
	//문자보내기api적용
	
	$.ajax({
		url : 'makeSignature',
		data : { "phonenum" : phonenum, "rr":rr} ,
		success : function(re){
			alert("통신성공");
		}
	});

}	
////////////////////////

function checkmessage(){
	let finalmsgcheck = $("#finalmsg").val();
	if(finalmsgcheck==rrrrrr){
		alert("otp생성준비완료!");
		saveotp();
	}
}

//////////otp저장
function saveotp(){
	//alert("작동");
	//otp고유번호
	let r1 = random();
	let rr1 = ''+r1[0]+r1[1]+r1[2]+r1[3]+r1[4]+r1[5];
	checkoverlap(rr1);//중복확인
}
/////////db저장함수/////
function saveotp2db(finalf1,finalf2,finalf3,accnumr){
			$.ajax({//고유번호,비번,otp난수,계좌번호
		url : "/jigmBank/saveotp" ,
		data : { "finalf1" : finalf1,"finalf2" : finalf2,"finalf3" : finalf3,"accnumr":accnumr },
		type : "POST",
		success : function( result ){
			if(result==1){
				alert("otp저장성공");
				window.location.href='main.jsp'
			}else{
				alert("otp저장실패");
			}
		}
	});
}
let qq=1;
////////otp고유번호 중복체크
function checkoverlap(rr1){
		$.ajax({
		url : "/jigmBank/checkoverlap" ,
		data : { "rr1" : rr1 },
		type : "POST",
		success : function( result ){
			if(result==2){

				
				//중복없는 otp 고유번호
				alert("고유번호:"+rr1);
				let finalf1 = rr1;
				
				//설정된 otp비번 알림
				//alert(pww);
				let finalf2 = pww;
				
				//otp난수에 무작위수 넣어놓기
				let r2 = random();
				let rr2 = ''+r2[0]+r2[1]+r2[2]+r2[3]+r2[4]+r2[5];
				//alert(rr2);
				let finalf3 = rr2;
				
				//계좌번호
				//alert(accnumr);
				
				//db저장
				saveotp2db(finalf1,finalf2,finalf3,accnumr);
			}else{
				saveotp();
			}
		}
	});
}
///////

/////전번변수선언
let phonenumber;
//계좌에 해당하는 전화번호 불러오기
function checkphonenum(accnumr){
	$.ajax({
		url : "/jigmBank/getphone" ,
		data : { "accnumr" : accnumr },
		type : "POST",
		success : function( result ){
			if(result!="false"){
				phonenumber = result;
				com = '<h6 style="text-align: center;">문자로 받은 숫자를 입력해주세요.</h6>';
				$("#comment").html(com);
				loadpp(phonenumber);
			}else{
				alert("전화번호 불러오기 실패!");
			}
		}
	});
}
///////////////
//계좌에 해당하는 전화번호 불러오기
function loadpp(phonenumber){
	
	phapi = '<div class="col-md-4 offset-4"><form action="">'+ //// *******************************
				'전화번호 <input type="text" id="phonenum" value='+phonenumber+' readonly>  <br>'+							
				'인증번호 (1분 안에 입력 바랍니다.)'+
				'<button type="button" onclick="makeSignature('+phonenumber+')">발송</button> <br>'+
				'인증번호 입력 <input id="finalmsg" type="text"> '+
				'<button type="button" onclick="checkmessage()">확인</button>'+
			'</form></div>';

	$("#accin2").html(phapi);
				
}
///////////////



///////////////시간제한////
function timeout(phonenumber){
	const timeLimitValue = 60; // 1분 
	var timeLimit = 60; 
	var min, sec;
	var timerObj = setInterval(callTimer, 1000);
	// 1초 간격으로 함수 호출
	
	function callTimer(){
	
	
		min = parseInt(timeLimit/60);
		sec = parseInt(timeLimit%60);
	
		const displayTime = min.toString().padStart(2,"0") + " : " + sec.toString().padStart(2,"0");
	    $("#box").html(displayTime);
	
		timeLimit -= 1;
	
		if(timeLimit < 0) {
			ppt=1;
			timerObj = setInterval(callTimer, 1000);
			clearInterval(timerObj);
			timeLimit = timeLimitValue;
			makeSignature(phonenumber)
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


//////계좌잠금(otp용)
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


