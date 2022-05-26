package controller.account;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dto.Account;

/**
 * Servlet implementation class addaccount
 */
@WebServlet("/account/addaccount")
public class addaccount extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addaccount() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String accountno = request.getParameter("accountno");
		String accounthost = request.getParameter("accounthost");
		String birth = request.getParameter("birth");
		String phone = request.getParameter("phone");
		int balance = Integer.parseInt(request.getParameter("balance"));
		String inputpw = request.getParameter("accountpw");
		
		// salt 생성
		String salt = AccountDao.getaccAccountDao().getsalt();
		
		// 비밀번호 salt
		String hex = AccountDao.getaccAccountDao().sha256(salt, inputpw);
		System.out.println("salt값 :"+salt);
		System.out.println("hex값 :"+hex);
		
//		// 객체화
//		Account account = new Account(accountno, accounthost, birth, balance, accountpw, "사용가능");
//		// DAO처리
//		boolean result = AccountDao.getaccAccountDao().addaccount(account);
//		// 결과
//		if(result) {
//			response.getWriter().print(1);
//		}else {
//			response.getWriter().print(2);
//		}
		
	}

}
