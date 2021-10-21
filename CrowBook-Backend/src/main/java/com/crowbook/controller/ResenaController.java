package com.crowbook.controller;

import com.crowbook.model.Resena;
import com.crowbook.services.ResenaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/resenas")
public class ResenaController {
    private final ResenaService resenaService;

    public ResenaController(ResenaService resenaService){
        this.resenaService=resenaService;
    }

    @GetMapping
    public ResponseEntity<List<Resena>> listarResena(){
        List<Resena> resena=resenaService.listarResena();
        return new ResponseEntity<List<Resena>> (resena, HttpStatus.CREATED);
    }

    @GetMapping("/{idResena}")
    public ResponseEntity<Resena> obtenerResenaPorIdResena(@PathVariable("idResena") Integer idResena){
        Resena resena=resenaService.obtenerResenaPorIdResena(idResena);
        return new ResponseEntity<Resena>(resena, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Resena> registrarResena(@Valid @RequestBody Resena resena){
        Resena resenaNew=  resenaService.registrarResena(resena);
        return new ResponseEntity<Resena>(resenaNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Resena> modificarResena(@Valid @RequestBody Resena resena){
        Resena resenaUpdate=  resenaService.modificarResena(resena);
        return new ResponseEntity<Resena>(resenaUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idResena}")
    public ResponseEntity<Void> eliminarResena(@PathVariable ("idResena") Integer idResena){
        resenaService.eliminarResena(idResena);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
