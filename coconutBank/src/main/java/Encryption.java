import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Random;

public class Encryption {

	// 계좌번호 생성 메소드
	public String getaccountno() {
		Random rd = new Random();
		String accountno = ("112-"+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+"-"+
				rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10));
		return accountno;
	} // 계좌번호 생성 end
	
	// salt 생성 메소드
	public String getsalt() {
		String salt = "";
		try {
			SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
			byte[] bytes = new byte[16];
			random.nextBytes(bytes);
			salt = new String(Base64.getEncoder().encode(bytes));
		}catch(Exception e) {System.out.println("salt생성시 오류 : "+e);}
		return salt;
	} // salt생성 end
	
	// SHA256 해시함수 사용 메소드
	public String sha256(String salt, String password) {
		String saltpw = salt+password;
		String hex = null;
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(saltpw.getBytes());
			hex = String.format("%64x", new BigInteger(1, md.digest()));
		}catch(Exception e) {System.out.println("256암호화시 오류 : "+e);}
		return hex;
	} // 암호화 비밀번호 end
	
	
	public static void main(String[] args) {
//		String password = "1234";
//		System.out.println("입력한 비밀번호값 :"+password);
//		// 솔트
//		try {
//		// SALT 생성
//		SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
//		byte[] bytes = new byte[16];
//		random.nextBytes(bytes);
//		String salt = new String(Base64.getEncoder().encode(bytes));
//		System.out.println("생성된 솔트값 :"+salt);
//		// SALT+PASSWORD
//		String saltpassword = salt+password;
//		System.out.println("비밀번호+솔트값 :"+saltpassword);
//		// 암호화(SHA256)
//		MessageDigest md = MessageDigest.getInstance("SHA-256");
//		md.update(salt.getBytes());
//		String hex = String.format("%64x", new BigInteger(1, md.digest()));
//		System.out.println("암호화된값(최종저장) :"+hex);
//		
//		
//		}catch(Exception e) {System.out.println("salt생성시 오류 : "+e);}
		
		Random rd = new Random();
		String accountno = ("112-"+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+"-"+
				rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10));
		String pw = "2345";
		System.out.println("accountno :" +accountno);
		System.out.println("사용자 pw : "+pw);
		
			String saltpw = accountno+pw;
			System.out.println("계좌번호+비밀번호 : "+saltpw);
			String hex = null;
			try {
				MessageDigest md = MessageDigest.getInstance("SHA-256");
				md.update(saltpw.getBytes());
				hex = String.format("%64x", new BigInteger(1, md.digest()));
				System.out.println("256해시함수 : "+hex);
			}catch(Exception e) {System.out.println("256암호화시 오류 : "+e);}
			
		
		
		
	} // main end
}
