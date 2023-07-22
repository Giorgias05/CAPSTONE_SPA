package com.giorgia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.giorgia.entity.PrenotazioneBenessere;
import com.giorgia.repository.PrenotazioneBenessereRepository;

@Service
public class PrenotazioneBenessereService {
    
    @Autowired PrenotazioneBenessereRepository prenotazioneRepository;

    public PrenotazioneBenessere salvaPrenotazione(PrenotazioneBenessere c){
        if(prenotazioneRepository.findAllByData(c.getData()).size()<50){
            return prenotazioneRepository.save(c);
        }else 
        return null;
    }

    public List<PrenotazioneBenessere> cercaTuttePrenotazione(){
        return prenotazioneRepository.findAll();
    }
}
