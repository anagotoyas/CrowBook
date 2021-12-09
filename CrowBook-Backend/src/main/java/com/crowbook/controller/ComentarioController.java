package com.crowbook.controller;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Comentario;
import com.crowbook.model.Historia;
import com.crowbook.model.Resena;
import com.crowbook.services.ComentarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/comentarios")
public class ComentarioController {


    private final ComentarioService comentarioService;

    public ComentarioController(ComentarioService comentarioService) {
        this.comentarioService = comentarioService;
    }

    @GetMapping
    public ResponseEntity<List<Comentario>> listarComentario() {
        List<Comentario> comentario = comentarioService.listarComentario();
        return new ResponseEntity<List<Comentario>>(comentario, HttpStatus.CREATED);
    }

    @GetMapping("/{idComentario}")
    public ResponseEntity<Comentario> obtenerComentarioPorIdComentario(@PathVariable("idComentario") Integer idComentario) {
        Comentario comentario = comentarioService.obtenerComentarioPorIdComentario(idComentario);

        return new ResponseEntity<Comentario>(comentario, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Comentario> crearComentario(@Valid @RequestBody Comentario comentario){
        Comentario comentarioNew= comentarioService.crearComentario(comentario);
        return new ResponseEntity<Comentario>(comentarioNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Comentario> modificarComentario(@Valid @RequestBody Comentario comentario){
        Comentario comentarioUpdate=  comentarioService.modificarComentario(comentario);
        return new ResponseEntity<Comentario>(comentarioUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idComentario}")
    public ResponseEntity<Void> eliminarComentario(@PathVariable ("idComentario") Integer idComentario){
        comentarioService.eliminarComentario(idComentario);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/buscarPorIdCapitulo")
    public ResponseEntity<List<Comentario>> buscarComentarioPorIdCapitulo(@RequestParam Capitulo capitulo){
        List<Comentario> capituloid=comentarioService.buscarComentarioPorIdCapitulo(capitulo);
        return new ResponseEntity<List<Comentario>>(capituloid, HttpStatus.OK);
    }

}
//buscarComentarioPorIdCapitulo