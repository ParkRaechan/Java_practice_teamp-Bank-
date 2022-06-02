/////	비동기	메인에서	띄우기	/////
function pagechange( page ){
	$("#mainbox").load( "acount/"+page+".jsp");
}
function pagechangesec(page) {
	$("#mainbox").load( "securitycard/"+page+".jsp");
}