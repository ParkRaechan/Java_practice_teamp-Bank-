package dao;

public class TransferDao extends Dao{

	public TransferDao() {
		super();
	}
	
	// 호출용
	public static TransferDao transferDao = new TransferDao();
	public static TransferDao gettranTransferDao() {return transferDao;}
	

} // class end
