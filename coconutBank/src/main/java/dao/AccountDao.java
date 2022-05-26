package dao;

import dto.Account;

public class AccountDao extends Dao{
	
	public AccountDao() {
		super();
	}
	
	public static AccountDao accountDao = new AccountDao();
	public static AccountDao getAccountDao() {return accountDao;}
	
	public boolean add( Account acc ) {
		
		String sql = "insert into account(acno,acname,acbirth,acbalance,acpw,acactive) "
				+ "values(?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString( 1 , acc.getAcno() );		
			ps.setString( 2 , acc.getAcname() );
			ps.setString( 3 , acc.getAcbirth() );
			ps.setInt( 4 , acc.getAcbalance() );
			ps.setString( 5 , acc.getAcpw() );
			ps.setString( 6 , acc.getAcactive() );
			ps.executeUpdate(); 
			return true;
		}catch (Exception e) {System.out.println(e);}return false; 

	}
}
