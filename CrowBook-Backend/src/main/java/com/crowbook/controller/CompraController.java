package com.crowbook.controller;

import com.crowbook.model.*;
import com.crowbook.repositories.PaqueteCrowCoinRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/compras")
public class CompraController {

    private final CompraService compraService;

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PaqueteCrowCoinRepository paqueteRepository;

    public CompraController(CompraService compraService) {
        this.compraService = compraService;
    }

    @GetMapping
    public ResponseEntity<List<Compra>> listarCompra() {
        List<Compra> compra = compraService.listarCompra();
        return new ResponseEntity<List<Compra>>(compra, HttpStatus.CREATED);
    }

    @GetMapping("/{idCompra}")
    public ResponseEntity<Compra> obtenerCompraPorIdCompra(@PathVariable("idCompra") Integer idCompra){
        Compra compra = compraService.obtenerCompraPorID(idCompra);
        return new ResponseEntity<Compra>(compra, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Compra> crearCompra(@Valid @RequestBody Compra compra){
        Compra compraN = compraService.crearCompra(compra);
        PaqueteCrowCoin paqueteN = compraN.getPaqueteComprado();
        Integer id_p = paqueteN.getIdPaquete();
        PaqueteCrowCoin p = paqueteRepository.findById(id_p).get();
        Usuario usuarioN = compraN.getUsuario();
        Integer id_u = usuarioN.getIdUsuario();
        Usuario u = usuarioRepository.findById(id_u).get();
        compraService.comprarCrowCoins(u, p);
        usuarioRepository.save(u);
        return new ResponseEntity<Compra>(compraN, HttpStatus.CREATED);

    }

    @GetMapping("/buscarPorIdUsuario")
    public ResponseEntity<List<Compra>> ComprasPorIdUsuario(@RequestParam Usuario usuario){
        List<Compra> usuarioid = compraService.obtenerComprasPorIdUsuario(usuario);
        return new ResponseEntity<List<Compra>>(usuarioid, HttpStatus.OK);
    }

}
