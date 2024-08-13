package com.moto.xpress.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "rentalrecords")
public class RentalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rentalRecordId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "bike_id")
    private Bike bike;

    @ManyToOne
    @JoinColumn(name = "pickupCity_id")
    private City pickupCity;
    
    @ManyToOne
    @JoinColumn(name = "dropOffCity_id")
    private City dropOffCity;
    
    private LocalDateTime rentalStartDate;
    
    private LocalDateTime rentalEndDate;
	
    private LocalDateTime bookingDate;
    
    private boolean extraHelmet;

    private boolean paymentConfirmation;

	public Long getRentalRecordId() {
		return rentalRecordId;
	}

	public void setRentalRecordId(Long rentalRecordId) {
		this.rentalRecordId = rentalRecordId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Bike getBike() {
		return bike;
	}

	public void setBike(Bike bike) {
		this.bike = bike;
	}

	public City getPickupCity() {
		return pickupCity;
	}

	public void setPickupCity(City pickupCity) {
		this.pickupCity = pickupCity;
	}

	public City getDropOffCity() {
		return dropOffCity;
	}

	public void setDropOffCity(City dropOffCity) {
		this.dropOffCity = dropOffCity;
	}

	public LocalDateTime getRentalStartDate() {
		return rentalStartDate;
	}

	public void setRentalStartDate(LocalDateTime rentalStartDate) {
		this.rentalStartDate = rentalStartDate;
	}

	public LocalDateTime getRentalEndDate() {
		return rentalEndDate;
	}

	public void setRentalEndDate(LocalDateTime rentalEndDate) {
		this.rentalEndDate = rentalEndDate;
	}

	public LocalDateTime getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDateTime bookingDate) {
		this.bookingDate = bookingDate;
	}

	public boolean isExtraHelmet() {
		return extraHelmet;
	}

	public void setExtraHelmet(boolean extraHelmet) {
		this.extraHelmet = extraHelmet;
	}

	public boolean isPaymentConfirmation() {
		return paymentConfirmation;
	}

	public void setPaymentConfirmation(boolean paymentConfirmation) {
		this.paymentConfirmation = paymentConfirmation;
	}
    
    
    
}