<%@page import="java.util.Set"%>
<%@page import="java.util.TreeSet"%>
<%@page import="javax.print.attribute.HashPrintJobAttributeSet"%>
<%@page import="java.util.HashSet"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Arrays"%>
<%@page import="dao.AccountDao"%>
<%@page import="dto.Account"%>
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
		<%
			ArrayList<Account> account = AccountDao.getAccountDao().getaddaccount();
			for( Account a : account  ){ // 모든 제품 반복문
		%>
		<table>
			<tr>
				<th><%=a.getAcidno() %></th>	
				<th><%=a.getAcno() %></th> 
				<th><%=a.getAcname() %></th>	
				<th><%=a.getAcbirth() %></th> 	
				<th><%=a.getAcphone() %></th> 
				<th><%=a.getAcbalance() %></th> 
				<th><%=a.getAcactive() %></th> 
				<th><button type="button" onclick="change(<%=a.getAcidno()%>)">사용가능으로변경</button></th>
			</tr>
		<%
		
			}
		%>
		
	</table>
		<script src="/jigmBank/js/admin.js"type="text/javascript"></script>
		<!-- 부트스트랩 js cdn -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
		<!-- jquery 최신 cdn -->
		<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
		
</body>
</html>