package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Hotel;

public interface HotelRepo extends JpaRepository<Hotel, Integer> 
{

	List<Hotel> findByAddress(String address);

	List<Hotel> findByRate(float rate);

	List<Hotel> findByAme(String ame);

	List<Hotel> findByHname(String hname);

	List<Hotel> findByroom(String room);

	List<Hotel> findByImgin(String imgin);

}
