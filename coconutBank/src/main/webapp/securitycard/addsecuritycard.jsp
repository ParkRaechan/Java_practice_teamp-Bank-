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
		<h2 style="font-weight: bold;">보안 카드 생성</h2>
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
		<input maxlength='12' type="text" id="security__accnum" class="input__box security__small">
		</div>
		<div class="security__text">
		<div>계좌 비밀번호 4자리를 입력해주세요 </div>
		<input maxlength='4' type="text" id="security__accpwd" class="input__box">
		</div>
		<div class="security__text">
		<div>보안카드를 발급받을 이메일을 입력해주세요 </div>
		<input type="text" id="security__email" class="input__box security__small">
		</div>
		<div class="security__text">
		<div>생성완료 버튼을 눌러주세요 </div>
		<input type="button" onclick="addsccard()"  class="input__box security__small" value="생성">
		</div>
		<div id="security__err__text">
		 
		</div>
	</div>

	<script src="/jigmBank/js/security.js" type="text/javascript"></script>
</body>
</html>