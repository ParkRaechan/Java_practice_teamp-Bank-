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

			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {

				return 1;
			}else {
				return 2;
			}
		}
		catch (Exception e) { System.out.println( e );}
		return 2;
	}
	
	public int saveotp( String finalf1, String finalf2,String finalf3,String accnumr) {
		//암호화된 otp고유번호, 암호화된 비번, otp난주저장공간, 계좌번호
		String sql = "update account set otpno= '"+finalf1+"' where acno='"+accnumr+"'";
		boolean ffr = true;
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate();
			if(ffr==true) {
				sql = "insert into otp(otpno,otppw,otpactive) "
						+ "values('"+finalf1+"','"+finalf2+"','"+finalf3+"')";
				ps = con.prepareStatement(sql);
				ps.executeUpdate(); 
				return 1;
			}
			else {
				ffr = false;
			}

			
		}
		catch (Exception e) {ffr = false; System.out.println( e );}
		return 2;
		
	}
	
}
