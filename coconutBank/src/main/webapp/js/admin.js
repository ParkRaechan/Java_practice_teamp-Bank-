/**
 * 
 */
$( function(){
	alert("입금이 확인안된 고객의 상태변경에 주의해주십시오");
});
 
 
function change(acidno){
	alert("입금확인후변경해주시길바랍니다.");
	$.ajax({
		url : "/jigmBank/changemode" ,
		data : { "acidno" : acidno },
		type : "POST",
		success : function( result ){
			if(result==1){
				alert("변경성공");
				location.reload();
			}else{
				alert("변경실패");
			}
		}
	});
}