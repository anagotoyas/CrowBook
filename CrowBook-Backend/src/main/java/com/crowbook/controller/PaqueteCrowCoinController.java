package com.crowbook.controller;

import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Resena;
import com.crowbook.services.PaqueteCrowCoinService;
import com.crowbook.services.ResenaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/paquetes")
public class PaqueteCrowCoinController {

    private final PaqueteCrowCoinService paqueteService;

    public PaqueteCrowCoinController(PaqueteCrowCoinService paqueteService) {
        this.paqueteService = paqueteService;
    }

    @GetMapping
    public ResponseEntity<List<PaqueteCrowCoin>> listarPaqueteCrowCoin() {
        List<PaqueteCrowCoin> paquete = paqueteService.listarPaqueteCrowCoin();
        return new ResponseEntity<List<PaqueteCrowCoin>>(paquete, HttpStatus.CREATED);
    }

    @GetMapping("/{idPaquete}")
    public ResponseEntity<PaqueteCrowCoin> obtenerPaqueteCrowCoinPorId(@PathVariable("idPaquete") Integer idPaquete) {
        PaqueteCrowCoin paquete = paqueteService.obtenerPaqueteCrowCoinPorId(idPaquete);

        return new ResponseEntity<PaqueteCrowCoin>(paquete, HttpStatus.OK);

    }

    @PostMapping

    public ResponseEntity<PaqueteCrowCoin> crearPaqueteCrowCoin(@Valid @RequestBody PaqueteCrowCoin paquete){
        PaqueteCrowCoin paqueteNew=  paqueteService.crearPaqueteCrowCoin(paquete);
        return new ResponseEntity<PaqueteCrowCoin>(paqueteNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<PaqueteCrowCoin> modificarPaqueteCrowCoin(@Valid @RequestBody PaqueteCrowCoin paquete){
        PaqueteCrowCoin paqueteUpdate=  paqueteService.modificarPaqueteCrowCoin(paquete);
        return new ResponseEntity<PaqueteCrowCoin>(paqueteUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idPaquete}")
    public ResponseEntity<Void> eliminarPaqueteCrowCoin(@PathVariable ("idPaquete") Integer idPaquete){
        paqueteService.eliminarPaqueteCrowCoin(idPaquete);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
