<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보안카드사용이체</title>
<style type="text/css">
	*{font-family: "SUIT-Medium"; }
	.usercardinfobox{
		border: 1px solid gray;
		padding:20px;
		border-radius: 20px;
	}
	.usercardinfobox input{	width: 300px;
	    margin-left: 50px;
	    margin-right: 50px;
	    margin-bottom: 20px;
	}
	   
	.usercardinfobox button{
		width: 100px;
		margin-left: 140px;
	}
	.usercardinfoboxlittle input{	width: 300px;
	    margin-left: 50px;
	    margin-right: 50px;
	    margin-bottom: 20px;
	}
	.usercardinfoboxlittle button{
		width: 100px;
		margin-left: 140px;
	}
</style>
</head>
<body>
	
	<h3 style="text-align: center;">보안카드 사용이체</h3>
	<h4 style="text-align: center;">계좌번호 입력</h4>
	<div class="container usercardinfobox col-md-4 offset-4">
		<input id="achostno" name="achostno" class="form-control"  placeholder="어떤 계좌에서 보내시겠습니까?" rows=3>
		<input id="acguestno" name="acguestno" class="form-control"  placeholder="어떤 계좌로 보내시겠습니까?" rows=3>
		<input id="trfamount" name="trfamount" class="form-control"  placeholder="얼마를 보내시겠습니까?" rows=3 onkeyup="input(this.value)">
		<button class="form-control" type="button" onclick="acpwview()">입력</button>
		<span id="acccheckspan" name="acccheckspan"></span> <!-- onclick="usesccard()"  -->
	</div>
	<br><br>
	<div class="usercardinfoboxlittle col-md-4 offset-4" id="accountcheck" style="display: none;">
		<input class="form-control" type="text" id="acpw" maxlength="4" placeholder="계좌비밀번호">
		<button class="form-control" onclick="acpwcheck()">확인</button>
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
		 for(int i = 0; i<6; i++){
		%>
			<div class="row">
			
			</div>	
		<%	for(int j = 0; j <= 4; j++){ %>
			<div class="col-md-2">
				<div class="row">
					<span class="col-md-6"><%=i+1+(j*6) %></span>
					<span class="col-md-6">****</span>
				</div>
			</div>
		<% }} %>
		</div>
	</div>
	
	<!-- 사용자 입력부분 -->
	<div class="container" style="border: solid 1px #999999; width: 500px;">
		<div style="margin-left: 20px; margin-top: 10px;"> <!-- ////////////////////////////////////////////////////////////////////////// -->
		
		<div class="row"> <!-- 첫번째 칸 -->
			<div class="col-md-8"> <!-- 숫자입력부분 -->
				<input type="text" id="boxno1">●●
			</div>
			<div class="col-md-4" id="ranbox1">
				
			</div>
		</div>
		<div class="row" style="margin-top: 10px;"> <!-- 두번째 칸 -->
			<div class="col-md-8"> <!-- 숫자입력부분 -->
				●●<input type="text" id="boxno2">
			</div>
			<div class="col-md-4" id="ranbox2">
				
			</div>
		</div>
		</div> <!-- ////////////////////////////////////////////////////////////////////////// -->
		<!-- ////////////////////////////////////////////////////////////////////////// -->
		<div class="row" style="margin: 20px 0px;">
			<div class="col-md-3 offset-2">
				<button class="form-control" onclick="transfer()">이체</button>
			</div>
			<div class="col-md-3 offset-2">
				<button class="form-control">취소</button>
			</div>
		</div>
		<!-- ////////////////////////////////////////////////////////////////////////// -->
	</div>

	</div>
<!-- 사용자정의 js -->
<script src="/jigmBank/js/usesccard.js" type="text/javascript"></script>


</body>
</html>