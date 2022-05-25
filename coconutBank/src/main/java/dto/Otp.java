package dto;

public class Otp {
	private String otpno;
	private String otppw;
	private String acno;
	public Otp() {
		super();
	}
	public Otp(String otpno, String otppw, String acno) {
		super();
		this.otpno = otpno;
		this.otppw = otppw;
		this.acno = acno;
	}
	@Override
	public String toString() {
		return "Otp [otpno=" + otpno + ", otppw=" + otppw + ", acno=" + acno + "]";
	}
	public String getOtpno() {
		return otpno;
	}
	public void setOtpno(String otpno) {
		this.otpno = otpno;
	}
	public String getOtppw() {
		return otppw;
	}
	public void setOtppw(String otppw) {
		this.otppw = otppw;
	}
	public String getAcno() {
		return acno;
	}
	public void setAcno(String acno) {
		this.acno = acno;
	}
	
}
