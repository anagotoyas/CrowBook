package com.crowbook.controller;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;
import com.crowbook.model.Resena;
import com.crowbook.services.CategoriaService;
import com.crowbook.services.HistoriaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/categorias")

public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService){
        this.categoriaService=categoriaService;
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> listarCategorias(){
        List<Categoria> categoria=categoriaService.listarCategorias();
        return new ResponseEntity<List<Categoria>> (categoria, HttpStatus.CREATED);
    }


    @GetMapping("/{idCategoria}")
    public ResponseEntity<Categoria> obtenerCategoriaPorIdCategoria(@PathVariable("idCategoria") Integer idCategoria){
        Categoria categoria=categoriaService.obtenerCategoriaPorIdCategoria(idCategoria);
        return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Categoria> crearCategoria(@Valid @RequestBody Categoria categoria){
        Categoria categoriaNew=  categoriaService.crearCategoria(categoria);
        return new ResponseEntity<Categoria>(categoriaNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Categoria> modificarCategoria(@Valid @RequestBody Categoria categoria){
        Categoria categoriaUpdate=  categoriaService.modificarCategoria(categoria);
        return  new ResponseEntity<Categoria>(categoriaUpdate, HttpStatus.CREATED);
    }


    @DeleteMapping("/{idCategoria}")
    public ResponseEntity<Void> eliminarCategoria(@PathVariable ("idCategoria") Integer idCategoria){
        categoriaService.eliminarCategoria(idCategoria);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
