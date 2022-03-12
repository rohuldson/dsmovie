package com.rohuldson.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohuldson.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
