package dto;

public class Account {
	
	private int acidno;
	private String acno;
	private String acpw;
	private String acname;
	private String acbirth;
	private int acbalance;
	private String acranno;
	private String acactive;

	
	public Account() {}


	public Account(int acidno, String acno, String acpw, String acname, String acbirth, int acbalance, String acranno,
			String acactive) {
		super();
		this.acidno = acidno;
		this.acno = acno;
		this.acpw = acpw;
		this.acname = acname;
		this.acbirth = acbirth;
		this.acbalance = acbalance;
		this.acranno = acranno;
		this.acactive = acactive;
	}


	public int getAcidno() {
		return acidno;
	}


	public void setAcidno(int acidno) {
		this.acidno = acidno;
	}


	public String getAcno() {
		return acno;
	}


	public void setAcno(String acno) {
		this.acno = acno;
	}


	public String getAcpw() {
		return acpw;
	}


	public void setAcpw(String acpw) {
		this.acpw = acpw;
	}


	public String getAcname() {
		return acname;
	}


	public void setAcname(String acname) {
		this.acname = acname;
	}


	public String getAcbirth() {
		return acbirth;
	}


	public void setAcbirth(String acbirth) {
		this.acbirth = acbirth;
	}


	public int getAcbalance() {
		return acbalance;
	}


	public void setAcbalance(int acbalance) {
		this.acbalance = acbalance;
	}


	public String getAcranno() {
		return acranno;
	}


	public void setAcranno(String acranno) {
		this.acranno = acranno;
	}


	public String getAcactive() {
		return acactive;
	}


	public void setAcactive(String acactive) {
		this.acactive = acactive;
	}


	// 테스트용
	@Override
	public String toString() {
		return "Account [acidno=" + acidno + ", acno=" + acno + ", acpw=" + acpw + ", acname=" + acname + ", acbirth="
				+ acbirth + ", acbalance=" + acbalance + ", acranno=" + acranno + ", acactive=" + acactive + "]";
	}



}
