package com.moto.xpress.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cityId;

    private String cityName;
    
    @OneToMany(mappedBy = "city")
    private List<Userprofile> userprofiles;
    
    @OneToMany(mappedBy = "availableCity")
    private List<Bike> bikes;
    
    @OneToMany(mappedBy = "pickupCity")
    private List<RentalRecord> pickupRentalRecords;

    @OneToMany(mappedBy = "dropOffCity")
    private List<RentalRecord> dropOffRentalRecords;

	public Long getCityId() {
		return cityId;
	}

	public void setCityId(Long cityId) {
		this.cityId = cityId;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public List<Userprofile> getUserprofiles() {
		return userprofiles;
	}

	public void setUserprofiles(List<Userprofile> userprofiles) {
		this.userprofiles = userprofiles;
	}

	public List<Bike> getBikes() {
		return bikes;
	}

	public void setBikes(List<Bike> bikes) {
		this.bikes = bikes;
	}

	public List<RentalRecord> getPickupRentalRecords() {
		return pickupRentalRecords;
	}

	public void setPickupRentalRecords(List<RentalRecord> pickupRentalRecords) {
		this.pickupRentalRecords = pickupRentalRecords;
	}

	public List<RentalRecord> getDropOffRentalRecords() {
		return dropOffRentalRecords;
	}

	public void setDropOffRentalRecords(List<RentalRecord> dropOffRentalRecords) {
		this.dropOffRentalRecords = dropOffRentalRecords;
	}
    
	
}