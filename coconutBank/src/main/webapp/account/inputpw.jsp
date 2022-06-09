<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>OTP 발급</title>
<style type="text/css">
@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
*{ font-family: 'SUIT-Medium'; }
</style>
</head>
<body>
<div class="container">


	<h4 style="text-align: center;"><b>OTP 발급</b></h4>
	
	<!-- 수정x -->
		<div class="row row-cols-7 offset-5" id="billboard"> </div>
		<div class="row row-cols-3" id="box"> </div>
		<div class="row row-cols-3" id="accin"> </div>
		 
		<h6 style="text-align: center;"> 생성할 OTP의 비밀번호를 입력해주십시오. </h6>
		 <!--   <div class="row row-cols-12" id="comment"> </div> -->
		  
		<div class="row row-cols-3" id="accin2"> </div>
 
	  
	  
</div> <!-- 컨테이너 종료 -->
<script src="/jigmBank/js/inputpw.js" type="text/javascript"></script>
<script type="text/javascript" src="./CryptoJS/rollups/hmac-sha256.js"></script>
<script type="text/javascript" src="./CryptoJS/components/enc-base64.js"></script>
</body>
</html>