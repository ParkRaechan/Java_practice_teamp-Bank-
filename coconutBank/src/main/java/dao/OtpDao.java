package dao;

import dto.Account;

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
				System.out.println(rs.getString(3));
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

	public int checkoverlap(String rr1) {
		
		String sql = "select * from otp where otpno = '"+rr1+"'";
		try {
			System.out.println("qwe222");
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {System.out.println("qwe333");
				System.out.println(rs.getString(3));
				return 1;
			}else {
				return 2;
			}
		}
		catch (Exception e) { System.out.println( e );}
		return 2;
	}
	
	public int saveotp( String finalf1, String finalf2,String finalf3,String accnumr) {
		
		String sql = "select acidno from account where acno='"+accnumr+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			
			if(rs.next()) {
				String ssqlrs = rs.getString(1);
				sql = "insert into otp(otpno,otppw,otpactive,acidno) "
						+ "values("+finalf1+","+finalf2+","+finalf3+","+ssqlrs+")";
				ps = con.prepareStatement(sql);
				ps.executeUpdate(); 
				if(rs.next()) {
					return 1;
				}
			}
		}
		catch (Exception e) { System.out.println( e );}
		return 2;
		
	}
	
}