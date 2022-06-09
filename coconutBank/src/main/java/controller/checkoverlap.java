package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import dto.Encryption;
import dao.AccountDao;
import dao.OtpDao;

/**
 * Servlet implementation class checkoverlap
 */
@WebServlet("/checkoverlap")
public class checkoverlap extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public checkoverlap() {
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
		try {
			request.setCharacterEncoding("UTF-8");
			String rr1 = request.getParameter("rr1");
			String qwe2 = Encryption.getEncryption().nokeyplus(rr1);
			int result = OtpDao.getOtpDao().checkoverlap(qwe2);
			if(result==1) {
				response.getWriter().print(1);
				System.out.println("qqq1-1-1");
			}else {
				response.getWriter().print(2);
				System.out.println("qqq2-2-2");
			}
		}catch (Exception e) {
			System.out.print(e);
		}
	}

}
