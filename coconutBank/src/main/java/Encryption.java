import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;

public class Encryption {
	
//	// salt 생성
//	public static String getSalt() {
//		Random random = new Random();
//		byte[] salt = new byte[10];
//		
//		random.nextBytes(salt);
//		
//		StringBuffer sb = new StringBuffer();
//		
//		for(int i = 0; i<salt.length; i++) {
//			sb.append(String.format("%02x", salt[i])); // byte 값을 Hex 값으로 바꾸기
//		} // for end
//		return sb.toString();
//	}
	
	// salt 생성 메소드
	public static String salt() {
		String salt = "";
		try {
			SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
			byte[] bytes = new byte[16];
			random.nextBytes(bytes);
			salt = new String(Base64.getEncoder().encode(bytes));
		}catch(Exception e) {System.out.println("salt생성시 오류 : "+e);}
		return salt;
	}
	
	// 계좌번호 별 salt 값 찾기
//	public String getsalt(String account) {
//		
//	}

//	
//	public static String sha256(String password, String hash) {
//		String salt = hash+password;
//		String hex = null;
//		try {
//			MessageDigest md = MessageDigest.getInstance("SHA-256");
//			md.update(salt.getBytes());
//			hex = String.format("%64x", new BigInteger(1, md.digest()));
//		}catch(Exception e) {System.out.println("256암호화시 오류 : "+e);}
//		return hex;
//	}
	
//	// SHA256 해싱 메소드
//	public static byte[] sha256(String msg) throws NoSuchAlgorithmException{
//		MessageDigest md = MessageDigest.getInstance("SHA-256");
//		md.update(msg.getBytes());
//		return md.digest();
//	} // sha256 end

	
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
		
		
		
		
		
	} // main end
}
