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
		<input type="radio" name="way" value="OTP"> OTP
		<input type="radio" name="way" value="sccard"> 보안카드
	</div>
	
	<div>												<!-- onclick="transfer()" -->
		<button class="form-control" type="button" onclick=" selectway()">다음</button>
	</div>
	
	
	<div id="sccard" style="display: none;">
	<!-- 보안카드사용 -->
	<div class="container" style="border: solid 1px #999999; width: 500px;">
		<div class="row"> <!-- 로고 & 일련번호 -->
			<div class="col-md-4">지금은행</div>
			<div class="col-md-4 offset-4">No. **********</div>
		</div>
		<div class="row"> <!-- 보안카드 박스 -->	
			<%
				for(int i = 0; i<30; i++){
					if(i%6 == 0){
			%>
					<div class="col-md-2">
						<div class="row">
							<span class="col-md-6"><%=i+1 %></span>
							<span class="col-md-6">****</span>
						</div>
					</div>
			<% 		}else{%>
					
			<% 		
					} 
				}
			%>	
	
		</div>
	</div>
	
	<!-- 사용자 입력부분 -->
	<div class="container" style="border: solid 1px #999999; width: 500px;">
		<div class="row"> <!-- 첫번째 칸 -->
			<div class="col-md-8"> <!-- 숫자입력부분 -->
				<input type="text" id="boxno1">●●
			</div>
			<div class="col-md-4" id="ranbox1">
				
			</div>
		</div>
		<div class="row"> <!-- 두번째 칸 -->
			<div class="col-md-8"> <!-- 숫자입력부분 -->
				●●<input type="text" id="boxno2">
			</div>
			<div class="col-md-4" id="ranbox2">
				
			</div>
		</div>
		<div class="row">
			<button class="col-md-3" onclick="transfer()">이체</button>
			<button class="col-md-3">취소</button>
		</div>
	</div>

	</div>
<!-- 사용자정의 js -->
<script src="/jigmBank/js/usesccard.js" type="text/javascript"></script>


</body>
</html>