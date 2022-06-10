package controller.securitycard;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.AccountDao;
import dao.SccardDao;


@WebServlet("/securitycard/usesccard")
public class usesccard extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public usesccard() {
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
		String accountno = request.getParameter("accountno");
		int acidno = AccountDao.getAccountDao().getacidno(accountno);
		// 보안박스 난수
		int box1 = Integer.parseInt(request.getParameter("box1"));
		int box2 = Integer.parseInt(request.getParameter("box2"));
		// 사용자 입력
		String boxno1 = request.getParameter("boxno1");
		String boxno2 = request.getParameter("boxno2");
		
		// 계좌식별번호로 보안카드일련번호 출력
		String secno = AccountDao.getAccountDao().getsecno(acidno);
		// 첫번째 박스 번호 가져오기(앞자리만)
		String dbboxno1 = SccardDao.getscSccardDao().getboxno(secno, box1);
		String fdbboxno1 = dbboxno1.substring(0, 2);
		
		// 두번째 박스 번호 가져오기(뒷자리만)
		String dbboxno2 = SccardDao.getscSccardDao().getboxno(secno, box2);
		String rdbboxno2 = dbboxno2.substring(2,4);
		
		
		// 결과
		if(boxno1.equals(fdbboxno1) && boxno2.equals(rdbboxno2)) {
			response.getWriter().print(1);
		}else {
			response.getWriter().print(2);
		}
		
	}

}
