package com.rohuldson.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohuldson.dsmovie.entities.Score;
import com.rohuldson.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
