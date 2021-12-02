package com.crowbook.controller;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;

import com.crowbook.model.Usuario;
import com.crowbook.services.HistoriaService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/historias")
public class HistoriaController {

    private final HistoriaService historiaService;

    public HistoriaController(HistoriaService historiaService){
        this.historiaService=historiaService;
    }

    @GetMapping
    public ResponseEntity<List<Historia>> listarHistoria(){
        List<Historia> historia=historiaService.listarHistoria();
        return new ResponseEntity<List<Historia>> (historia, HttpStatus.CREATED);
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<Historia>> index(Pageable pageable) {
        Page<Historia> historias = historiaService.index(pageable);
        return new ResponseEntity<Page<Historia>>(historias, HttpStatus.OK);
    }


    @GetMapping("/{idHistoria}")
    public ResponseEntity<Historia> obtenerHistoriaPorIdHistoria(@PathVariable("idHistoria") Integer idHistoria){
        Historia historia=historiaService.obtenerHistoriaPorIdHistoria(idHistoria);
        return new ResponseEntity<Historia>(historia, HttpStatus.OK);
    }

    @GetMapping("/buscarPorNombre")
    public ResponseEntity<List<Historia>> buscarHistoriaPorNombre(@RequestParam String nombreHistoria){
        List<Historia> historiaN=historiaService.buscarHistoriaPorNombre(nombreHistoria);
        return new ResponseEntity<List<Historia>>(historiaN, HttpStatus.OK);
    }

    @GetMapping("/listarPorCategoria")
    public ResponseEntity<List<Historia>> listarHistoriaPorCategoria(@RequestParam Categoria categoria){
        List<Historia> historiaC=historiaService.listarHistoriaPorCategoria(categoria);
        return new ResponseEntity<List<Historia>>(historiaC, HttpStatus.OK);
    }

    @GetMapping("/buscarPorIdUsuario")
    public ResponseEntity<List<Historia>> buscarHistoriaPorIdUsuario(@RequestParam Usuario usuario){
        List<Historia> usuarioid=historiaService.buscarHistoriaPorIdUsuario(usuario);
        return new ResponseEntity<List<Historia>>(usuarioid, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Historia> registrarHistoria(@Valid @RequestBody Historia historia){
        Historia historiaNew=  historiaService.registrarHistoria(historia);
        return new ResponseEntity<Historia>(historiaNew, HttpStatus.CREATED);
    }
    @PostMapping("/stories")
    @CrossOrigin(origins = "http://localhost:4200/usuarios/historias")
    public ResponseEntity<List<Historia>>  buscarPorUsuario (@Valid @RequestBody Usuario user) throws Exception{

        List<Historia> h= historiaService.fetchHistoria(user);
        return new ResponseEntity<List<Historia>>(h, HttpStatus.OK);

    }

    @PutMapping
    public ResponseEntity<Historia> modificarHistoria(@Valid @RequestBody Historia historia){
        Historia historiaUpdate=  historiaService.modificarHistoria(historia);
        return new ResponseEntity<Historia>(historiaUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idHistoria}")
    public ResponseEntity<Void> eliminarHistoria(@PathVariable ("idHistoria") Integer idHistoria){
        historiaService.eliminarHistoria(idHistoria);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
