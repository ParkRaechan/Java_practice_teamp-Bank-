<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지금은행</title>

<style type="text/css">
#acodimain{font-family: 'SUIT-Medium';}
.h3font{color:#191970;}
.recobox{ font-family : "SUIT-Medium"; }
a{font-family : "SUIT-Medium"; color : white; text-decoration: none; }
a:hover{ color:#a284c0;}
</style>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>
<body>
	<%@include file = "header.jsp" %>
	
	
<div class="container" id="mainbox">

<!-- -------------캐러셀 시작 -------------------- -->
	<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
	  <div class="carousel-inner">
	    <div class="carouselimg carousel-item active">
	      <img alt="" src="img/main_1.png" width="255%">
			<div class="carousel-caption carouselbox">
				<ul class="nav">
					<li>조회</li>
					<li><a href="#" onclick="pagechange('usesccard')" style="color:white;">이체</a></li>
					<li><a href="#" onclick="pagechange('make')" style="color:white;">발급</li>
				</ul>
			</div>
			<div class="carousel-caption carouselbox2">
				<ul class="nav">
					<li>금융소비자보호</li>
					<li>뱅킹보안관리</li>
					<li>서민금융</li>
					<li>비교조회서비스</li>
					<li>상품공시실</li>
				</ul>			
			</div>
	    </div>
	    
	    <div class="carousel-item">
	      <img alt="" src="img/main_2.png"  width="255%">
			<div class="carousel-caption carouselbox">
				<ul class="nav">
					<li>조회</li>
					<li><a href="#" onclick="pagechange('usesccard')" style="color:white;">이체</a></li>
					<li>발급</li>
				</ul>
			</div>
			<div class="carousel-caption carouselbox2">
				<ul class="nav">
					<li>금융소비자보호</li>
					<li>뱅킹보안관리</li>
					<li>서민금융</li>
					<li>비교조회서비스</li>
					<li>상품공시실</li>
				</ul>			
			</div>
	    </div>
	    
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
	    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
	    <span class="carousel-control-next-icon" aria-hidden="true"></span>
	    <span class="visually-hidden">Next</span>
	  </button>
		
	<!-- 버튼 id 타겟을 가져오기 --> <!-- 왼쪽 이동 버튼 -->
		<button class="carousel-control-prev" type="button" data-bs-target="#mainslide" data-bs-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</button>
	<!-- 오른쪽 이동 버튼 -->
		<button class="carousel-control-next" type="button" data-bs-target="#mainslide" data-bs-slide="next">
			<span class="carousel-control-next-icon"></span>
		</button>

	</div> <!------------------------ 캐러셀 끝 ----------------------------->


	<br>
	<div class="row">
		<img alt="" src="img/asd.jpg">
	</div>
	<br>

	<!-- --------------------------------------------------- -->
	
	
	<div class="adblock">
		<h5 style="font-family: 'SUIT-Medium'; margin-left: 60px;"> 주요 서비스 </h5>
		
		<div class="adblockone">
			<ul class="nav">
				<li>예/적금 신규</li>
				<li>자동 이체</li>
				<li>공과금납부</li>
				<li>인터넷환전</li>
				<li>카드간편신청</li>
			</ul>
		</div>
		<br>
		<div class="adservice" id="acodimain">
			<div class="accordion" id="accordionExample">
			  <div class="accordion-item">
			    <h2 class="accordion-header" id="headingOne">
			      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
			        뱅킹 시스템 업그레이드 완료 안내
			      </button>
			    </h2>
			    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
			      <div class="accordion-body">
					지금은행을 이용해주시는 고객 여러분께 진심으로 감사드립니다. <br>
					더 나은 서비스 제공을 위한 시스템 업그레이드 작업이 조기에 성공적으로 완료되어, <strong> 현재 지금은행의 금융거래 서비스를 정상적으로 이용하실 수 있습니다. </strong>
					<br>
					서비스 일시 중지로 인해 불편을 겪으신 고객 여러분께 양해를 부탁드리며, 항상 편리하고 안정적인 서비스를 제공하기 위해 최선을 다하겠습니다. 감사합니다.
			      </div>
			    </div>
			  </div>
			  <div class="accordion-item">
			    <h2 class="accordion-header" id="headingTwo">
			      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			        개인정보 노출사실 전파 업무 개정 공지
			      </button>
			    </h2>
			    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
			      <div class="accordion-body">
					1. 개인정보 노출사실 전파 신청의 변경 내용 <br>
					-지금은행 인터넷 뱅킹/모바일 뱅킹 사용 전면 차단 (지금은행만 차단됨) <br>
					2. 실행힐 : 2021.11.18 <br>
					3. 예외적으로 인터넷 뱅킹/모바일 뱅킹 사용을 원하는 경우 <br>
					-영업점 방문하여 본인 확인후 인터넷 뱅킹/모바일 뱅킹 별도 허용 신청 가능
			      </div>
			    </div>
			  </div>
			  <div class="accordion-item">
			    <h2 class="accordion-header" id="headingThree">
			      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			        보이스피싱 사기주의(2030 대상 취업미끼 비대면 대출사기를 빙자한 보이스피싱)
			      </button>
			    </h2>
			    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
			      <div class="accordion-body">
					최근 구직자들(특히, 20~30대)의 절박한 심정을 악용한 취업미끼 비대면대출 등을 빙자하여, <strong>사칭앱 및 구직신청서 상 중요 개인정보 등을 탈취하여 비대면 대출 실행 후 대출금을 편취하는 보이스피싱 시도가 증가</strong>하고 있으니, 피해에 각별히 유의해주시기 바랍니다. <br>
					▶자세 사례 확인
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	
	</div>
	<br><br>
	
	
	<!-- ------------------------------------------------------ -->
	

	<div class="recommend">
		<h5 class="h3font"> 지금은행의 <span style="color:#ffa07a;">추천 상품</span>을 확인해 보세요.</h5>
		<div class="recobox row">
			<div class="box1" style="display: block; margin: 0 auto;">
				<p>
				<img alt="" src="img/pack (1).png"> <br><br>
				<span style="font-size: 20px; color:#0076be">지금 안녕,반가워 적금</span> <br><br>
				새롭게 금융거래를 시작하는 <br>
				고객님을 응원하는 적금! <br>
				</p>
			</div>
			<div class="box2" style="display: block; margin: 0 auto;">
				<p>
				<img alt="" src="img/pack (2).png"> <br><br>			
				<span style="font-size: 20px; color:#0076be">주택청약 종합저축</span> <br><br>
				내집마련과 목돈마련 준비 <br>
				주택정약종합저축으로 한번에!
				</p>
			</div>
			<div class="box3" style="display: block; margin: 0 auto;">
				<p>
				<img alt="" src="img/pack (3).png"> <br><br>				
				<span style="font-size: 20px; color:#0076be">지금 MY CAR 대출</span> <br><br>
				자동차 구입시 은행 방문없이 <br>
				대출실행까지 되는 자동차대출
				</p>
			</div>
			<div class="box4" style="display: block; margin: 0 auto;">
				<p>
				<img alt="" src="img/pack (4).png"> <br><br>				
				<span style="font-size: 20px; color:#0076be">신한골드리슈골드테크</span> <br><br>
				지금의 입출금 거래가 <br>
				자유로운 대표 골드상품
				</p>
			</div>
		</div>
	</div>

	
	<!-- --------------------------------------------- -->

</div> <!-- 컨테이너 -->
	
	<%@include file = "footer.jsp" %>
	
	<!-- 사용자 정의 js -->
	<script src="/jigmBank/js/main.js"type="text/javascript"></script>
</body>
</html>