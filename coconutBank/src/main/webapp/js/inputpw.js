$( function(){
	boxview();
});


function boxview(){
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
	
	console.log(bxx);
/////////////////////////////////////////
/////////////랜덤배열 버튼만들기/////////////

	let bxb = '<div></div><div></div><div></div>';
	let ii;
	for(ii=0; ii<10; ii++ ){
		
		if(ii==9){
			bxb += '<button class="btn btn-success" onclick=""><-</button>';
		}
		bxb += '<button class="btn btn-success" onclick="clickpw('+bxx[ii]+')">'+bxx[ii]+'</button>';
	}
	bxb += '<button type="button" class="btn btn-success" onclick="">확인</button>';
	$("#box").html(bxb);
/////////////////////////////////////////
}

///선언
let pw = '@@@@';	

///변경
function clickpw( num ){	
	alert("qwer");
	pw.replace('@',num);
	console.log(pw);
}
