import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.MessageDigest;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.HashMap;
import java.util.Random;

public class Encryption {

/////////////////////////////////////////////////////////////// 계좌번호 생성 //////////////////////////////////////////////////////////////////////	
	
	// 계좌번호 생성 메소드
	public String getaccountno() {
		Random rd = new Random();
		String accountno = ("112-"+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+"-"+
				rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10)+rd.nextInt(10));
		return accountno;
	} // 계좌번호 생성 end

/////////////////////////////////////////////////////////////// SHA256 / SALT 사용 //////////////////////////////////////////////////////////////////////	

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

	// 테스트용
	String acno = "112-120-120120";
	String pw = "0536";
	
	// 계좌+비번+추가 
	public String dbpassword(String acno, String pw) {
		String password = acno.replace("-", "")+pw;
		int password2 = Integer.parseInt(password)*2022228;
		System.out.println(password2);
		return null;
	}
	
	// SHA256 해시함수 사용 메소드
	public String sha256(String acno, String pw) {
		String password = acno+pw;
		String hex = null;
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(saltpw.getBytes());
			hex = String.format("%64x", new BigInteger(1, md.digest()));
		}catch(Exception e) {System.out.println("256암호화시 오류 : "+e);}
		return hex;
	} // 암호화 비밀번호 end
	

/////////////////////////////////////////////////////////////// RSA 사용 //////////////////////////////////////////////////////////////////////	
	
	// 
	static final int key_size = 2048;
	
	// 키페어생성 메소드
	static HashMap<String, String> createkeypair(){
		HashMap<String , String> stringkeypair = new HashMap<String, String>();
		try {
			SecureRandom srd = new SecureRandom();
			KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
			kpg.initialize(key_size, srd);
			KeyPair keyPair = kpg.genKeyPair();
			
			PublicKey publicKey = keyPair.getPublic();
			PrivateKey privateKey = keyPair.getPrivate();
			
			String stringPublickey = Base64.getEncoder().encodeToString(publicKey.getEncoded() );
			String stringPrivatekey = Base64.getEncoder().encodeToString(privateKey.getEncoded() );
			
			stringkeypair.put("publicKey", stringPublickey);
			stringkeypair.put("privateKey", stringPrivatekey);
			
		}catch(Exception e) {System.out.println("키페어생성오류 : "+e);}
		return stringkeypair;
	} // 키페어생성 end
	
	// 암호화 메소드
	static String encode(String acps, String stringPublickey) {
		String encryptedData = null;
		try {
			// 평문으로 전달받은 공개키를 공개키객체로 만드는 과정
			KeyFactory keyFactory = KeyFactory.getInstance("RSA");
			byte[] bytePublickey = Base64.getDecoder().decode(stringPublickey.getBytes() );
			
		}catch(Exception e) {System.out.println("암호화오류 : "+e);}
		return null;
	} // 암호화 end
	
	
	
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
		
		HashMap<String, String> rsakeypair = createkeypair();
		String publickey = rsakeypair.get("publicKey");
		String privatekey = rsakeypair.get("privateKey");
		
		System.out.println("만들어진 공개키 : "+publickey);
		System.out.println("만들어진 개인키 : "+privatekey);

		
		String acno = "112-120-120120";
		String pw = "0536";
		String password = acno.replace("-", "")+pw;
		System.out.println(password);
		int password2 = Integer.parseInt(password)*2;
		System.out.println(password2);
		
		
		
			
		
		
		
	} // main end
}
