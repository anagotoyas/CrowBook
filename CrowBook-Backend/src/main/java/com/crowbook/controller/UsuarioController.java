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
import com.crowbook.utils.WrapperResponse;
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

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Usuario>>> listarUsuarios() {
        List<Usuario> usuarios = usuarioService.listarUsuario();
        return new WrapperResponse<>(true,"success",usuarios).createResponse();
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<WrapperResponse<Usuario>> obtenerUsuarioPorIdUsuario(@PathVariable("idUsuario") Integer idUsuario) {
        Usuario usuario = usuarioService.obtenerUsuarioPorIdUsuario(idUsuario);
        return new WrapperResponse<>(true,"success",usuario).createResponse();
    }

    @GetMapping("/cantidadCoinsPorIdUsuario")
    public ResponseEntity<WrapperResponse<Integer>> getCantidadDeCrowcoinsPorIdUsuario(@RequestParam Integer idUsuario){
        Integer idUduario=usuarioService.getCantidadDeCrowcoinsPorIdUsuario(idUsuario);
        return new WrapperResponse<>(true, "success", idUduario).createResponse();
    }

    @GetMapping("/idUsuarioPorIdHistoria")
    public ResponseEntity<WrapperResponse<Integer>> obtenerIdUsuarioPorIdHistoria(@RequestParam Integer historia){
        Integer idUduario=usuarioService.obtenerIdUsuarioPorIdHistoria(historia);
        return new WrapperResponse<>(true, "success", idUduario).createResponse();
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Usuario>> registrarUsuario(@Valid @RequestBody Usuario usuario) {
        Usuario userNull=null;
        if (usuarioService.userExists(usuario.getNombreUsuario())){

            return new WrapperResponse<>(false,"El nombre de usuario ya existe", userNull).createResponse();
        }
        else if(usuarioService.correoExists(usuario.getCorreo())){
            return new WrapperResponse<>(false,"El correo ya se encuentra registrado", userNull).createResponse();
        }

        else {
            Usuario usuarioNew = usuarioService.registrarUsuario(usuario);
            return new WrapperResponse<>(true,"success",usuarioNew).createResponse();
        }
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
    public ResponseEntity<WrapperResponse<Usuario>> modificarUsuario(@Valid @RequestBody Usuario usuario) {
        Usuario usuarioUpdate = usuarioService.modificarUsuario(usuario);
        return new WrapperResponse<>(true,"success",usuarioUpdate).createResponse();
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

