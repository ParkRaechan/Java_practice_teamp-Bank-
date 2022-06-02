<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/jigmBank/css/security.css?ver=1" rel="stylesheet">
</head>
<body>
	<div class="security__main__container">
		<h2>보안 카드 생성</h2>
		<div class="security__text active">
		<div>비밀번호로 사용 할 숫자 6자리를 입력해주세요.</div>
		<input maxlength='6' type="text" id="security__password" class="input__box">
		</div>
		 
		<div class="security__text">
		<div>비밀번호로 사용 할 숫자 6자리를 다시 입력해주세요.</div>
		<input maxlength='6' type="text" id="security__password__confirm" class="input__box">
		</div>
		
		<div class="security__text">
		<div>보안카드를 사용하실 계좌를 입력 해주세요</div>
		<input maxlength='14' type="text" class="security__password input__box">
		</div>
		
		<div class="security__text">
		<div>비밀번호로 사용할 숫자 6자리를 입력해주세요.</div>
		<input maxlength='6' type="text" class="security__password input__box">
		</div>
		<div id="security__err__text">
		 
		</div>
	</div>
	<script src="/jigmBank/js/security.js"></script>
</body>
</html>