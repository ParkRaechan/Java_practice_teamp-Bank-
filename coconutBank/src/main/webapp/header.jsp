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
<link href="/jigmBank/css/main.css?ver=1" rel="stylesheet">
<!-- 폰트어썸[ 아이콘 ]  -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">

</head>
<body>
	<div class="container">
		<div class="py-4">
			<div class="row col-md-12"> <!-- row : 가로배치 -->
				<div class="col-md-4"> <!-- 그리드[12조각중 4 ] -->
					<a href="/jigmBank/main.jsp" id="qwer">지금은행</a>
				</div>
				<div class="col-md-4 offset-4"> <!-- offset 공백그리드 -->
				
					<ul class="nav"> <!-- nav : li 가로배치  -->
						<li><a href="#" onclick="pagechange('addacount')">계좌 생성</a></li>
						<li> </li>
						<li><a href="#" onclick="pagechangesec('addsecuritycard')">보안 카드 생성</a></li>
						
					</ul>
				</div>
			</div>
		</div>
		<div class="container" id="mainbox">
			<h3><br><br><br><br><br>비동기 메인페이지</h3><br> 
		</div>
	</div>
	
		<script src="/jigmBank/js/main.js"type="text/javascript"></script>
		<!-- 부트스트랩 js cdn -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
		<!-- jquery 최신 cdn -->
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		
</body>
</html>