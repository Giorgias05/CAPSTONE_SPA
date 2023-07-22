package com.giorgia.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giorgia.entity.PrenotazioneSpa;

public interface PrenotazioneSpaRepository extends JpaRepository<PrenotazioneSpa, Long>{
    
    public List<PrenotazioneSpa> findAllByData(LocalDate Data);
}
