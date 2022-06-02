<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%@include file = "../header.jsp" %>

<div class="container">
	<div class="row "> <!-- 계좌번호 입력 -->
		<div class="col-md-4 ">
			<span> 계좌번호 </span>
		</div>
		<div class="col-md-5">
			<input id="accountno" class="form-control" type="text" placeholder="계좌번호 입력">
		</div>
	</div>
	
	<div class="row "> <!-- 계좌비밀번호 입력 -->
		<div class="col-md-4 " >
			<span> 계좌비번 </span>
		</div>
		<div class="col-md-5">
			<input id="accountpw" class="form-control" type="password" placeholder="계좌비밀번호 입력" maxlength="4"> 
		</div>
	</div>
	<div>
		<button class="form-control" type="button" >확인</button> 
	</div>
	
</div>

<%@include file = "../footer.jsp" %>

</body>
</html>