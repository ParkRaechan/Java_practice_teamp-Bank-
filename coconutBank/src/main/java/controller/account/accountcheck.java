package controller.account;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dto.Encryption;

/**
 * Servlet implementation class accountcheck
 */
@WebServlet("/account/accountcheck")
public class accountcheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public accountcheck() {
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
		System.out.println("계좌번호확인");
		String accountno = request.getParameter("accountno");
			String acno = accountno.replace("-", ""); 
		String inputpw = request.getParameter("accountpw");
		System.out.println(acno);
		// 패스워드+키 추가
		String keypw = Encryption.getEncryption().keyplus(acno, inputpw);	
		// 비밀번호 암호화
		String hexpw = Encryption.getEncryption().sha256(keypw);
		System.out.println(hexpw);
		// 회원번호 출력
		int acidno = AccountDao.getAccountDao().getacidno(accountno);
		System.out.println(acidno);
		// 계좌비밀번호 확인
		boolean result = AccountDao.getAccountDao().passwordcheck(acidno, hexpw);
		
		// 결과
		if(result) { // 결과값이 존재하면
			response.getWriter().print(1);
		}else { // 결과값이 존재하지 않으면 -> 비밀번호 불일치
			response.getWriter().print(2);
		}
	
	}

}
