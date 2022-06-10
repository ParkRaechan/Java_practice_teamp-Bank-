<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title>계좌 추가 생성</title>
<style type="text/css">
*{font-family:'SUIT-Medium';
}
</style>

</head>
<body>
	
	<div class="container" id="addaccountbox">
		<h4 style="text-align: center;"><b>계좌 추가 생성</b></h4>	
			<div class="container row" id="addmember">
				<div class="col-md-6 addbox">
				<p>
					<b style="font-size:20px;"> 비대면 계좌 개설 안내</b> <br>
					<span style="font-size: 18px;">언제 어디서나 빠르고 편리하게!</span> <br>
					영업점 방문 없이 지금은행 웹/앱에서 계좌개설 및 전자금융서비스 신청이 가능합니다.<br>
					계좌개설 시, 
					<span style="color:#a284c0">①개인정보(신용)정보 수집 · 이용 · 제공 전체 동의 ②[필수] 개인(신용)정보 수집 · 이용 동의서(비여신 금융거래) ③[필수] 개인(신용)정보 제3자 제공 동의서 ④[필수] 개인(신용)정보 수집 · 이용 · 제공 동의서(비대면 통장 · 카드 동시발급) ⑤[필수] 고객정보 취급방침</span>
					에 동의하였다고 간주하므로 이에 주의해주시기 바랍니다.
					<br><br>
					
					<b>이용 가능 고객</b> <br>
						◆만 19세 이상의 내국인<br>
						◆신분증 소지자(주민등록증 또는 운전면허증)<br>
						◆본인명의 휴대폰 소지자<br>
						◆본인명의 입출금이 가능한 타금융사 계좌 보유<br>
				</p>
				</div>
				
				<div class="col-md-6 addbox2">

					<div class="row">
						<div class="col-md-3 offset-1">
							<span> 예금주 </span>
						</div>
						<div class="col-md-5">
							<input id="accounthost" class="form-control" type="text" placeholder="예금주"> 
						</div>
					</div>
					<div class="col-md-5 offset-1" id="namecheck"></div>
	<hr>
					<div class="row">	
						<div class="col-md-3 offset-1" >
							<span> 생년월일 </span>
						</div>
						<div class="col-md-5">
							<p><input id="birth" type="date"></p>
						</div>
					</div>
					<div class="col-md-5 offset-1" id="birthcheck"></div>
	<hr>
			
					<div class="row">
						<div class="col-md-3 offset-1" >
							<span> 휴대전화번호 </span>
						</div>
						<div class="col-md-5">
							<input id="phone" class="form-control" type="text" placeholder="010-0000-0000 형식"> 
						</div>
					</div>
					<div class="col-md-5 offset-1" id="phonecheck"></div>
	<hr>
			<div class="form-check  offset-1">
			  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
			 <label class="form-check-label" for="flexCheckChecked">
			    [선택] 개인(신용)정보 수집 · 이용 동의서(상품 서비스 안내 등)
			 </label>
			</div>
	<hr>
	
					<div class="col-md-2 offset-7">
						<button class="form-control" type="button" onclick="next()">다음</button> <!-- js에서 form 비동기 통신  -->
					</div>
				</div>
			</div>
			
			
<!-- --------------------------------------- 계좌생성 -------------------------------------------------- -->
			<br><br>
			<div  class="container col-md-6 offset-6" id="addcount" style="display: none">	
				<div class="row ">
					<div class="col-md-3 offset-1">
						<span> 계좌번호 </span>
					</div>
					<div class="col-md-5">
						<div id="accountno" class="form-control"></div>
					</div>
				</div>
<hr>	
				
				<div class="row ">
					<div class="col-md-3 offset-1" >
						<span> 예금액 </span>
					</div>
					<div class="col-md-5">
						<input id="balance" class="form-control" type="text" placeholder="예금액(단위:원)" onkeyup="input(this.value)">
					</div>
				</div>
<hr>				
				<div class="row ">
					<div class="col-md-3 offset-1" >
						<span> 비밀번호 </span>
					</div>
					<div class="col-md-5">
						<input id="accountpw" class="form-control" type="password" placeholder="계좌 비밀번호" maxlength="4"> 
					</div>
				</div> 
<hr>	
			<div class="row">
				<div class="col-md-2 offset-7">
					<button class="form-control" type="button" onclick="add()">계좌등록</button> <!-- js에서 form 비동기 통신  -->
				</div>
				<div class="col-md-2">
					<input class="form-control" type="reset" value="초기화">
				</div>
			</div>
		</div>
		
		
	</div>
	
	
	<script src="/jigmBank/js/addaccount.js" type="text/javascript"></script>
	
	<script src="/jigmBank/js/addaccount.js" type="text/javascript"></script>
</body>
</html>