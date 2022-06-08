package dao;

import dto.Securitycard;

public class SccardDao extends Dao{

	public SccardDao() {
		super();
	}
	
	// 호출용
	public static SccardDao sccardDao = new SccardDao();
	public static SccardDao getscSccardDao() {return sccardDao;}
	
	// 1. 보안카드 일련번호 중복체크 메소드
	public boolean secnocheck(String secno) {
		String sql = "select * from securitycard where secno= '"+secno+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next() ) {
				return true;
			} // if end
		}catch (Exception e) {System.out.println("보안카드번호중복체크오류"+e);}
		return false;
	} // 보안카드번호 체크 end
	
	// 2. 보안카드 생성
	public boolean addsccard(Securitycard sccard) {
		String sql = "insert into securitycard(secno, seccon, secpw, secactive) values(?, ?, ?, ?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, sccard.getSecno() );
			ps.setString(2, sccard.getSeccon() );
			ps.setString(3, sccard.getSecpw() );
			ps.setString(4, sccard.getSeactive() );
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("보안카드생성오류"+e);}
		return false;
	} // 보안카드생성 end
	
//	// 계좌식별번호로 보안카드정보 가져오기
//	public Securitycard getsccard(int acidno) {
//		String sql = "select * from securitycard where acidno ="+acidno;
//		try {
//			ps = con.prepareStatement(sql);
//			rs = ps.executeQuery();
//			if(rs.next() ) {
//				Securitycard sccard = new Securitycard(
//						rs.getString(1), 
//						rs.getString(2), 
//						rs.getString(3), 
//						rs.getString(4), 
//						rs.getInt(5) );
//				return sccard;
//			} // if end
//		}catch (Exception e) {System.out.println("보안카드정보출력오류"+e);}
//		return null;
//	} // 보안카드정보 출력 end
	
	
} // class end
