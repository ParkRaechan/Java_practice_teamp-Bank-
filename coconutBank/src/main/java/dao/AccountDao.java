package dao;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Base64;

import dto.Account;

public class AccountDao extends Dao {

	public AccountDao() {
		super();
	}
	// 호출용
	public static AccountDao accountDao = new AccountDao();
	public static AccountDao getaccAccountDao() {return accountDao;}
		
	
	
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
	
	// salt+비밀번호 암호하 메소드
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
	
	
//	public String getpw(String accountpw) {
		
//	}
	
	
	// 계좌생성 메소드
	public boolean addaccount(Account account) {
		String sql = "insert into account(acno, acname, acbirth, acbalance, acpw, acactive) values(?, ?, ?, ?, ?, ?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, account.getAcno() );
			ps.setString(2, account.getAcname() );
			ps.setString(3, account.getAcbirth() );
			ps.setInt(4, account.getAcbalance() );
			ps.setString(5, account.getAcpw() );
			ps.setString(6, account.getAcactive() );
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("계좌생성오류"+e);}
		return false;
	} // 계좌생성 end


	
	



	
} // class end
