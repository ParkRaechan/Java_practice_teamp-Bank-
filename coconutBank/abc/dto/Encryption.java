package dto;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Random;

import org.eclipse.jdt.internal.compiler.batch.Main;

public class Encryption {
	
	public Encryption() {}
	
	public static Encryption encryption = new Encryption();
	public static Encryption getEncryption() {return encryption;}
	
/////////////////////////////////////////////////////////////// 암호화 //////////////////////////////////////////////////////////////////////	
		
	// ** 비밀번호 키 생성
	public String keyplus(String acno, String pw) {
		String password1 = acno+pw;
		long password2 = Long.parseLong(password1);
		long password3 = password2%19941218;
		String keypw = Long.toString(password3);
		return keypw;
	} // 키 end
	
	// 보안카드 or OTP 일련번호 키 생성
	public String nokeyplus(String no) {
		long lno = Long.parseLong(no);
		long kno = lno%2002;
		String keyno = Long.toString(kno);
		return keyno;
	}
	
	// SHA256 해시함수 사용 메소드
	public String sha256(String keypw) {
		String hex = null;
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(keypw.getBytes());
			hex = String.format("%64x", new BigInteger(1, md.digest()));
		}catch(Exception e) {System.out.println("256암호화시 오류 : "+e);}
		return hex;
	} // 암호화 비밀번호 end


/////////////////////////////////////////////////////////////// SALT 사용 //////////////////////////////////////////////////////////////////////	

//	// salt 생성 메소드
//	public String getsalt() {
//		String salt = "";
//		try {
//			SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
//			byte[] bytes = new byte[16];
//			random.nextBytes(bytes);
//			salt = new String(Base64.getEncoder().encode(bytes));
//		}catch(Exception e) {System.out.println("salt생성시 오류 : "+e);}
//		return salt;
//	} // salt생성 end


//	public static void main(String[] args) {

//		String acno = "112-120-120120";
//		String pw = "0536";
//		String password1 = acno.replace("-", "")+pw;
//		long password2 = Long.parseLong(password1);
//		long password3 = password2/19941218;
//		String keypw = Long.toString(password3);
//	
//		System.out.println(keypw);
//		String hex = null;
//		try {
//			MessageDigest md = MessageDigest.getInstance("SHA-256");
//			md.update(keypw.getBytes());
//			hex = String.format("%64x", new BigInteger(1, md.digest()));
//			System.out.println(hex);
//		}catch(Exception e) {System.out.println("256암호화시 오류 : "+e);}
		

		
//	} // main end
}
