<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="/jigmBank/css/security.css" rel="stylesheet">
</head>
<body>
	<div class="security__main__container">
		<h2>보안 카드 생성</h2>
		<div class="security__text active">
		<div>비밀번호로 사용 할 숫자 6자리를 입력해주세요.</div>
		<input maxlength='6' type="text" id="security__password" class="input__box" >
		</div>
		 
		<div class="security__text">
		<div>비밀번호로 사용 할 숫자 6자리를 다시 입력해주세요.</div>
		<input maxlength='6' type="text" id="security__password__confirm" class="input__box">
		</div>
		
		<div class="security__text">
		<div>보안카드를 사용하실 계좌를 "-"를 제외하고 입력 해주세요</div>
		<input maxlength='12' type="text" id="security__accnum" class="input__box">
		</div>
		
		<div class="security__text">
		<div>계좌 비밀번호 4자리를 입력해주세요 </div>
		<input maxlength='4' type="text" id="security__accpwd" class="input__box">
		</div>
		<div class="security__text">
		<div>생성완료 버튼을 눌러주세요 </div>
		<input type="button" onclick="addsccard()"  class="input__box">
		</div>
		<!--  
		<div class="security__text">
		<div>휴대폰 번호를 "-" 를 제외하고 입력해 주세요 </div>
		<input maxlength='11' type="text" id="security__phone__num" class="input__box">
		</div>
		<div class="security__text">
		<div>계좌 비밀번호 4자리를 입력해주세요 </div>
		<input maxlength='4' type="text" id="security__phone__cer" class="input__box">
		</div>
		-->
		<div id="security__err__text">
		 
		</div>
	</div>

	<script src="/jigmBank/js/security.js" type="text/javascript"></script>
</body>
</html>