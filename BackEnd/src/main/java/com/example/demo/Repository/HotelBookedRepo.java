package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Hotelbooked;


public interface HotelBookedRepo extends JpaRepository<Hotelbooked, Integer>{

}
