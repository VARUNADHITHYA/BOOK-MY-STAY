package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Hotel;
import com.example.demo.Entity.Hotelbooked;
import com.example.demo.Entity.Login;
import com.example.demo.Entity.jsontoken;
import com.example.demo.Repository.Token;
import com.example.demo.Service.BookMyStayService;


@CrossOrigin
@RestController
public class BookMyStayController {
	@Autowired
	private BookMyStayService empservice;
	
	
	@PostMapping("/add")
	public String saveUser(@RequestBody Login e)
	{
		empservice.savedetails(e);
		return"saved";
	}
	
	@GetMapping("/getdetail")
	public List<Login> getDetails()
	{
		return empservice.getAllDetails();
	}
	
	@GetMapping("/get")
	public List<Hotel> getHotels()
	{
		return empservice.getAllHotels();
	}
	
	@GetMapping("/get/{address}")
    public ResponseEntity<List<Hotel>> getHotelsByAddress(@PathVariable String address) 
	{
        List<Hotel> hotels = empservice.getHotelsByAddress(address);
        return ResponseEntity.ok(hotels);
    }
	
	@GetMapping("/getrate/{rate}")
    public ResponseEntity<List<Hotel>> getHotelsByRate(@PathVariable int rate) 
	{
        List<Hotel> hotels = empservice.getHotelsByRate(rate);
        return ResponseEntity.ok(hotels);
    }
	
	@GetMapping("/getname/{hname}")
    public ResponseEntity<List<Hotel>> getHotelsByHname(@PathVariable String hname) 
	{
        List<Hotel> hotels = empservice.getHotelsByHname(hname);
        return ResponseEntity.ok(hotels);
    }
	
	@GetMapping("/getroom/{room}")
    public ResponseEntity<List<Hotel>> getHotelsByroom(@PathVariable String room) 
	{
        List<Hotel> hotels = empservice.getHotelsByroom(room);
        return ResponseEntity.ok(hotels);
    }
	
	@GetMapping("/getimg/{imgin}")
    public ResponseEntity<List<Hotel>> getHotelsByImagein(@PathVariable String imgin) 
	{
        List<Hotel> hotels = empservice.getHotelsByImagein(imgin);
        return ResponseEntity.ok(hotels);
    }
	
	@PostMapping("/postbook")
	public String savedata(@RequestBody Hotelbooked book)
	{
		empservice.savebook(book);
		return "saved" ;
	}
	
	@GetMapping("/getbooked")
	public List<Hotelbooked> getBooked()
	{
		return empservice.getAllBook();
	}
	
	@GetMapping("/gettoken")
	public List<jsontoken> getToken()
	{
		return empservice.getTokens();
	}
	@PostMapping("/posttoken")
	public String savetoken(@RequestBody jsontoken tok)
	{
		empservice.savetoken(tok);
		return "Token saved";
	}
	
}