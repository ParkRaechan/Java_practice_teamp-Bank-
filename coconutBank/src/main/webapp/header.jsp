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

<style type="text/css">
a{ text-decoration: none; color:#999999; }
a:hover{ color:#a284c0;}
</style>

</head>
<body>
	<div class="container">

		<div class="py-4">
			<div class="row"> <!-- row : 가로배치 -->
				<div class="col-md-3 headermaintop">
					<img alt="" src="img/bank.png" width="20%">
					<a href="/jigmBank/main.jsp" id="qwer" style="color:#429fdf; font-family: 'KOHIBaeumOTF'">지금은행</a>
				</div>
				
				<div class="headerlist col-md-6 offset-3">
					<ul class="nav"> <!-- nav : li 가로배치  -->

						<li><a href="#" onclick="pagechange('addaccount')">계좌 생성</a></li>
						<li><a href="#" onclick="pagechangesec('addsecuritycard')">보안카드 생성</a></li>
						<li><a href="#" onclick="pagechange('createsecurity')">OTP 생성</a></li>
						<li><a href="#" onclick="pagechangesec('usesccard')">보안카드 이체</a></li>
						<li><a href="#" onclick="pagechange('transfer')">OTP 이체</a></li>
						<li>상품</li>
						<li>예적금</li>
						<li>환율</li>
						
						<li><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						</button> </li>
					</ul>
				</div>
			</div>
			
			<div class="headerlist2 row col-md-5 offset-7">
					<ul class="nav"> <!-- nav : li 가로배치  -->
						<li style="font-family: 'KOHIBaeumOTF'">개인</li>
						<li style="font-family: 'KOHIBaeumOTF'">기업</li>
						<li><input class="headerlist2search" type="text" value="검색"></li>
						<li><img class="headerlist2searchicon" alt="" src="img/search.png"></li>
					</ul>
			</div>
			
			
		</div>
		
	
		
	</div> <!-- 컨테이너 끝 -->
	
	
		<script src="/jigmBank/js/main.js"type="text/javascript"></script>
		<!-- 부트스트랩 js cdn -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
		<!-- jquery 최신 cdn -->
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		
</body>
</html>