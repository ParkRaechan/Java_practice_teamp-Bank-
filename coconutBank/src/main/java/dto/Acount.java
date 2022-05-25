package dto;

public class Acount {
	private String acno;
	private String acname;
	private String acbirth;
	private int acbalance;
	private String acpw;
	
	public Acount() {
		super();
	}
	public Acount(String acno, String acname, String acbirth, int acbalance, String acpw) {
		super();
		this.acno = acno;
		this.acname = acname;
		this.acbirth = acbirth;
		this.acbalance = acbalance;
		this.acpw = acpw;
	}
	@Override
	public String toString() {
		return "Acount [acno=" + acno + ", acname=" + acname + ", acbirth=" + acbirth + ", acbalance=" + acbalance
				+ ", acpw=" + acpw + "]";
	}
	public String getAcno() {
		return acno;
	}
	public void setAcno(String acno) {
		this.acno = acno;
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
	public String getAcpw() {
		return acpw;
	}
	public void setAcpw(String acpw) {
		this.acpw = acpw;
	}
	
	
}
