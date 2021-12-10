package com.crowbook.controller;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Historia;

import com.crowbook.services.CapituloService;

import com.crowbook.utils.WrapperResponse;
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
    public ResponseEntity<WrapperResponse<List<Capitulo>>> listarCapitulo(){
        List<Capitulo> capitulo=capituloService.listarCapitulo();
        return new WrapperResponse<>(true, "success", capitulo).createResponse();
    }

    @GetMapping("/listarPorHistoria")
    public ResponseEntity<WrapperResponse<List<Capitulo>>> listarCapitulosPorHistoria(@RequestParam Historia historia){
        List<Capitulo> capituloH=capituloService.listarCapitulosPorHistoria(historia);
        return new WrapperResponse<>(true, "success", capituloH).createResponse();
    }

    @GetMapping("/{idCapitulo}")
    public ResponseEntity<WrapperResponse<Capitulo>> obtenerCapituloPorIdCapitulo(@PathVariable("idCapitulo") Integer idCapitulo){
        Capitulo capitulo=capituloService.obtenerCapituloPorIdCapitulo(idCapitulo);
        return new WrapperResponse<>(true, "success", capitulo).createResponse();
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Capitulo>> agregarCapitulo(@Valid @RequestBody Capitulo capitulo){
        Capitulo capituloNew=  capituloService.agregarCapitulo(capitulo);
        return new WrapperResponse<>(true, "success", capituloNew).createResponse();

    }

    @PutMapping
    public ResponseEntity<WrapperResponse<Capitulo>> modificarCapitulo(@Valid @RequestBody Capitulo capitulo){
        Capitulo capituloUpdate=  capituloService.modificarCapitulo(capitulo);
        return new WrapperResponse<>(true, "success", capituloUpdate).createResponse();
    }

    @DeleteMapping("/{idCapitulo}")
    public ResponseEntity<Void> eliminarCapitulo(@PathVariable ("idCapitulo") Integer idCapitulo){
        capituloService.eliminarCapitulo(idCapitulo);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }


}

