package com.crowbook.services.impl;

import com.crowbook.model.Donacion;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.DonacionRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.DonacionService;
import com.crowbook.validators.DonacionValidator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DonacionServiceImpl implements DonacionService {

    private final DonacionRepository donacionRepository;
    private final UsuarioRepository usuarioRepository;

    public DonacionServiceImpl(DonacionRepository donacionRepository, UsuarioRepository usuarioRepository) {
        this.donacionRepository = donacionRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional
    @Override
    public Donacion crearDonacion(Donacion donacion) {
        DonacionValidator.validate(donacion);
        return donacionRepository.save(donacion);
    }

    @Override
    public List<Donacion> listarDonacion() {
        return donacionRepository.findAll();
    }

    @Override
    public Donacion obtenerDonacionPorID(Integer idDonacion) {
        return donacionRepository.findById(idDonacion).orElse(new Donacion());
    }

    @Override
    public void donarCrowCoins(Usuario e, Usuario r, Integer coins) {
        int coins_e= e.getCantidadCrowCoins();
        if (coins_e >= coins){
            int coins_ef= coins_e-coins;
            e.setCantidadCrowCoins(coins_ef);
            int coins_r=r.getCantidadCrowCoins();
            int coins_rf=coins_r+coins;
            r.setCantidadCrowCoins(coins_rf);
        }
    }

    @Override
    public List<Donacion> verMisDonaciones(Integer idEmisor) {
        Usuario emisor = usuarioRepository.findById(idEmisor).orElse(new Usuario());
        List <Donacion> donacionesE = buscarDonacionesPorEmisor(emisor);
        return donacionesE;
    }

    @Override
    public List<Donacion> buscarDonacionesPorEmisor(Usuario emisor) {
        List<Donacion> donaciones = donacionRepository.buscarDonacionesPorEmisor(emisor);
        return donaciones;
    }
}