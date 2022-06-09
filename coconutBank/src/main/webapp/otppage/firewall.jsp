<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- 부트스트랩 css cdn -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
<!-- 사용자정의 css -->
<link href="/jigmBank/css/main.css" rel="stylesheet">
<!-- 폰트어썸[ 아이콘 ]  -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
</head>
<body>
	<div class="py-4">

		<div class="row col-md-12"> <!-- row : 가로배치 -->
			<div class="col-md-4 offset-4"> <!-- offset 공백그리드 -->
				<ul class="nav" id="firewallagain"> <!-- nav : li 가로배치  -->
					<li><a href="#" onclick="pagechange('otpin')" id="otp0909">OTP발생</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="container" id="mainbox">
			<h3><br><br><br><br><br></h3><br> 
		</div>
	</div>
		
		<!-- jquery 최신 cdn -->
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		
		<script src="/jigmBank/js/firewall.js"type="text/javascript"></script>
		<!-- 부트스트랩 js cdn -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
		
</body>
</html>