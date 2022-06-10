package dao;

import dto.Account;

public class AccountDao extends Dao {

	public AccountDao() {
		super();
	}
	// 호출용
	public static AccountDao accountDao = new AccountDao();
	public static AccountDao getAccountDao() {return accountDao;}
		
	
	// 1. 계좌번호 중복체크 메소드
	public boolean acnocheck(String accountno) {
		String sql = "select * from account where acno= '"+accountno+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				return true;
			} // if end
		}catch(Exception e) {System.out.println("계좌번호중복체크오류"+e);}
		return false;
	} // 계좌중복 체크 end
	
	// 2. 계좌생성 메소드
	public boolean addaccount(Account account) {
		String sql = "insert into account(acno, acpw, acname, acbirth, acphone, acbalance, acactive) values(?, ?, ?, ?, ?, ?, ?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, account.getAcno() );
			ps.setString(2, account.getAcpw() );
			ps.setString(3, account.getAcname() );
			ps.setString(4, account.getAcbirth() );
			ps.setString(5, account.getAcphone() );
			ps.setInt(6, account.getAcbalance() );
			ps.setString(7, account.getAcactive() );
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("계좌생성오류"+e);}
		return false;
	} // 계좌생성 end

	// 3. 계좌비밀번호 일치확인 메소드
	public boolean passwordcheck(int acidno, String password) {
		String sql = "select * from account where acidno = "+acidno+" and acpw ='" +password+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next() ) {
				return true;
			} // if end
		}catch (Exception e) {System.out.println("계좌비밀번호일치오류"+e);}
		return false;
	} // 계좌비밀번호 확인 end
	
	// 4. 계좌식별번호 출력 메소드
	public int getacidno(String acno) {
		String sql = "select acidno from account where acno= '"+acno+"'";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next() ) {
				return rs.getInt(1);
			} // if end
		}catch (Exception e) {System.out.println("계좌식별번호출력오류"+e);}
		return 0;
	} // 계좌식별번호출력 end
	
	// 5. 계좌상태 잠금 메소드
	public boolean activechange(String acno) {
		String sql = "update account set acactive ='" +"사용불가"+"'"+ "where acno ='" +acno+"'";
		try {
			ps = con.prepareStatement(sql);
			ps.executeUpdate();
			return true;
		}catch (Exception e) {System.out.println("계좌상태잠금오류"+e);}
		return false;
	} // 계좌잠금 end
	
	// 6. 보안카드 생성시 일련번호 추가
		public int secnocheck(int acidno) {
			String sql = "select secno from account where acidno ="+acidno;
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				if(rs.next()) { // 계좌가 존재하면
					if(rs.getString(1) == null ) { // 계좌에 보안카드 일련번호가 null 이면
						return 1; // 보안카드 계좌테이블에 등록
					}else { // 계좌에 보안카드 일련번호가 null이 아니면 -> 보안카드가 이미 존재하면
						return 2;
					}
				} // if end
			}catch (Exception e) {System.out.println("계좌테이블에보안카드확인오류"+e);}
			return 3;
		} // 보안카드일련번호 추가 end
		
		// 보안카드 생성시 계좌테이블에 보안카드일련번호 추가
		public boolean addsecno(int acidno, String secno){
			String sql = "update account set secno = '"+secno+"'"+ "where acidno ="+acidno;
			try {
				ps = con.prepareStatement(sql);
				ps.executeUpdate();
				return true;
			}catch (Exception e) {System.out.println("계좌테이블에보안카드등록오류"+e);}
			return false;
		} // 보안카드일련번호 추가 end
		
		// 7.보안카드일련번호 출력[인수 : 계좌식별번호]
		public String getsecno(int acidno) {
			String sql = "select secno from account where acidno ="+acidno;
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				if(rs.next()) {
					return rs.getString(1);
				}
			}catch (Exception e) {System.out.println("보안카드일려번호출력오류"+e);}
			return null;
		} // 보안카드일련번호 출력 end

	/////////////////////////////////////////////////////////// 래찬이 머지 //////////////////////////////////////////////////////////////////////
		
		
		public String checkphone(String accnumr) {
			String sql = "select acphone from account where acno = '"+accnumr+"'";
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				if(rs.next()) {
					String rr = rs.getString(1);
					return rr;
				}
			}
			catch (Exception e) { System.out.println( e );}
			return "false";
		}
		
		//pww3계좌비번 accnumr계좌번호
		public int checkaccpw(String pww3,String accnumr) {
			
			String sql = "select * from account where acpw = '"+pww3+"' and acno = '"+accnumr+"'";
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				if(rs.next()) {
					return 1;
				}
			}
			catch (Exception e) { System.out.println( e );}
			return 2;
		}
		//pww21보내는계좌비번 achostno보내는계좌번호 acguestno받는계좌번호
			public int checkaccpw2(String pww21,String achostno,String acguestno) {
				
				String sql = "select * from account where acpw = '"+pww21+"' and acno = '"+achostno+"'";
				try {
					ps = con.prepareStatement(sql);
					rs = ps.executeQuery();
					if(rs.next()) {
						sql = "select * from account where acno = '"+acguestno+"'";
						ps = con.prepareStatement(sql);
						rs = ps.executeQuery();
						if(rs.next()) {
							return 1;
						}
					}
				}
				catch (Exception e) { System.out.println( e );}
				return 2;
			}

	
} // class end