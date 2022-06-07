<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@include file = "header.jsp" %>

 	<form>
		전화번호 <input type="text" id="phonenum"> <!-- 입력값 받아서 서블릿의 from으로 옮김 --> <br>
	
		인증번호 (1분 안에 입력 바랍니다.)
		<button onclick="makeSignature()" type="button">발송</button> <br>
		<!-- 발송을 누르면 60초 시간 창이 열림(시간 초과시 인증번호 폐기, 재발송 필요) -->
		
		인증번호 입력 <input type="text" id="typing"> 
		<button onclick="checkotp()" type="button" >확인</button>
	</form>
	<br><br>
	<%@include file = "footer.jsp" %>
	
	
	
	
	

<script type="text/javascript" src="./CryptoJS/rollups/hmac-sha256.js"></script>
<script type="text/javascript" src="./CryptoJS/components/enc-base64.js"></script>
<!-- 사용자 정의 js -->
<script src="/java_practice_teamp-Bank/js/main.js" type="text/javascript"></script>
<!-- jquert 최신 cdn -->
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
</body>
</html>