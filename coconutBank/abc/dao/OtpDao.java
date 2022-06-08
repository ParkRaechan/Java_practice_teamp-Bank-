package dao;

public class OtpDao extends Dao {

	public OtpDao() {
		super();
	}
	
	// 호출용
	public static OtpDao otpDao = new OtpDao();
	public static OtpDao getOtpDao() {return otpDao;}
		
} // class end
