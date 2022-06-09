<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>보안 발급</title>
<style type="text/css">
@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


*{ border: 1px solid green;
font-family: 'SUIT-Medium'; }

.creatbtn{
	background-color: white;
	border: 2px solid gray;
	width : 150px;
	height : 60px;
	border-radius: 10px;
	font-size: 20px;
}

.createsecurity_otpinfo{
	font-size: 14px;
	color: gray;
	border : 1px solid ligthgray;
	border-radius : 30px;
	padding: 20px;
	margin: 15px;
}


</style>

<!-- 부트스트랩 css cdn -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >

</head>
<body>
<%@include file = "../header.jsp" %>
<div class="container">

	<div class="createsecurity">
		<h4 style="text-align: center;"><b>보안 발급</b></h4>
		<form id="addform">
			<br><br><br>
			<div class="row">
			
				<div class="col-md-6">
					<div class="createsecurity_otpinfo">
					<b style="font-size: 16px">모바일OTP란?</b> <br>
					모바일OTP는 실물OTP없이 발급받아 사용할 수 있는 보안매체 입니다. <br>
					○ 모바일OTP는 하나만 발급 받을 수 있으며, 발급 받은 모바일 OTP는 지금은행 외 타은행에서도 사용하실 수 있습니다. <br>
					○ 타명의 스마트폰에서 발급은 불가하며 1인 1 OTP만 발급 가능합니다. <br>
					○ 이체한도 1회: 5천만원, 1일: 2억5천만원 <br>
					○ 보안카드/실물OTP와 이체 한도 차이가 있으므로 유의하시기 바랍니다. <br>
					○ 모바일OTP발급 시 기존의 보안매체는 해제됩니다. <br>
					○ 신분증촬영을 통해 발급 신청 시 비영업시간, 비영업일에 발급 신청하신 경우 익영업일에 실명인증을 확인합니다. <br>
					</div>
					<div class="col-md-2 offset-4">
						<button class="creatbtn" type="button" onclick="pagechange('inputpw')">OTP 발급 신청</button> 
					</div>
				</div>	
					
				<div class="col-md-6">	
					<div class="createsecurity_otpinfo">				
					</div>
					
					<div class="col-md-2">
						<button class="creatbtn" type="button" onclick="#)">보안카드 발급 신청</button>
					</div>
				</div>
			
			</div>
		
		</form>
		
		
	</div>

<!-- 컨테이너 끝 -->
</div>
<script src="/jigmBank/js/main.js" type="text/javascript"></script>
</body>
</html>