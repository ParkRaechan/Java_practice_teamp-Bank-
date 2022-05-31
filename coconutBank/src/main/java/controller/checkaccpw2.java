package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;

/**
 * Servlet implementation class checkaccpw
 */
@WebServlet("/checkaccpw2")
public class checkaccpw2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public checkaccpw2() {
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
		try {
			System.out.print("asdasd");
			
			request.setCharacterEncoding("UTF-8");
			String pww21 = request.getParameter("pww21");
			String achostno = request.getParameter("achostno");
			String acguestno = request.getParameter("acguestno");
			
			int result = AccountDao.getAccountDao().checkaccpw2(pww21, achostno, acguestno);
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
