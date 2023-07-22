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

import com.giorgia.entity.PrenotazioneSpa;
import com.giorgia.service.PrenotazioneSpaService;

@RestController
@RequestMapping("/prenotazioniSpa")
public class PrenotazioneSpaController {
    

    @Autowired PrenotazioneSpaService prenotazioneSpaService;


    @PostMapping()
    public ResponseEntity<?> salvaPrenotazioneSpa(@RequestBody PrenotazioneSpa p){
        PrenotazioneSpa prenotazione=prenotazioneSpaService.salvaPrenotazione(p);
        if(prenotazione!=null){
            return new ResponseEntity<PrenotazioneSpa>(prenotazione, HttpStatus.CREATED);
        }else
            return new ResponseEntity<String>("ERRORE!! Prenotazioni spa, raggiunto limite massimo", HttpStatus.BAD_REQUEST);
        
    }

    @GetMapping()
    public ResponseEntity<List<PrenotazioneSpa>> cercaPrenotazioniSpa(){
        return new ResponseEntity<List<PrenotazioneSpa>>(prenotazioneSpaService.cercaTuttePrenotazione(), HttpStatus.OK);
    }
}
