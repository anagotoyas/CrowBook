package com.crowbook.controller;

import com.crowbook.model.Compra;
import com.crowbook.model.Donacion;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.PaqueteCrowCoinRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.DonacionService;
import com.crowbook.services.UsuarioService;
import com.crowbook.utils.WrapperResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/donacion")
public class DonacionController {
    @Autowired
    private UsuarioRepository usuarioRepository;
    private final DonacionService donacionService;

    public DonacionController(DonacionService donacionService) {
        this.donacionService = donacionService;
    }

    @GetMapping
    public ResponseEntity<WrapperResponse<List<Donacion>>> listarDonacion() {
        List<Donacion> donacions = donacionService.listarDonacion();
        return new WrapperResponse<>(true, "success",donacions).createResponse();
    }

    @GetMapping("/misDonaciones")
    public ResponseEntity<WrapperResponse<List<Donacion>>> verMisDonaciones(@RequestParam Integer idUsuario) {
        List<Donacion> donacions = donacionService.verMisDonaciones(idUsuario);
        return new WrapperResponse<>(true, "success",donacions).createResponse();
    }

    @GetMapping("/{idDonacion}")
    public ResponseEntity<WrapperResponse<Donacion>> obtenerDonacionPorIdDonacion(@PathVariable("idDonacion") Integer idDonacion){
        Donacion donacion = donacionService.obtenerDonacionPorID(idDonacion);
        return new WrapperResponse<>(true, "success", donacion).createResponse();
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Donacion>> crearDonacion(@Valid @RequestBody Donacion donacion){
        Donacion donacionN = donacionService.crearDonacion(donacion);
        Usuario usuarioE = donacionN.getEmisor();
        Integer id_u1 = usuarioE.getIdUsuario();
        Usuario u1 = usuarioRepository.findById(id_u1).get();
        Usuario usuarioR = donacionN.getReceptor();
        Integer id_u2 = usuarioR.getIdUsuario();
        Usuario u2 = usuarioRepository.findById(id_u2).get();
        Integer coins=donacionN.getCantidadCoinsDonacion();
        donacionService.donarCrowCoins(u1, u2, coins);
        usuarioRepository.save(u1);
        usuarioRepository.save(u2);
        return new WrapperResponse<>(true, "success", donacionN).createResponse();

    }



}