package com.crowbook.controller;


import com.crowbook.model.Usuario;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService){
        this.usuarioService=usuarioService;
    }
    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios(){
        List<Usuario> usuarios=usuarioService.listarUsuario();
        return new ResponseEntity<List<Usuario>> (usuarios, HttpStatus.CREATED);
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<Usuario> obtenerUsuarioPorIdUsuario(@PathVariable ("idUsuario") Integer idUsuario){
        Usuario usuario=usuarioService.obtenerUsuarioPorIdUsuario(idUsuario);
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Usuario> registrarUsuario(@Valid @RequestBody Usuario usuario){
        Usuario usuarioNew=  usuarioService.registrarUsuario(usuario);
        return new ResponseEntity<Usuario>(usuarioNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Usuario> modificarUsuario(@Valid @RequestBody Usuario usuario){
        Usuario usuarioUpdate=  usuarioService.modificarUsuario(usuario);
        return new ResponseEntity<Usuario>(usuarioUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable ("idUsuario") Integer idUsuario){
        usuarioService.eliminarUsuario(idUsuario);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
