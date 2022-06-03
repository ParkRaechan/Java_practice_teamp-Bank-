
function makeSignature(){
	alert("통신2"); //통신
	
	let phonenum = $("#phonenum").val();
	
	$.ajax({ //안으로 안 들어옴
		url : 'makeSignature',
		data : { "phonenum" : phonenum } ,
		success : function(re){
			alert("통신"+re); //안들어옴
			
		}
	});
};

/////	비동기	메인에서	띄우기	/////
function pagechange( page ){
	$("#mainbox").load( "acount/"+page+".jsp");
};

