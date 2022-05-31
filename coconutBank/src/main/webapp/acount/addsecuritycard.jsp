<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>보안카드 생성</h3>
	<div>
		<form id="addform" class="col-md-11">
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 보안카드 비밀번호 설정 </span>
					</div>
					<div class="col-md-5">
						<input class="form-control" type="text" placeholder="보안카드 비밀번호 6자리"> 
					</div>
				</div>
---------------------------------------------
				<div class="row ">
					<div class="col-md-4 ">
						<span> 보안카드 비밀번호 확인 </span>
					</div>
					<div class="col-md-5">
						<input class="form-control" type="text" placeholder="보안카드 비밀번호 6자리"> 
					</div>
				</div>
---------------------------------------------	
				<div class="row ">	
					<div class="col-md-4 " >
						<span> 계좌 번호 입력 </span>
					</div>
					<div class="col-md-5">
						<input class="form-control" type="text" placeholder="계좌번호 11자리 입력"> 
					</div>
						
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 계좌 비밀번호 </span>
					</div>
					<div class="col-md-2">
							<input class="form-control" type="text" placeholder="계좌비밀번호">
					</div>
					<div class="col-md-4"><input type="button" class="btn1" value="비밀번호 확인">
					</div>
							
					
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 핸드폰 인증 </span>
					</div>
					<div class="col-md-2">
							<input class="form-control" type="text" placeholder="휴대폰 번호 입력">
					</div>
					<div class="col-md-4"><input type="button" class="btn1" value="인증번호 전송">
					</div>
				</div>
---------------------------------------------				
				<div class="row ">
					<div class="col-md-4 " >
						<span> 인증번호 </span>
					</div>
					<div class="col-md-5" id="birthday">
					
					<div class="col-md-5">
						<input class="form-control" type="text" placeholder="인증번호 입력"> 
					</div>
						
					</div>
				</div> 
---------------------------------------------	

			<br><br><br>
			<div class="row">
				<div class="col-md-5">
					<button class="form-control" type="button" onclick="add()">보안카드 생성하기</button> <!-- js에서 form 비동기 통신  -->
				</div>
				<div class="col-md-5">
					<input class="form-control" type="reset" value="초기화">
				</div>
			</div>
		
		</form>
		
		
	</div>
</body>
</html>