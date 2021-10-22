package com.crowbook.controller;

import com.crowbook.model.Capitulo;

import com.crowbook.model.Resena;
import com.crowbook.services.CapituloService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/capitulos")
public class CapituloController {

    private final CapituloService capituloService;

    public CapituloController(CapituloService capituloService){
        this.capituloService=capituloService;
    }

    @PostMapping
    public ResponseEntity<Capitulo> agregarCapitulo(@Valid @RequestBody Capitulo capitulo){
        Capitulo capituloNew=  capituloService.agregarCapitulo(capitulo);
        return new ResponseEntity<Capitulo>(capituloNew, HttpStatus.CREATED);

    }

    @PutMapping
    public ResponseEntity<Capitulo> modificarCapitulo(@Valid @RequestBody Capitulo capitulo){
        Capitulo capituloUpdate=  capituloService.modificarCapitulo(capitulo);
        return new ResponseEntity<Capitulo>(capituloUpdate, HttpStatus.CREATED);
    }


}

