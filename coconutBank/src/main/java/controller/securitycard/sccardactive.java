package controller.securitycard;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dao.SccardDao;

/**
 * Servlet implementation class sccardactive
 */
@WebServlet("/securitycard/sccardactive")
public class sccardactive extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public sccardactive() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String accountno = request.getParameter("accountno");
		int acidno = AccountDao.getAccountDao().getacidno(accountno);
		
		// 계좌식별번호로 보안카드일련번호 출력
		String secno = AccountDao.getAccountDao().getsecno(acidno);
		
		boolean result = SccardDao.getscSccardDao().activechange(secno);
		if(result) {
			response.getWriter().print(1);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
