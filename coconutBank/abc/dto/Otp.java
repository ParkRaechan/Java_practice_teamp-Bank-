package dto;

public class Otp {
	
	private String otpno;
	private String otppw;
	private String otpactive;
	private int acidno;
	
	public Otp() {}

	public Otp(String otpno, String otppw, String otpactive, int acidno) {
		super();
		this.otpno = otpno;
		this.otppw = otppw;
		this.otpactive = otpactive;
		this.acidno = acidno;
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

	public String getOtpactive() {
		return otpactive;
	}

	public void setOtpactive(String otpactive) {
		this.otpactive = otpactive;
	}

	public int getAcidno() {
		return acidno;
	}

	public void setAcidno(int acidno) {
		this.acidno = acidno;
	}

	// 테스트용
	@Override
	public String toString() {
		return "Otp [otpno=" + otpno + ", otppw=" + otppw + ", otpactive=" + otpactive + ", acidno=" + acidno + "]";
	}
	
	
	
}
