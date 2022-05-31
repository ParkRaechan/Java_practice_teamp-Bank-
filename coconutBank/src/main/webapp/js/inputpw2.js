//시작할때부터 작동
let com
$( function(){
	
	transferfront();

});
//



function transferfront(){
	/////계좌번호입력/////
	com='<h2>돈을 보내실 계좌번호와 받으실 계좌번호를 입력해주십시오.</h2>';$("#comment").html(com);
	let acc = '<div></div>';
	acc += '<h3>계좌번호입력</h3><br>'+
	
	'<input id="achostno" name="achostno" class="form-control"  placeholder="어떤 계좌에서 보내시겠습니까?" rows=3>'+
	'<input id="acguestno" name="acguestno" class="form-control"  placeholder="어떤 계좌로 보내시겠습니까?" rows=3>'+
	'<input id="trfamount" name="trfamount" class="form-control"  placeholder="얼마를 보내시겠습니까?" rows=3>'+
	'<button class="form-control" type="button" onclick="accpw2()">입력</button>'+
	'<span id="acccheckspan" name="acccheckspan">유효성검사</span>';
	
	$("#accin").html(acc);
	///////////////////
	
	
		
	////////////////////
	//////유효성검사//////
	keycheck2();
	////////////////////
}

//유효성관련 선언
let pass2 = [false,false,false];

//////유효성검사2-이체에서//////
function keycheck2(){
	$("#achostno").keyup( function(){  // 비밀번호 입력할때마다
		let achostno = $("#achostno").val();  
		let validation = /^[0-9]{14}$/; // 정규표현식

		if( validation.test( achostno ) ){ // 정규표현식 같으면1
			if(pass2[1]==true){
				if(pass2[2]==true){
					$("#acccheckspan").html("입력조건달성"); pass2[0] = true;
				}else{
					$("#acccheckspan").html("보내실 금액을 입력해주십시오."); pass2[0] = true;
				}
			}else{
				$("#acccheckspan").html("받으실 계좌를 입력해주십시오."); pass2[0] = true;
			}
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("14자리 숫자의 계좌번호를 입력해주십시오."); pass2[0] = false;
		}
	}); 
	
	$("#acguestno").keyup( function(){  // 비밀번호 입력할때마다
		let acguestno = $("#acguestno").val();  
		let validation = /^[0-9]{14}$/; // 정규표현식
		
		if( validation.test( acguestno ) ){ // 정규표현식 같으면1
			if(pass2[0]==true){
				if(pass2[2]==true){
					$("#acccheckspan").html("입력조건달성"); pass2[1] = true;
				}else{
					$("#acccheckspan").html("보내실 금액을 입력해주십시오."); pass2[1] = true;
				}
			}else{
				$("#acccheckspan").html("보내실 계좌를 입력해주십시오."); pass2[1] = true;
			}
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("14자리 숫자의 계좌번호를 입력해주십시오."); pass2[1] = false;
		}
	}); 
	
	
	$("#trfamount").keyup( function(){  // 비밀번호 입력할때마다
		let trfamount = $("#trfamount").val();  
		let validation2 = /^[0-9]{1,17}$/;
		
		if( validation2.test( trfamount ) ){ // 정규표현식 같으면1
			if(pass2[0]==true){
				if(pass2[1]==true){
					$("#acccheckspan").html("입력조건달성"); pass2[2] = true;
				}else{
					$("#acccheckspan").html("받으실 계좌를 입력해주십시오."); pass2[2] = true;
				}
			}else{
				$("#acccheckspan").html("보내실 계좌를 입력해주십시오."); pass2[2] = true;
			}
		}else{ // 정규현식 다르면
			$("#acccheckspan").html("보내실 금액을 입력해주십시오."); pass2[2] = false;
		}
	}); 
	
	
}



///키패드 이동 관련 선언
let ttt2 = 0;
let pwt21 = 0;	let pww21 = '';//OTP비번
//let pwt22 = 0;	let pww22 = '';//OTP비번확인
//let pwt23 = 0;	let pww23 = '';//계좌비번

////++++추가) 계좌번호 선언
let accnumr;
////


