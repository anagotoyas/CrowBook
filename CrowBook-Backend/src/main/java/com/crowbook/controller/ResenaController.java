package com.crowbook.controller;

import com.crowbook.model.Historia;
import com.crowbook.model.Resena;

import com.crowbook.services.ResenaService;


import com.crowbook.utils.WrapperResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/resenas")
public class ResenaController {

    private final ResenaService resenaService;

    public ResenaController(ResenaService resenaService) {
        this.resenaService = resenaService;
    }

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Resena>>> listarResena() {
        List<Resena> resena = resenaService.listarResena();
        return new WrapperResponse<>(true, "success", resena).createResponse();
    }

    @GetMapping("/{idResena}")
    public ResponseEntity<WrapperResponse<Resena>> obtenerResenaPorIdResena(@PathVariable("idResena") Integer idResena) {
        Resena resena = resenaService.obtenerResenaPorIdResena(idResena);

        return new WrapperResponse<>(true, "success", resena).createResponse();
        
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Resena>> registrarResena(@Valid @RequestBody Resena resena){
        Resena resenaNew=  resenaService.registrarResena(resena);
        return new WrapperResponse<>(true, "success", resenaNew).createResponse();
    }

    @PutMapping
    public ResponseEntity<WrapperResponse<Resena>> modificarResena(@Valid @RequestBody Resena resena){
        Resena resenaUpdate=  resenaService.modificarResena(resena);
        return new WrapperResponse<>(true, "success", resenaUpdate).createResponse();
    }

    @GetMapping("/buscarPorIdHistoria")
    public ResponseEntity<WrapperResponse<List<Resena>>> buscarResenaPorIdHistoria(@RequestParam Historia historia){
        List<Resena> historiaid=resenaService.buscarResenaPorIdHistoria(historia);
        return new WrapperResponse<>(true, "success", historiaid).createResponse();
    }

    @DeleteMapping("/{idResena}")
    public ResponseEntity<Void> eliminarResena(@PathVariable ("idResena") Integer idResena){
        resenaService.eliminarResena(idResena);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}


