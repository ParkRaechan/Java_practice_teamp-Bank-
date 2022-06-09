package dto;

public class Account {
	
	private String acno;
	private String acname;
	private String acbirth;
	private int acbalance;
	private String acpw;
	private String acactive;
	private String secno;
	private String otpno;
	
	public Account() {}

	public Account(String acno, String acname, String acbirth, int acbalance, String acpw, String acactive,
			String secno, String otpno) {
		super();
		this.acno = acno;
		this.acname = acname;
		this.acbirth = acbirth;
		this.acbalance = acbalance;
		this.acpw = acpw;
		this.acactive = acactive;
		this.secno = secno;
		this.otpno = otpno;
	}

	@Override
	public String toString() {
		return "Account [acno=" + acno + ", acname=" + acname + ", acbirth=" + acbirth + ", acbalance=" + acbalance
				+ ", acpw=" + acpw + ", acactive=" + acactive + ", secno=" + secno + ", otpno=" + otpno + "]";
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

	public String getOtpno() {
		return otpno;
	}

	public void setOtpno(String otpno) {
		this.otpno = otpno;
	}

	
	

}
