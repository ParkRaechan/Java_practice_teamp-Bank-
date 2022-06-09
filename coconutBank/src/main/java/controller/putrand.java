package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import dto.Encryption;
import dao.OtpDao;

/**
 * Servlet implementation class putrand
 */
@WebServlet("/putrand")
public class putrand extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public putrand() {
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
			String r1 = request.getParameter("r1");
			String r2 = request.getParameter("r2");
			String r3 = request.getParameter("r3");
			String r4 = request.getParameter("r4");
			String r5 = request.getParameter("r5");
			String r6 = request.getParameter("r6");
			String otpno = request.getParameter("otpno");
			String qwe2 = Encryption.getEncryption().nokeyplus(otpno);
			String qwe3 = Encryption.getEncryption().sha256(qwe2);
			boolean result = OtpDao.getOtpDao().putrand(qwe3,r1,r2,r3,r4,r5,r6);
			
			
			if(result) {
				response.getWriter().print(1);
			}else {
				response.getWriter().print(2);
			}
		}catch (Exception e) {
			System.out.print(e);
		}
	}

}
