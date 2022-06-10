package controller;

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
		//폰번호
		String phonenum = request.getParameter("phonenum");
		String phonenum00 = phonenum.replace("-", ""); 
		//난수
		String rr = request.getParameter("rr");
		
		
		String api_key = "NCSKVJ7MLDCGI0CM";
	    String api_secret = "4STLLEOANTZHCPKAGOACTZZJJU6ATG4L";
	    Message coolsms = new Message(api_key, api_secret);

	    // 4 params(to, from, type, text) are mandatory. must be filled
	    HashMap<String, String> params = new HashMap<String, String>();
	    params.put("to", phonenum00);
	    params.put("from", "01041487895");
	    params.put("type", "SMS");
	    params.put("text", "인증번호는 "+rr+"입니다. 1분 안에 입력 해주세요.");
	    params.put("app_version", "test app 1.2"); // application name and version

	    
	    
	    
	    try {
	      JSONObject obj = (JSONObject) coolsms.send(params);
	      System.out.println(obj.toString());
	    } catch (CoolsmsException e) {
	      System.out.println(e.getMessage());
	      System.out.println(e.getCode());
	    }	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}