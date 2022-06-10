<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
*{font-family:"SUIT-Medium"; }
.sendaccountinput{
	border: 1px solid gray;
	border-radius: 20px;
	padding: 20px;
}
.sendaccountinput input{
	width: 300px;
	margin-left: 50px;
	margin-right: 50px;
}
.sendaccountinput button{
	width: 100px;
	margin-left: 140px;
}
#box{
display : block;
margin: 0 auto;
width: 300px;
}
#box button{
width:80px;
height:60px;
background-color: white;
color:gray;
border: 1px solid gray;
}
</style>
</head>
<body>
	<h3 style="text-align: center;">OTP사용이체</h3>
	<div class="container">
	  <div class="row row-cols-7 offset-5" id="billboard">

	  </div>
	  <div class="row row-cols-3" id="box">

	  </div>
	  <div class="row row-cols-3" id="accin">

	  </div>
	  <div class="row row-cols-12" id="comment">

	  </div>
	</div>
	<script src="/jigmBank/js/inputpw2.js" type="text/javascript"></script>
</body>
</html>