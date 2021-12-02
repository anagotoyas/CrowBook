package com.crowbook.controller;


import com.crowbook.model.Donacion;
import com.crowbook.model.Historia;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.DonacionRepository;
import com.crowbook.repositories.HistoriaRepository;
import com.crowbook.repositories.PaqueteCrowCoinRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;
    @Autowired
    private HistoriaRepository historiaRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PaqueteCrowCoinRepository paqueteRepository;
    @Autowired
    private DonacionRepository donacionRepository;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        List<Usuario> usuarios = usuarioService.listarUsuario();
        return new ResponseEntity<List<Usuario>>(usuarios, HttpStatus.CREATED);
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<Usuario> obtenerUsuarioPorIdUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = usuarioService.obtenerUsuarioPorIdUsuario(idUsuario);
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Usuario> registrarUsuario(@Valid @RequestBody Usuario usuario) {
        Usuario usuarioNew = usuarioService.registrarUsuario(usuario);
        return new ResponseEntity<Usuario>(usuarioNew, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200/signin")
    public Usuario signIn (@Valid @RequestBody Usuario user) throws Exception{
        String nombreUsuario= user.getNombreUsuario();
        String contrasenaUsuario= user.getContrasenaUsuario();
        Usuario userObj=null;
        if (nombreUsuario !=null && contrasenaUsuario!= null){
            userObj=usuarioService.fetchUserByNombreyContra(nombreUsuario,contrasenaUsuario);
        }
        if(userObj==null){
            throw new Exception("malas credenciales");
        }
        return  userObj;
    }


    @PutMapping
    public ResponseEntity<Usuario> modificarUsuario(@Valid @RequestBody Usuario usuario) {
        Usuario usuarioUpdate = usuarioService.modificarUsuario(usuario);
        return new ResponseEntity<Usuario>(usuarioUpdate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        usuarioService.eliminarUsuario(idUsuario);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{idUsuario}/biblioteca/{idHistoria}")
    public Usuario agregarHistoriaBiblioteca(@PathVariable Integer idUsuario, @PathVariable Integer idHistoria) {
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Usuario usuarioN = usuarioRepository.findById(idUsuario).get();
        usuarioService.agregarHistoriaBiblioteca(usuarioN,historiaN);
        return usuarioRepository.save(usuarioN);

    }
    @PutMapping("/{idUsuario}/favorito/{idHistoria}")
    public Usuario agregarHistoriaFavorito(@PathVariable Integer idUsuario, @PathVariable Integer idHistoria) {
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Usuario usuarioN = usuarioRepository.findById(idUsuario).get();
        usuarioService.agregarHistoriaFavorito(usuarioN,historiaN);
        return usuarioRepository.save(usuarioN);

    }
    @DeleteMapping("/{idUsuario}/biblioteca/{idHistoria}")
    public Usuario eliminarHistoriaBiblioteca(@PathVariable Integer idUsuario, @PathVariable Integer idHistoria) {
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Usuario usuarioN = usuarioRepository.findById(idUsuario).get();
        usuarioService.eliminarHistoriaBiblioteca(usuarioN,historiaN);
        return usuarioRepository.save(usuarioN);

    }
    @DeleteMapping("/{idUsuario}/favorito/{idHistoria}")
    public Usuario eliminarHistoriaFavorito(@PathVariable Integer idUsuario, @PathVariable Integer idHistoria) {
        Historia historiaN = historiaRepository.findById(idHistoria).get();
        Usuario usuarioN = usuarioRepository.findById(idUsuario).get();
        usuarioService.eliminarHistoriaFavorito(usuarioN,historiaN);
        return usuarioRepository.save(usuarioN);

    }
    @GetMapping("/{idUsuario}/biblioteca")
    public Set<Historia> obtenerBibliotecaPorIdUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = usuarioService.obtenerUsuarioPorIdUsuario(idUsuario);
        return usuario.getBiblioteca();

    }
    @GetMapping("/{idUsuario}/favorito")
    public Set<Historia> obtenerFavoritoPorIdUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = usuarioService.obtenerUsuarioPorIdUsuario(idUsuario);
        return usuario.getFavorito();

    }





}

