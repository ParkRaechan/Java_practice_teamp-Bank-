package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Dao {
	
	protected Connection con;
	protected PreparedStatement ps;
	protected ResultSet rs;
	
	public Dao() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://database-1.cndyytnhehwk.us-west-2.rds.amazonaws.com:3306/teampj_bank?serverTimezone=UTC", "admin", "12341234");
			System.out.println("DAO연동성공");
		}catch(Exception e) {System.out.println("DAO연동실패");}
	}
	

} // class end
