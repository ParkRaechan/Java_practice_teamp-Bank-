package dto;

public class Transfer {
	private int trfno;
	private int trfamount;
	private String trftime;
	private String achostno;
	private String acguestno;
	public Transfer() {
		super();
	}
	public Transfer(int trfno, int trfamount, String trftime, String achostno, String acguestno) {
		super();
		this.trfno = trfno;
		this.trfamount = trfamount;
		this.trftime = trftime;
		this.achostno = achostno;
		this.acguestno = acguestno;
	}
	@Override
	public String toString() {
		return "Transfer [trfno=" + trfno + ", trfamount=" + trfamount + ", trftime=" + trftime + ", achostno="
				+ achostno + ", acguestno=" + acguestno + "]";
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
	public String getAchostno() {
		return achostno;
	}
	public void setAchostno(String achostno) {
		this.achostno = achostno;
	}
	public String getAcguestno() {
		return acguestno;
	}
	public void setAcguestno(String acguestno) {
		this.acguestno = acguestno;
	}
	
}
