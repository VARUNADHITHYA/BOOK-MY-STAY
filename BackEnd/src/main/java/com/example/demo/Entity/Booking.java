package com.example.demo.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
	@Entity
	@Table(name="Booking")
	public class Booking 
	{
		@Id
		@Column(name="BookingId")
		private int id;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public Date getIdate() {
			return idate;
		}
		public void setIdate(Date idate) {
			this.idate = idate;
		}
		public Date getOdate() {
			return odate;
		}
		public void setOdate(Date odate) {
			this.odate = odate;
		}
		public int getNog() {
			return nog;
		}
		public void setNog(int nog) {
			this.nog = nog;
		}
		public int getRooms() {
			return rooms;
		}
		public void setRooms(int rooms) {
			this.rooms = rooms;
		}
		public int getAmount() {
			return amount;
		}
		public void setAmount(int amount) {
			this.amount = amount;
		}
		public String getPaymethod() {
			return paymethod;
		}
		public void setPaymethod(String paymethod) {
			this.paymethod = paymethod;
		}
		@Column(name="CheckinDate")
		private Date idate;
		
		@Column(name="CheckoutDate")
		private Date odate;
		
		@Column(name="NumberOfGuests")
		private int nog;
		
		@Column(name="NumberOfrooms")
		private int rooms;
		
		@Column(name="TotalAmount")
		private int amount;
		
		@Column(name="PaymentMethod")
		private String paymethod;
		
		public Booking() {};
		
		public Booking (int id,String paymethod,int TotalAmount,Date CheckinDate , Date CheckOutDate , int NumberOfGuests)
		{
			super();
			this.id=id;
			this.paymethod=paymethod;
			this.amount=TotalAmount;
			this.idate=CheckinDate;
			this.odate=CheckOutDate;
			this.nog=NumberOfGuests;
		}
	}
