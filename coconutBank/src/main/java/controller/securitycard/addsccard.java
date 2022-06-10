package controller.securitycard;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dao.SccardDao;
import dto.Encryption;
import dto.Securitycard;

/**
 * Servlet implementation class addsccard
 */
@WebServlet("/securitycard/addsccard")
public class addsccard extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addsccard() {
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
		String secno = request.getParameter("secno");
		String box = request.getParameter("scbox");
		String scemail = request.getParameter("scemail");
			String accountno = request.getParameter("accountno");
		int acidno = AccountDao.getAccountDao().getacidno(accountno);
		
		String sccardpw = request.getParameter("sccardpw");

		boolean result = SccardDao.getscSccardDao().secnocheck(secno);
		if(result) { // 보안카드 일련번호가 DB에 존재하면
			response.getWriter().print(1);
		}else { // 보안카드 일련번호 중복이 없으면 진행
			
			// 보안카드 일련번호 암호화
			String ksecno = Encryption.getEncryption().nokeyplus(secno);
			String dbsecno = Encryption.getEncryption().sha256(ksecno);
			
			// 보안카드 비밀번호 암호화
			String kpw = Encryption.getEncryption().keyplus(secno, sccardpw);
			String dbpw = Encryption.getEncryption().sha256(kpw);
		
			// 객체화
			Securitycard securitycard = new Securitycard(dbsecno, box, dbpw, "사용가능");
			// 계좌테이블에 보안카드가 존재하는지 DB확인
			int result2 = AccountDao.getAccountDao().secnocheck(acidno);
			if(result2 == 1) { // 보안카드가 존재하지 않으면 -> 계좌테이블에 보안카드등록
				// DB 추가
				boolean result3 = SccardDao.getscSccardDao().addsccard(securitycard);
				if(result3) { // 보안테이블에 보안카드 등록
					AccountDao.getAccountDao().addsecno(acidno, dbsecno);

					SccardDao.getscSccardDao().sendEmail(secno, box, scemail);
					//email 전송
					response.getWriter().print(2);
				}else { // 보안테이블에 보안카드 DB저장 X
					response.getWriter().print(4);
				}
			}else if(result2 == 2) { // 보안카드가 존재하면
				response.getWriter().print(3);
			}else { // DB 오류
				response.getWriter().print(4);
			} // else end

			
		}
		
		
		
//		// 객체화
//		Securitycard securitycard = new Securitycard(secno, scbox, sccardpw, "사용가능", acidno);
//		// DB 추가
//		boolean result = SccardDao.getscSccardDao().addsccard(securitycard);
//		// 결과
//		if(result) {
//			response.getWriter().print(1);
//		}else {
//			response.getWriter().print(2);
//		} // else end
	}

}
