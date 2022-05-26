<%@page import="dao.AccountDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>계좌추가</h3>
	<div>
			<form id="addform" class="col-md-11">
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 계좌번호[임시입력 - 원래는 112로 시작하는 난수(14자리)] </span>
					</div>
					<div class="col-md-5">
						<input id="accountno" class="form-control" type="text" placeholder="계좌번호"> 
					</div>
				</div>
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 예금주 </span>
					</div>
					<div class="col-md-5">
						<input id="accounthost" class="form-control" type="text" placeholder="예금주"> 
					</div>
				</div>
---------------------------------------------	
				<div class="row ">	
					<div class="col-md-4 " >
						<span> 생년월일 </span>
					</div>
					<div class="col-md-5" id="birthday">
						
					<div class="col-md-5">
						<p><input id="birth" type="date"></p>
					</div>
						
					</div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 휴대전화번호 </span>
					</div>
					<div class="col-md-5" id="birthday">
					
					<div class="col-md-5">
						<input id="phone" class="form-control" type="text" placeholder="휴대전화번호"> 
					</div>
						
					</div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 예금액 </span>
					</div>
					<div class="col-md-5" id="birthday">
					
					<div class="col-md-5">
						<input id="balance" class="form-control" type="text" placeholder="예금액"> 
					</div>
						
					</div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 계좌비번 </span>
					</div>
					<div class="col-md-5" id="birthday">
					
					<div class="col-md-5">
						<input id="accountpw" class="form-control" type="text" placeholder="계좌비번"> 
					</div>
						
					</div>
				</div> 
---------------------------------------------	

			<br><br><br>
			<div class="row">
				<div class="col-md-5">
					<button class="form-control" type="button" onclick="add()">계좌등록</button> <!-- js에서 form 비동기 통신  -->
				</div>
				<div class="col-md-5">
					<input class="form-control" type="reset" value="초기화">
				</div>
			</div>
		
		</form>
		
		
	</div>
	<%
	String salt = AccountDao.getaccAccountDao().getsalt();
	
	String hex = AccountDao.getaccAccountDao().sha256(salt, "1234");
	System.out.println("salt값 :"+salt);
	System.out.println("hex값 :"+hex);
	%>
	
	
	<script src="/jigmBank/js/addaccount.js" type="text/javascript"></script>
</body>
</html>