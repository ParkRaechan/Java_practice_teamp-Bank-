package dao;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Session;

import dto.Securitycard;

public class SccardDao extends Dao{

	public SccardDao() {
		super();
	}
	
	// 호출용
	public static SccardDao sccardDao = new SccardDao();
	public static SccardDao getscSccardDao() {return sccardDao;}
	
	// 1. 보안카드 일련번호 중복체크 메소드
	public boolean secnocheck(String secno) {
		String sql = "select * from securitycard where secno= '"+secno+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next() ) {
				return true;
			} // if end
		}catch (Exception e) {System.out.println("보안카드번호중복체크오류"+e);}
		return false;
	} // 보안카드번호 체크 end
	
	// 2. 보안카드 생성
	public boolean addsccard(Securitycard sccard) {
		String sql = "insert into securitycard(secno, seccon, secpw, secactive) values(?, ?, ?, ?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, sccard.getSecno() );
			ps.setString(2, sccard.getSeccon() );
			ps.setString(3, sccard.getSecpw() );
			ps.setString(4, sccard.getSeactive() );
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("보안카드생성오류"+e);}
		return false;
	} // 보안카드생성 end
	
	// 3. 보안카드박스 숫자 출력
	public String getboxno(String secno, int no) {
		String sql = "select substring_index(substring_index(seccon, ',' ,"+no+" ), ',', -1) from securitycard where secno = '"+secno+"'"; 
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next() ) {
				return rs.getString(1);
			}
		}catch (Exception e) {System.out.println("보안박스숫자출력오류"+e);}
		return null;
	} // 보안박스숫자출력 end
	
	// 4. 보안카드상태 잠금 메소드
	public boolean activechange(String secno) {
		String sql = "update securitycard set secactive ='" +"사용불가"+"'"+ "where secno ='" +secno+"'";
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("보안카드상태잠금오류"+e);}
		return false;
	} // 보안카드상태 잠금 end
	
	// 5. 보안카드 생성 후 이메일 전송 메소드
	public void sendEmail(String secno, String box) {
		String 보내는사람이메일 = "kimsunwj@naver.com";
		String 보내는사람이메일비밀번호 = "qksdnjfcka123!";
		
		Properties properties = new Properties(); // 컬렉션프레임워크 [ map컬렉션 ]
		properties.put("mail.smtp.host","smtp.naver.com"); // 호스트 주소 
		properties.put("mail.smtp.port", 587);	// 호스트 포트번호
		properties.put("mail.smtp.auth", "true"); // 보내는사람이메일 인증
		properties.put("mail.smtp.ssl.protocols", "TLSv1.2"); // *보안 연결 버전 설정
		
		
		Session session = Session.getDefaultInstance(properties, new Authenticator() {
			
			@Override // 오버라이딩 // 보내는사람의 이메일주소,비밀번호 인증 해주는 메소드 구현
			protected PasswordAuthentication getPasswordAuthentication() { 
				return new PasswordAuthentication(보내는사람이메일, 보내는사람이메일비밀번호);
			}
		});
		
		String[] arr1 = box.split(",");
		String[] box1 = new String[6];
		for(int i = 0; i < 6 ; i++) {
			box1[i] = (i + 1) + ": " + arr1[i] + " ";
			for(int j = 1; j <= 4; j++) {
				box1[i] += (i + 1 + (j * 6)) + ": "+ arr1[i + (j * 6)] + " ";
			}
			
		}
		for(String b : box1) {
			System.out.println(b);
		}
		try {
			MimeMessage message = new MimeMessage(session);		// Mime 프로토콜 : 전자우편 표준 포멧[형식]
			message.setFrom( new InternetAddress("kimsunwj@naver.com") ); // 보내는사람 
			message.addRecipient( Message.RecipientType.TO , new InternetAddress("test1231@ruu.kr") ); // 받는사람이메일
			// 내용 
			message.setSubject("테스트 1234"); // 메일 전송 
			message.setText("일련번호  : " + secno 
					+ "<br> 보안카드: <br>" + box1[0] + "<br>"
					+ box1[1] + "<br>" +box1[2] + "<br>" + box1[3] + "<br>" +box1[4] + "<br>" +box1[5] + "<br>");
			// 전송
			Transport.send(message);
		}catch (Exception e) { System.out.println("메일전송실패 "  +e);}
	
	}
	
	
	
} // class end