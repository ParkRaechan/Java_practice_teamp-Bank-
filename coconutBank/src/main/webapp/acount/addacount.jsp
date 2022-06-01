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
	<div class="container">
			<div class="container" id="addmember">
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 예금주 </span>
					</div>
					<div class="col-md-5">
						<input id="accounthost" class="form-control" type="text" placeholder="예금주"> 
					</div>
					<div class="col-md-2" id="namecheck"></div>
				</div>
---------------------------------------------	
				<div class="row ">	
					<div class="col-md-4 " >
						<span> 생년월일 </span>
					</div>
					<div class="col-md-5">
						<p><input id="birth" type="date"></p>
					</div>
					<div class="col-md-2" id="birthcheck"></div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 휴대전화번호 </span>
					</div>
					<div class="col-md-5">
						<input id="phone" class="form-control" type="text" placeholder="휴대전화번호"> 
					</div>
					<div class="col-md-2" id="phonecheck"></div>
				</div>
---------------------------------------------	
				<div class="col-md-5">
					<button class="form-control" type="button" onclick="next()">다음</button> <!-- js에서 form 비동기 통신  -->
				</div>
			</div>
			
<!-- --------------------------------------- 계좌생성 -------------------------------------------------- -->
			<br><br>
			<div  class="container" id="addcount" style="display: none">	
				<div class="row ">
					<div class="col-md-4 ">
						<span> 계좌번호 </span>
					</div>
					<div class="col-md-5">
						<div id="accountno" class="form-control"></div>
					</div>
				</div>
---------------------------------------------	
				<div class="row ">
					<div class="col-md-4 " >
						<span> 예금액 </span>
					</div>
					<div class="col-md-5">
						<input id="balance" class="form-control" type="text" placeholder="예금액" onkeyup="input(this)"> 원
					</div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 계좌비번 </span>
					</div>
					<div class="col-md-5">
						<input id="accountpw" class="form-control" type="text" placeholder="계좌비번"> 
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
		</div>
		
		
	</div>
	
	
	<script src="/jigmBank/js/addaccount.js" type="text/javascript"></script>
</body>
</html>