///계좌번호입력후비번입력///
function accpw2(){
	if( pass2[0]==true && pass2[1]==true && pass2[2]==true ){
		
	//계좌번호 임시 저장//
	achostno = $("#achostno").val();
	acguestno = $("#acguestno").val();
	trfamount = $("#trfamount").val();
	
	////키패드 형태변환///
	ttt2=1;
	
	////계좌번호입력제거////
	acc = '<div></div>';
	$("#accin").html(acc);
	////////////////////
	
	//계좌번호 비번입력용 키패드 새로  띄우기//
	boxview2();
	com = '<h2>보내시는 계좌의 비밀번호를 입력해주십시오.</h2>';
	$("#comment").html(com);
	////////////////
	}
}



//랜덤 키패드 만들기
function boxview2(){	//comment키패드 쓰임새 설명
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
			bxb += '<button class="btn btn-success" onclick="removeone2()"><-</button>';
		}
		bxb += '<button class="btn btn-success" onclick="clickpw2('+bxx[ii]+')">'+bxx[ii]+'</button>';
	}
	bxb += '<button type="button" class="btn btn-success" onclick="checkpw2()">확인</button>';
	$("#box").html(bxb);
/////////////////////////////////////////
}


///키패드 입력
function clickpw2( num ){
	if(pwt21 <= 3){	//ttt로 구분한 OTP,확인,계좌 로직
		if(ttt2==1){//보내는 계좌 비번 입력
			pww21 += num;alert(pww21);pwt21++;
		}	
	}
	/* //전코드
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
	*/
}

//키패드 입력1 지우기
function removeone2(){
	if(ttt2==1){
		if(pwt21>0){
			pww21 = pww21.slice(0, -1);
			pwt21--;
			alert(pww21);		
		}
	}
	/* //전코드
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
	*/
}


//비번보관 실행
function checkpw2(){
	checkpw00();
}


//비번임시보관
function checkpw00(){
	if(ttt2==1){
		if(pww21.length==4){
			checkaccpw2(pww21,achostno,acguestno);
			
		}else{alert("4자리 모두 입력해주시길 바랍니다.");}
		
	}
	/*	//전코드
	else if(ttt==1){
		if(pww21.length==6){
			if(pww21==pww21){
				
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
	*/
}


///계좌번호와 비번 db비교 확인///
function checkaccpw2(pww21,achostno,acguestno){
	
	alert("계좌번호 및 비번확인중");
	$.ajax({
		url : "/jigmBank/checkaccpw2" ,
		data : { "pww21" : pww21,"achostno" : achostno,"acguestno": acguestno },
		type : "POST",
		success : function( result ){	/* 통신 성공시 받는 데이터 */
			if( result == 1 ){  
				matchaccpw = true;
				alert("정보일치");
				
				//////키패드리뉴얼/////
				alert("성공");
				let bxb = '<div></div><div></div><div></div>';
				$("#box").html(bxb);
				////////////////////
				
				com = '<br><br><br>'+
					'<input id="otppw" name="otppw" class="form-control"  placeholder="OTP번호를 받아 입력해주시오." rows=3>'+
					'<button class="form-control" type="button" onclick="otpconnfirm()">입력</button>'+
					'<span id="otpspan" name="otpspan">유효성검사</span>';
					
				$("#comment").html(com);
				
				//////유효성검사//////
				key3check();
				////////////////////
				
				alert("OTP발생-fx?웹페이지?(웹페이지면 해킹안당하려나??)");
			}else{ 
				matchaccpw = false;
				alert("정보불일치");
			}
		}
	});	
}

//유효성 검사 확인
let pass0000;

//////유효성검사//////
function key3check(){
	$("#otppw").keyup( function(){  // 비밀번호 입력할때마다
		let otppw = $("#otppw").val();  
		
		let validation00 = /^[0-9]{6}$/; // 정규표현식
		
		if( validation00.test( otppw ) ){ // 정규표현식 같으면
			$("#otpspan").html("입력조건 달성"); pass0000 = true;
		}else{ // 정규현식 다르면
			$("#otpspan").html("6자리 숫자를 입력해주세요."); pass0000 = false;
		}
	}); 
}



