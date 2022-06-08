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
	
	// 3. 보안카드박스 숫자 출력
	public String getboxno(String secno, int no) {
		String sql = "select substring_index(substring_index(seccon, ',' ,"+no+" ), ',', -1) from securitycard where secno = '"+secno+"'"; 
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next() ) {
				return rs.getString(1);
			}
		}catch (Exception e) {System.out.println("보안박스숫자출력오류"+e);}
		return null;
	} // 보안박스숫자출력 end
	
	// 4. 보안카드상태 잠금 메소드
	public boolean activechange(String secno) {
		String sql = "update securitycard set secactive ='" +"사용불가"+"'"+ "where secno ='" +secno+"'";
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("보안카드상태잠금오류"+e);}
		return false;
	} // 보안카드상태 잠금 end
	
	
} // class end
