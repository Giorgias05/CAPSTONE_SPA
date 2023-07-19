package com.giorgia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.giorgia.entity.PrenotazioneSpa;
import com.giorgia.repository.PrenotazioneSpaRepository;

@Service
public class PrenotazioneSpaService {
    
    @Autowired PrenotazioneSpaRepository prenotazioneRepository;

    public PrenotazioneSpa salvaPrenotazione(PrenotazioneSpa c){
        if(prenotazioneRepository.findAllByData(c.getData()).size()<50){
            return prenotazioneRepository.save(c);
        }else 
        return null;
    }

    public List<PrenotazioneSpa> cercaTuttePrenotazione(){
        return prenotazioneRepository.findAll();
    }
}
