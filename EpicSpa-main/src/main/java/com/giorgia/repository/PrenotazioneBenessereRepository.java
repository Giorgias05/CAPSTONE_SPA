package com.giorgia.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giorgia.entity.PrenotazioneBenessere;

public interface PrenotazioneBenessereRepository extends JpaRepository<PrenotazioneBenessere, Long>{
    
    public List<PrenotazioneBenessere> findAllByData(LocalDate Data);
}
