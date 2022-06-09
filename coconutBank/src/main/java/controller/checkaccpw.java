package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dto.Encryption;

/**
 * Servlet implementation class checkaccpw
 */
@WebServlet("/checkaccpw")
public class checkaccpw extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public checkaccpw() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("연동확인");
		try {
			request.setCharacterEncoding("UTF-8");
			String pww3 = request.getParameter("pww3");
			String accnumr = request.getParameter("accnumr");
			String acno = accnumr.replace("-", ""); 
			
			// 패스워드+키 추가
			String pww3_0 = Encryption.getEncryption().keyplus(acno, pww3);	
			// 비밀번호 암호화
			String hexpw = Encryption.getEncryption().sha256(pww3_0);
			
			int result = AccountDao.getAccountDao().checkaccpw(hexpw, accnumr);
			if(result==1) {
				response.getWriter().print(1);
			}else {
				response.getWriter().print(2);
			}
		}catch (Exception e) {
			System.out.print(e);
		}
	}

}
