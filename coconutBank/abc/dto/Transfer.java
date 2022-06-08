package dto;

public class Transfer {
	private int trfno;
	private int trfamount;
	private String trftime;
	private int achostno;
	private int acguestno;
	

	public Transfer() {}

	public Transfer(int trfno, int trfamount, String trftime, int achostno, int acguestno) {
		super();
		this.trfno = trfno;
		this.trfamount = trfamount;
		this.trftime = trftime;
		this.achostno = achostno;
		this.acguestno = acguestno;
	}

	public int getTrfno() {
		return trfno;
	}

	public void setTrfno(int trfno) {
		this.trfno = trfno;
	}

	public int getTrfamount() {
		return trfamount;
	}

	public void setTrfamount(int trfamount) {
		this.trfamount = trfamount;
	}

	public String getTrftime() {
		return trftime;
	}

	public void setTrftime(String trftime) {
		this.trftime = trftime;
	}

	public int getAchostno() {
		return achostno;
	}

	public void setAchostno(int achostno) {
		this.achostno = achostno;
	}

	public int getAcguestno() {
		return acguestno;
	}

	public void setAcguestno(int acguestno) {
		this.acguestno = acguestno;
	}

	// 테스트용
	@Override
	public String toString() {
		return "Transfer [trfno=" + trfno + ", trfamount=" + trfamount + ", trftime=" + trftime + ", achostno="
				+ achostno + ", acguestno=" + acguestno + "]";
	}
	
	
	
}
