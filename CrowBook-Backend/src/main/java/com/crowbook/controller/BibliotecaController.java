package com.crowbook.controller;

import com.crowbook.model.Biblioteca;
import com.crowbook.model.Historia;
import com.crowbook.repositories.BibliotecaRepository;
import com.crowbook.repositories.HistoriaRepository;
import com.crowbook.services.BibliotecaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/bibliotecas")
public class BibliotecaController {

    private final BibliotecaService bibliotecaService;

    @Autowired
    private BibliotecaRepository bibliotecaRepository;
    @Autowired
    private HistoriaRepository historiaRepository;

    public BibliotecaController(BibliotecaService bibliotecaService){
        this.bibliotecaService=bibliotecaService;
    }

    @GetMapping
    List<Biblioteca> listarBiblioteca() {
        return bibliotecaRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Biblioteca> registrarBiblioteca(@Valid @RequestBody Biblioteca biblioteca){
        Biblioteca bibliotecaNew =  bibliotecaService.registrarBiblioteca(biblioteca);
        return new ResponseEntity<Biblioteca>(bibliotecaNew, HttpStatus.CREATED);
    }

    @PutMapping("/{idBiblioteca}/historias/{idHistoria}")
    public Biblioteca agregarHistoriaBiblioteca(@PathVariable Integer idBiblioteca, @PathVariable Integer idHistoria){
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Biblioteca bibliotecaN =  bibliotecaRepository.findById(idBiblioteca).get();
        bibliotecaN.agregarHistoriaBiblioteca(historiaN);
        return bibliotecaRepository.save(bibliotecaN);

    }

    @DeleteMapping("/{idBiblioteca}")
    public ResponseEntity<Void> eliminarBiblioteca(@PathVariable ("idBiblioteca") Integer idBiblioteca){
        bibliotecaService.eliminarBiblioteca(idBiblioteca);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{idBiblioteca}/historias/{idHistoria}")
    public void eliminarHistoriaBiblioteca(@PathVariable ("idBiblioteca") Integer idBiblioteca, @PathVariable ("idHistoria") Integer idHistoria){
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Biblioteca bibliotecaN =  bibliotecaRepository.findById(idBiblioteca).get();
        bibliotecaN.eliminarHistoriaBiblioteca(historiaN);
        bibliotecaRepository.save(bibliotecaN);
}
    @GetMapping("/{idBiblioteca}")
    public ResponseEntity<Biblioteca> obtenerBibliotecaorIdBiblioteca(@PathVariable("idBiblioteca") Integer idBiblioteca){
        Biblioteca biblioteca = bibliotecaService.getHistoriaPorIdBiblioteca(idBiblioteca);
        return new ResponseEntity<Biblioteca>(biblioteca, HttpStatus.OK);
    }

}