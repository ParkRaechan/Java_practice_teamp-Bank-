<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


	<div class="row"> <!-- 계좌번호 입력 -->
		<div class="col-md-4 ">
			<span> 계좌번호 </span>
		</div>
		<div class="col-md-5">
			<input id="accountno" class="form-control" type="text" placeholder="계좌번호 입력">
		</div>
	</div>
	
	<div id="transferway"> <!-- OTP카드 or 보안카드 -->
		<input type="radio" name="transfer" value="OTP"> OTP
		<input type="radio" name="transfer" value="sccard"> 보안카드
	</div>
	
	<div>
		<button class="form-control" type="button" onclick="transfer()">이체</button>
	</div>


<!-- 사용자정의 js -->
<script src="/jigmBank/js/usesccard.js" type="text/javascript"></script>


</body>
</html>