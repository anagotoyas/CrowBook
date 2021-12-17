package com.crowbook.controller;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;

import com.crowbook.model.Usuario;
import com.crowbook.services.HistoriaService;

import com.crowbook.utils.WrapperResponse;
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
    public ResponseEntity<WrapperResponse<List<Historia>>> listarHistoria(){
        List<Historia> historia=historiaService.listarHistoria();
        return new WrapperResponse<>(true, "success", historia).createResponse();
    }

    @GetMapping("/pageable")
    public ResponseEntity<Page<Historia>> index(Pageable pageable) {
        Page<Historia> historias = historiaService.index(pageable);
        return new ResponseEntity<Page<Historia>>(historias, HttpStatus.OK);
    }

    @GetMapping("/{idHistoria}")
    public ResponseEntity<WrapperResponse<Historia>> obtenerHistoriaPorIdHistoria(@PathVariable("idHistoria") Integer idHistoria){
        Historia historia=historiaService.obtenerHistoriaPorIdHistoria(idHistoria);
        return new WrapperResponse<>(true, "success", historia).createResponse();
    }

    @GetMapping("/buscarPorNombre")
    public ResponseEntity<WrapperResponse<List<Historia>>> buscarHistoriaPorNombre(@RequestParam String nombreHistoria){
        List<Historia> historiaN=historiaService.buscarHistoriaPorNombre(nombreHistoria);
        return new WrapperResponse<>(true, "success", historiaN).createResponse();
    }

    @GetMapping("/listarPorCategoria")
    public ResponseEntity<WrapperResponse<List<Historia>>> listarHistoriaPorCategoria(@RequestParam Categoria categoria){
        List<Historia> historiaC=historiaService.listarHistoriaPorCategoria(categoria);
        return new WrapperResponse<>(true, "success", historiaC).createResponse();
    }

    @GetMapping("/listarPorIdCategoria")
    public ResponseEntity<WrapperResponse<List<Historia>>> listarHistoriasPorIdCategoria(@RequestParam Integer idCategoria){
        List<Historia> historiaC=historiaService.listarHistoriasPorIdCategoria(idCategoria);
        return new WrapperResponse<>(true, "success", historiaC).createResponse();
    }

    @GetMapping("/buscarPorIdUsuario")
    public ResponseEntity<WrapperResponse<List<Historia>>> buscarHistoriaPorIdUsuario(@RequestParam Usuario usuario){
        List<Historia> usuarioid=historiaService.buscarHistoriaPorIdUsuario(usuario);
        return new WrapperResponse<>(true, "success", usuarioid).createResponse();
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Historia>> registrarHistoria(@Valid @RequestBody Historia historia){
        Historia historiaNew=  historiaService.registrarHistoria(historia);
        return new WrapperResponse<>(true, "success", historiaNew).createResponse();
    }

    @PutMapping
    public ResponseEntity<WrapperResponse<Historia>> modificarHistoria(@Valid @RequestBody Historia historia){
        Historia historiaUpdate=  historiaService.modificarHistoria(historia);
        return new WrapperResponse<>(true,"success", historiaUpdate).createResponse();
    }

    @DeleteMapping("/{idHistoria}")
    public ResponseEntity<WrapperResponse<Void>> eliminarHistoria(@PathVariable ("idHistoria") Integer idHistoria){
        historiaService.eliminarHistoria(idHistoria);
        return new WrapperResponse<Void>(true, "success", null).createResponse(HttpStatus.NO_CONTENT);
    }
}
