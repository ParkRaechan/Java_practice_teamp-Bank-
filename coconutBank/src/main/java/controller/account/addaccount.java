package controller.account;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dto.Account;
import dto.Encryption;


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
		String accounthost = request.getParameter("accounthost");
		String birth = request.getParameter("birth");
		String phone = request.getParameter("phone");
		String accountno = request.getParameter("accountno");
			String acno = accountno.replace("-", ""); 
			System.out.println(acno);
		int balance = Integer.parseInt(request.getParameter("balance"));
		String inputpw = request.getParameter("accountpw");
		
		// 패스워드+키 추가
		String keypw = Encryption.getEncryption().keyplus(acno, inputpw);
		// 비밀번호 암호화(DB저장 비밀번호)
		String dbpw = Encryption.getEncryption().sha256(keypw);
		
		// 객체화
		Account account = new Account(0, accountno, dbpw, accounthost, birth, phone, balance, "사용불가", "null", "null");
		boolean result = AccountDao.getAccountDao().addaccount(account);
		// 결과
		if(result) {
			response.getWriter().print(1);
		}else {
			response.getWriter().print(2);
		}
		
	}

}
