package com.crowbook.controller;

import com.crowbook.model.Compra;
import com.crowbook.model.Membresia;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.MembresiaRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.MembresiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/membresias")
public class MembresiaController {

    private final MembresiaService membresiaService;

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private MembresiaRepository membresiaRepository;

    public MembresiaController(MembresiaService membresiaService) {
        this.membresiaService = membresiaService;
    }

    @GetMapping
    public ResponseEntity<List<Membresia>> listarMembresia() {
        List<Membresia> membresia = membresiaService.listarMembresia();
        return new ResponseEntity<List<Membresia>>(membresia, HttpStatus.CREATED);
    }

    @GetMapping("/{idMembresia}")
    public ResponseEntity<Membresia> obtenerMembresiaPorIdMembresia(@PathVariable("idMembresia") Integer idMembresia){
        Membresia membresia = membresiaService.obtenerMembresiaPorID(idMembresia);
        return new ResponseEntity<Membresia>(membresia, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Membresia> crearMembresia(@Valid @RequestBody Membresia membresia){
        Membresia membresiaN = membresiaService.crearMembresia(membresia);
        Usuario usuarioN = membresiaN.getUsuario();
        Integer id_u = usuarioN.getIdUsuario();
        Usuario u = usuarioRepository.findById(id_u).get();
        membresiaService.otorgarMembresia(u);
        usuarioRepository.save(u);
        return new ResponseEntity<Membresia>(membresiaN, HttpStatus.CREATED);

    }

    @PutMapping
    public ResponseEntity<Membresia> cancelarMembresia(@Valid @RequestBody Membresia membresia){
        Usuario usuarioN = membresia.getUsuario();
        Integer id_u = usuarioN.getIdUsuario();
        Usuario u = usuarioRepository.findById(id_u).get();
        membresiaService.cancelarMembresia(u);
        usuarioRepository.save(u);
        return new ResponseEntity<Membresia>(membresia, HttpStatus.CREATED);

    }

    @PutMapping("/renovar")
    public ResponseEntity<Membresia> renovarMembresia(@Valid @RequestBody Membresia membresia){
        Usuario usuarioN = membresia.getUsuario();
        Integer id_u = usuarioN.getIdUsuario();
        Usuario u = usuarioRepository.findById(id_u).get();
        membresiaService.otorgarMembresia(u);
        usuarioRepository.save(u);
        return new ResponseEntity<Membresia>(membresia, HttpStatus.CREATED);

    }

    @GetMapping("/membresiaPorIdUsuario")
    public ResponseEntity<Membresia> MembresiaPorIdUsuario(@RequestParam Usuario usuario){
        Membresia usuarioid = membresiaService.obtenerMembresiaPorIdUsuario(usuario);
        return new ResponseEntity<Membresia>(usuarioid, HttpStatus.OK);
    }

}
