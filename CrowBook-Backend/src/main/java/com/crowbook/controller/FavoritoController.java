package com.crowbook.controller;

import com.crowbook.model.Biblioteca;
import com.crowbook.model.Favorito;
import com.crowbook.model.Historia;
import com.crowbook.repositories.FavoritoRepository;
import com.crowbook.repositories.HistoriaRepository;
import com.crowbook.services.FavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/favoritos")
public class FavoritoController {

    private final FavoritoService favoritoService;

    @Autowired
    private FavoritoRepository favoritoRepository;
    @Autowired
    private HistoriaRepository historiaRepository;



    public FavoritoController(FavoritoService favoritoService){
        this.favoritoService=favoritoService;
    }

    @GetMapping
    List<Favorito> listarFavorito() {
        return favoritoRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Favorito> registrarFavorito(@Valid @RequestBody Favorito favorito){
        Favorito favoritoNew =  favoritoService.registrarFavorito(favorito);
        return new ResponseEntity<Favorito>(favoritoNew, HttpStatus.CREATED);
    }

    @PutMapping("/{idFavorito}/historias/{idHistoria}")
    public Favorito agregarHistoriaFavorito(@PathVariable Integer idFavorito, @PathVariable Integer idHistoria){
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Favorito favoritoN =  favoritoRepository.findById(idFavorito).get();
        favoritoN.agregarHistoriaFavorito(historiaN);
        return favoritoRepository.save(favoritoN);

    }

    @DeleteMapping("/{idFavorito}")
    public ResponseEntity<Void> eliminarFavorito(@PathVariable ("idFavorito") Integer idFavorito){
        favoritoService.eliminarFavorito(idFavorito);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{idFavorito}/historias/{idHistoria}")
    public void eliminarHistoriaBiblioteca(@PathVariable ("idFavorito") Integer idFavorito, @PathVariable ("idHistoria") Integer idHistoria){
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Favorito favoritoN =  favoritoRepository.findById(idFavorito).get();
        favoritoN.eliminarHistoriaFavorito(historiaN);
        favoritoRepository.save(favoritoN);
    }

    @GetMapping("/{idFavorito}")
    public ResponseEntity<Favorito> obtenerFavoritoPorIdFavorito(@PathVariable("idFavorito") Integer idFavorito){
        Favorito favorito = favoritoService.getFavoritoPorIdFavorito(idFavorito);
        return new ResponseEntity<Favorito>(favorito, HttpStatus.OK);
    }

}
