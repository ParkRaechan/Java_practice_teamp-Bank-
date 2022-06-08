package dto;

public class Account {
	
	private int acidno;
	private String acno;
	private String acpw;
	private String acname;
	private String acbirth;
	private String acphone;
	private int acbalance;
	private String acactive;
	private String secno;

	
	public Account() {}


	public Account(int acidno, String acno, String acpw, String acname, String acbirth, String acphone, int acbalance,
			String acactive, String secno) {
		super();
		this.acidno = acidno;
		this.acno = acno;
		this.acpw = acpw;
		this.acname = acname;
		this.acbirth = acbirth;
		this.acphone = acphone;
		this.acbalance = acbalance;
		this.acactive = acactive;
		this.secno = secno;
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


	public String getAcphone() {
		return acphone;
	}


	public void setAcphone(String acphone) {
		this.acphone = acphone;
	}


	public int getAcbalance() {
		return acbalance;
	}


	public void setAcbalance(int acbalance) {
		this.acbalance = acbalance;
	}


	public String getAcactive() {
		return acactive;
	}


	public void setAcactive(String acactive) {
		this.acactive = acactive;
	}


	public String getSecno() {
		return secno;
	}


	public void setSecno(String secno) {
		this.secno = secno;
	}


	@Override
	public String toString() {
		return "Account [acidno=" + acidno + ", acno=" + acno + ", acpw=" + acpw + ", acname=" + acname + ", acbirth="
				+ acbirth + ", acphone=" + acphone + ", acbalance=" + acbalance + ", acactive=" + acactive + ", secno="
				+ secno + "]";
	}
	


}
