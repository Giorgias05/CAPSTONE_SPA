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

import com.giorgia.entity.PrenotazioneBenessere;
import com.giorgia.service.PrenotazioneBenessereService;

@RestController
@RequestMapping("/prenotazioniBenessere")
public class PrenotazioneBenessereController {
    

    @Autowired PrenotazioneBenessereService prenotazioneBenessereService;


    @PostMapping()
    public ResponseEntity<?> salvaPrenotazioneBenessere(@RequestBody PrenotazioneBenessere p){
        PrenotazioneBenessere prenotazione=prenotazioneBenessereService.salvaPrenotazione(p);
        if(prenotazione!=null){
            return new ResponseEntity<PrenotazioneBenessere>(prenotazione, HttpStatus.CREATED);
        }else
            return new ResponseEntity<String>("ERRORE!! Prenotazione, raggiunto limite massimo", HttpStatus.BAD_REQUEST);
        
    }

    @GetMapping()
    public ResponseEntity<List<PrenotazioneBenessere>> cercaPrenotazioniBenessere(){
        return new ResponseEntity<List<PrenotazioneBenessere>>(prenotazioneBenessereService.cercaTuttePrenotazione(), HttpStatus.OK);
    }
}
