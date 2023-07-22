package com.giorgia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.giorgia.entity.PrenotazioneCorpo;
import com.giorgia.service.PrenotazioneCorpoService;


@RestController
@RequestMapping("/prenotazioniCorpo")
public class PrenotazioneCorpoController {
    

    @Autowired PrenotazioneCorpoService prenotazioneCorpoService;


    @PostMapping()
    public ResponseEntity<?> salvaPrenotazioneCorpo(@RequestBody PrenotazioneCorpo p){
        PrenotazioneCorpo prenotazione=prenotazioneCorpoService.salvaPrenotazione(p);
        if(prenotazione!=null){
            return new ResponseEntity<PrenotazioneCorpo>(prenotazione, HttpStatus.CREATED);
        }else
            return new ResponseEntity<String>("ERRORE!! Prenotazioni corpo, raggiunto limite massimo", HttpStatus.BAD_REQUEST);
        
    }

    @GetMapping()
    public ResponseEntity<List<PrenotazioneCorpo>> cercaPrenotazioniCorpo(){
        return new ResponseEntity<List<PrenotazioneCorpo>>(prenotazioneCorpoService.cercaTuttePrenotazione(), HttpStatus.OK);
    }
}
