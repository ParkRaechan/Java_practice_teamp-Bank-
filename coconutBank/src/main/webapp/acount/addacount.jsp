<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>계좌생성</h3>
	<div>
			<form id="addform" class="col-md-11">
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 계좌번호[임시입력 - 원래는 112로 시작하는 난수(14자리)] </span>
					</div>
					<div class="col-md-5">
						<input class="form-control" type="text" name="num" id="num" placeholder="계좌번호"> 
					</div>
				</div>
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 예금주 </span>
					</div>
					<div class="col-md-5">
						<input class="form-control" type="text" name="name" id="name" placeholder="예금주"> 
					</div>
				</div>
---------------------------------------------	
				<div class="row ">	
					<div class="col-md-4 " >
						<span> 생년월일 </span>
					</div>
					<div class="col-md-5">
						
					<div class="col-md-5">
						<p><input type="date" name="birth" id="birth"></p>
					</div>
						
					</div>
				</div>
---------------------------------------------				
				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 예금액 </span>
					</div>
					<div class="col-md-5">
					
					<div class="col-md-5">
						<input class="form-control" type="text" name="money" id="money" placeholder="예금액"> 
					</div>
						
					</div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 계좌비번 </span>
					</div>
					<div class="col-md-5">
					
					<div class="col-md-5">
						<input class="form-control" type="text" name="pw" id="pw" placeholder="계좌비번"> 
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
	
	<script src="/jigmBank/js/makeacount.js" type="text/javascript"></script>
</body>
</html>