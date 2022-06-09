<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
*{ font-family: 'SUIT-Medium'; 
}
<!--폰트 -->

.creatbtn{
	background-color: white;
	border: 2px solid gray;
	width : 180px;
	height : 60px;
	border-radius: 10px;
	font-size: 20px;
}
.createsecurity_otpinfo{
	border : 1px solid gray;
	font-size: 14px;
	color: gray;
	border-radius : 30px;
	padding: 20px;
	margin: 15px;
}

#otpmake{
margin-left: 100px;
}



</style>

</head>
<body>
<div class="container">
	
	
		<h4 style="text-align: center;"><b>OTP 발급</b></h4>
		<form id="addform">
			
			<div class="row" id="otpmake">
					<h5 style="text-align: center;">OTP를 생성하시려면 우측의 이미지를 클릭해주세요.</h5>
				<div class="col-md-5">					
					<div class="createsecurity_otpinfo">
						<b style="font-size: 16px">모바일OTP란?</b> <br><br>
						모바일OTP는 실물OTP없이 발급받아 사용할 수 있는 보안매체 입니다. <br>
						○ 모바일OTP는 하나만 발급 받을 수 있으며, 발급 받은 모바일 OTP는 지금은행 외 타은행에서도 사용하실 수 있습니다. <br>
						○ 타명의 스마트폰에서 발급은 불가하며 1인 1 OTP만 발급 가능합니다. <br>
						○ 이체한도 1회: 5천만원, 1일: 2억5천만원 <br>
						○ 보안카드/실물OTP와 이체 한도 차이가 있으므로 유의하시기 바랍니다. <br>
						○ 모바일OTP발급 시 기존의 보안매체는 해제됩니다. <br>
						○ 신분증촬영을 통해 발급 신청 시 비영업시간, 비영업일에 발급 신청하신 경우 익영업일에 실명인증을 확인합니다. <br>
					</div>
				</div>
				
				<div class="col-md-5">
					<img alt="" src="img/OTP발생기.png" id="otpimg" onclick="pagechange('inputpw')">
				</div>
			</div>
		
		</form>
		
<!--컨테이너 끝 -->
</div>
	
	<script src="/jigmBank/js/main.js" type="text/javascript"></script>
</body>
</html>