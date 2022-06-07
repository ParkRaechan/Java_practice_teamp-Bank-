package Controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;


@WebServlet("/makeSignature")
public class makeSignature extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public makeSignature() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String phonenum = request.getParameter("phonenum"); //jsp에서 입력된 전화번호를 받아옴
		int rand = (int)(Math.random() * (999999 - 100000 + 1)) + 100000; //6자리 난수 생성
		
		//coolsms 제공 api
		String api_key = "NCSKVJ7MLDCGI0CM";
	    String api_secret = "4STLLEOANTZHCPKAGOACTZZJJU6ATG4L";
	    Message coolsms = new Message(api_key, api_secret);
	    
	    // 4 params(to, from, type, text) are mandatory. must be filled
	    HashMap<String, String> params = new HashMap<String, String>();
	    params.put("to", "01041487895");
	    params.put("from", phonenum);
	    params.put("type", "SMS");
	    params.put("text", "인증번호는 "+rand+"입니다. 1분 안에 입력 해주세요.");
	    params.put("app_version", "test app 1.2"); // application name and version

	    try {
	      JSONObject obj = (JSONObject) coolsms.send(params);
	      System.out.println(obj.toString());
	      
	    } catch (CoolsmsException e) {
	      System.out.println(e.getMessage());
	      System.out.println(e.getCode());
	    }	
	    
	    response.getWriter().print( rand );
	}
	
	
	


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
