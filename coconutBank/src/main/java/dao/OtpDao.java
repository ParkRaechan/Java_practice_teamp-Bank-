package dao;

public class OtpDao extends Dao {

	public OtpDao() {
		super();
	}

	// 호출용
	public static OtpDao otpDao = new OtpDao();
	public static OtpDao getOtpDao() {return otpDao;}
	
	
	public String otpac(String otpno) {
		
		String sql = "select * from otp where otpno = '"+otpno+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				return rs.getString(3);
			}
		}
		catch (Exception e) { System.out.println( e );}
		return "false";
	}
	
	public boolean putrand(String otpno,String r1,String r2,String r3,String r4,String r5,String r6) {
		String randsum = r1+r2+r3+r4+r5+r6;
		String sql = "update otp set otpactive = '"+randsum+"' where otpno='"+otpno+"'";
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate(); return true;
		}catch (Exception e) { System.out.println( e ); }return false;
	}


}