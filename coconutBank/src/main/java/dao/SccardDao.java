package dao;

public class SccardDao extends Dao{

	public SccardDao() {
		super();
	}
	
	// 호출용
	public static SccardDao sccardDao = new SccardDao();
	public static SccardDao getscSccardDao() {return sccardDao;}
	
	
} // class end
