package com.crowbook.controller;

import com.crowbook.model.Capitulo;

import com.crowbook.services.CapituloService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/capitulos")
public class CapituloController {

    private final CapituloService capituloService;

    public CapituloController(CapituloService capituloService){
        this.capituloService=capituloService;
    }

    @GetMapping
    public ResponseEntity<List<Capitulo>> listarCapitulo(){
        List<Capitulo> capitulo=capituloService.listarCapitulo();
        return new ResponseEntity<List<Capitulo>> (capitulo, HttpStatus.CREATED);
    }

    @GetMapping("/{idCapitulo}")
    public ResponseEntity<Capitulo> obtenerCapituloPorIdCapitulo(@PathVariable("idCapitulo") Integer idCapitulo){
        Capitulo capitulo=capituloService.obtenerCapituloPorIdCapitulo(idCapitulo);
        return new ResponseEntity<Capitulo>(capitulo, HttpStatus.OK);
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

    @DeleteMapping("/{idCapitulo}")
    public ResponseEntity<Void> eliminarCapitulo(@PathVariable ("idCapitulo") Integer idCapitulo){
        capituloService.eliminarCapitulo(idCapitulo);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }


}

