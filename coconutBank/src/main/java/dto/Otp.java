package dto;

public class Otp {
	
	private String otpno;
	private String otppw;
	private String acno;
	private String otpactive;
	
	public Otp() {}

	public Otp(String otpno, String otppw, String acno, String otpactive) {
		super();
		this.otpno = otpno;
		this.otppw = otppw;
		this.acno = acno;
		this.otpactive = otpactive;
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

	public String getOtpactive() {
		return otpactive;
	}

	public void setOtpactive(String otpactive) {
		this.otpactive = otpactive;
	}

	// 테스트용
	@Override
	public String toString() {
		return "Otp [otpno=" + otpno + ", otppw=" + otppw + ", acno=" + acno + ", otpactive=" + otpactive + "]";
	}

}
