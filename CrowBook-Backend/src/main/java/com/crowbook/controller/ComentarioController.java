package com.crowbook.controller;

import com.crowbook.model.Comentario;
import com.crowbook.services.ComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
