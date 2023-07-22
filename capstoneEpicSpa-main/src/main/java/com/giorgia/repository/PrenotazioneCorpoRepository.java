package com.giorgia.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giorgia.entity.PrenotazioneCorpo;

public interface PrenotazioneCorpoRepository extends JpaRepository<PrenotazioneCorpo, Long>{
    
    public List<PrenotazioneCorpo> findAllByData(LocalDate Data);
}
