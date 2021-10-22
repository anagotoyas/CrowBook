package com.crowbook.controller;

import com.crowbook.model.Comentario;
import com.crowbook.services.ComentarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {


    private final ComentarioService comentarioService;

    public ComentarioController(ComentarioService comentarioService) {
        this.comentarioService = comentarioService;
    }

    @PostMapping
    public ResponseEntity<Comentario> crearComentario(@Valid @RequestBody Comentario comentario){
        Comentario comentarioNew= comentarioService.crearComentario(comentario);
        return new ResponseEntity<Comentario>(comentarioNew, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idComentario}")
    public ResponseEntity<Void> eliminarCapitulo(@PathVariable ("idComentario") Integer idComentario){
        comentarioService.eliminarComentario(idComentario);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
