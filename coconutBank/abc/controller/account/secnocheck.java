package controller.account;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.SccardDao;

/**
 * Servlet implementation class secnocheck
 */
@WebServlet("/account/secnocheck")
public class secnocheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public secnocheck() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String secno = request.getParameter("secno");
		System.out.println("보안카드일련번호: "+secno);
		boolean result = SccardDao.getscSccardDao().secnocheck(secno);
		if(result) { // 보안카드 일련번호가 존재하면
			response.getWriter().print(1);
		}else {
			response.getWriter().print(secno);
		} // else end
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
