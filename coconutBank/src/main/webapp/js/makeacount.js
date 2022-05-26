function add(){
	var form = $("#addform")[0]; // 폼 태그 id 호출 [0] 인덱스 호출 
	var formData = new FormData( form ); // js 지원하는 FormData 클래스를 이용한 form태그 객체화
	$.ajax({
		url : "../add",
		type : 'POST' ,
		data : formData , 
		contentType : false , 
		processData : false ,  

		success : function( re ){
			if( re == 1){
				alert(" 등록이 되었습니다. "); 
				form.reset(); 	/* form안에 적혀있는 내용 지우기 */
			}else{
				alert(" 등록이 실패 했습니다 [담당자에게 문의 바람] ");
			}
		}
	});
}