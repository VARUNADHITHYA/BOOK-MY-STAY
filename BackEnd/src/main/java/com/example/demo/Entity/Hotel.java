package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Hotelbook")
public class Hotel 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="HotelId")
	private int id;
	
	@Column(name="HotelName")
	private String hname;
	
	@Column(name="Location")
	private String address;
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Column(name="Contact")
	private String mno;
	
	@Column(name="Ratings")
	private float rate;
	
	@Column(name="Rooms")
	private String room;
	
	@Column(name="Reviews")
	private String review;
	
	@Column(name="Amenities")
	private String ame;
	
	@Column(name="Price")
	private int price;
	
	@Column(name="Address")
	private String add;
	
	@Column (name="oldprice")
	private int old;
	
	@Column (name="imagein")
	private String imgin;
	
	@Column (name="offer")
	private int offer;
	public int getOffer() {
		return offer;
	}
	public void setOffer(int offer) {
		this.offer = offer;
	}
	public String getImgin() {
		return imgin;
	}
	public void setImgin(String imgin) {
		this.imgin = imgin;
	}
	public int getOld() {
		return old;
	}
	public void setOld(int old) {
		this.old = old;
	}
	public String getAdd() {
		return add;
	}
	public void setAdd(String add) {
		this.add = add;
	}
	public float getRate() {
		return rate;
	}
	public void setRate(float rate) {
		this.rate = rate;
	}
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	public String getAme() {
		return ame;
	}
	public void setAme(String ame) {
		this.ame = ame;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getHname() {
		return hname;
	}
	public void setHname(String hname) {
		this.hname = hname;
	}
	public String getMno() {
		return mno;
	}
	public void setMno(String mno) {
		this.mno = mno;
	}
	public long getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id=id;
	}
	
	public Hotel() {};
	public Hotel (int offer ,String imgin , String add ,int old , String hname,String room ,float rate , String address,String mno ,int id,int price , String ame , String review)
	{
		super();
		this.id=id;
		this.hname=hname;
		this.address=address;
		this.mno=mno;
		this.price = price;
		this.ame = ame ;
		this.review = review;
		this.room = room ;
		this.rate = rate;
		this.add = add ;
		this.old = old ;
		this.imgin = imgin ;
		this.offer = offer;
	}
}
