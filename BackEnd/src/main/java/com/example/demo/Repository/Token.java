package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.jsontoken;

public interface Token extends JpaRepository<jsontoken, Integer>
{

	Token save(Token tok);

}
