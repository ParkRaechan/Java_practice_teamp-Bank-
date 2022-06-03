
let rand = null;

function makeSignature(){
	alert("통신2"); //통신
	
	let phonenum = $("#phonenum").val();
	
	$.ajax({ //폰번호를 받아서 그 번호로 문자 발송 성공
		url : '/jigmBank/makeSignature',
		data : { "phonenum" : phonenum } ,
		success : function(re){
			rand = re; 
		}
	});
}

/////	비동기	메인에서	띄우기	/////
function pagechange( page ){
	$("#mainbox").load( "acount/"+page+".jsp");
};

function make2(){
	if( rand == $("#phonenum2").val() ){ alert("통신성공"); }
}

