package dto;

public class Securitycard {
	private String secno;
	private String seccon;
	private String secpw;
	private int acno;
	public Securitycard() {
		super();
	}
	public Securitycard(String secno, String seccon, String secpw, int acno) {
		super();
		this.secno = secno;
		this.seccon = seccon;
		this.secpw = secpw;
		this.acno = acno;
	}
	@Override
	public String toString() {
		return "Securitycard [secno=" + secno + ", seccon=" + seccon + ", secpw=" + secpw + ", acno=" + acno + "]";
	}
	public String getSecno() {
		return secno;
	}
	public void setSecno(String secno) {
		this.secno = secno;
	}
	public String getSeccon() {
		return seccon;
	}
	public void setSeccon(String seccon) {
		this.seccon = seccon;
	}
	public String getSecpw() {
		return secpw;
	}
	public void setSecpw(String secpw) {
		this.secpw = secpw;
	}
	public int getAcno() {
		return acno;
	}
	public void setAcno(int acno) {
		this.acno = acno;
	}
	
}
