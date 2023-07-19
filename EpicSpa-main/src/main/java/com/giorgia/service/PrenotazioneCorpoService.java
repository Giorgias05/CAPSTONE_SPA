package com.giorgia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.giorgia.entity.PrenotazioneCorpo;
import com.giorgia.repository.PrenotazioneCorpoRepository;

@Service
public class PrenotazioneCorpoService {
    
    @Autowired PrenotazioneCorpoRepository prenotazioneRepository;

    public PrenotazioneCorpo salvaPrenotazione(PrenotazioneCorpo c){
        if(prenotazioneRepository.findAllByData(c.getData()).size()<20){
            return prenotazioneRepository.save(c);
        }else 
        return null;
    }

    public List<PrenotazioneCorpo> cercaTuttePrenotazione(){
        return prenotazioneRepository.findAll();
    }
}
