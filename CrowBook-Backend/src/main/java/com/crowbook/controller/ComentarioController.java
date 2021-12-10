package com.crowbook.controller;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Comentario;
import com.crowbook.services.ComentarioService;
import com.crowbook.utils.WrapperResponse;
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
    public ResponseEntity<WrapperResponse<List<Comentario>>> listarComentario() {
        List<Comentario> comentario = comentarioService.listarComentario();
        return new WrapperResponse<>(true, "success", comentario).createResponse();
    }

    @GetMapping("/{idComentario}")
    public ResponseEntity<WrapperResponse<Comentario>> obtenerComentarioPorIdComentario(@PathVariable("idComentario") Integer idComentario) {
        Comentario comentario = comentarioService.obtenerComentarioPorIdComentario(idComentario);

        return new WrapperResponse<>(true, "success", comentario).createResponse();
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Comentario>> crearComentario(@Valid @RequestBody Comentario comentario){
        Comentario comentarioNew= comentarioService.crearComentario(comentario);
        return new WrapperResponse<>(true, "success", comentarioNew).createResponse();
    }

    @PutMapping
    public ResponseEntity<WrapperResponse<Comentario>> modificarComentario(@Valid @RequestBody Comentario comentario){
        Comentario comentarioUpdate=  comentarioService.modificarComentario(comentario);
        return new WrapperResponse<>(true, "success", comentarioUpdate).createResponse();
    }

    @GetMapping("/buscarPorIdCapitulo")
    public ResponseEntity<WrapperResponse<List<Comentario>>> buscarComentarioPorIdCapitulo(@RequestParam Capitulo capitulo){
        List<Comentario> capituloid=comentarioService.buscarComentarioPorIdCapitulo(capitulo);
        return new WrapperResponse<>(true, "success", capituloid).createResponse();
    }

    @DeleteMapping("/{idComentario}")
    public ResponseEntity<WrapperResponse<Void>> eliminarComentario(@PathVariable ("idComentario") Integer idComentario){
        comentarioService.eliminarComentario(idComentario);
        return new WrapperResponse<Void>(true, "success", null).createResponse(HttpStatus.NO_CONTENT);
    }

}
