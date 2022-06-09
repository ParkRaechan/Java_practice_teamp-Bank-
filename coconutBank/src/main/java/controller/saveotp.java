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
 * Servlet implementation class saveotp
 */
@WebServlet("/saveotp")
public class saveotp extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public saveotp() {
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
			String finalf1 = request.getParameter("finalf1");//otp고유번호
			//고유번호암호화
			String qwe2 = Encryption.getEncryption().nokeyplus(finalf1);
			String qwe3 = Encryption.getEncryption().sha256(qwe2);
			
			String finalf2 = request.getParameter("finalf2");//비번암호화전
			String accnumr = request.getParameter("accnumr");//계좌번호
			String acno = accnumr.replace("-", ""); 
			//비번암호화
			String qwe1 = Encryption.getEncryption().keyplus(acno, finalf2);
			String qwe33 = Encryption.getEncryption().sha256(qwe1);
			
			String finalf3 = request.getParameter("finalf3");//otp난수
			
			
			int result = OtpDao.getOtpDao().saveotp(qwe3,qwe33,finalf3,accnumr);
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
