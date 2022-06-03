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
		if(ttt3==0){//보내는 계좌 비번 입력
			pww31 += num;pwt31++;
			////입력값 표시/////
			let bbb = '<div>'+pww31+'</div>';
			$("#billboard").html(bbb);	
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


//비번임시보관
function checkpw000(){
	if(ttt3==1){
		////입력값 표시/////
		let bbb = '<div></div>';
		$("#billboard").html(bbb);
	}
}
