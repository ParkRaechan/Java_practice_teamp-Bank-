package dao;

import dto.Securitycard;

public class SccardDao extends Dao{

	public SccardDao() {
		super();
	}
	
	// 호출용
	public static SccardDao sccardDao = new SccardDao();
	public static SccardDao getscSccardDao() {return sccardDao;}
	
	// 보안카드 생성
	public boolean addsccard(Securitycard sccard) {
		String sql = "insert into securitycard(secno, seccon, secpw, secactive, acidno) values(?, ?, ?, ?, ?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, sccard.getSecno() );
			ps.setString(2, sccard.getSeccon() );
			ps.setString(3, sccard.getSecpw() );
			ps.setString(4, sccard.getSeactive() );
			ps.setInt(5, sccard.getAcidno() );
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("보안카드생성오류"+e);}
		return false;
	} // 보안카드생성 end
	
	
} // class end
