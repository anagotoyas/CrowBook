package com.crowbook.services.impl;


import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Resena;
import com.crowbook.repositories.PaqueteCrowCoinRepository;
import com.crowbook.services.PaqueteCrowCoinService;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PaqueteCrowCoinImpl implements PaqueteCrowCoinService {

    private final PaqueteCrowCoinRepository paqueteCrowCoinRepository;

    public PaqueteCrowCoinImpl(PaqueteCrowCoinRepository paqueteCrowCoinRepository){
        this.paqueteCrowCoinRepository=paqueteCrowCoinRepository;
    }

    @Override
    public PaqueteCrowCoin crearPaqueteCrowCoin(PaqueteCrowCoin coin) {
        return paqueteCrowCoinRepository.save(coin);
    }

    @Override
    public PaqueteCrowCoin modificarPaqueteCrowCoin(PaqueteCrowCoin coin) {
        return paqueteCrowCoinRepository.save(coin);
    }


    @Override
    public List<PaqueteCrowCoin> listarPaqueteCrowCoin() {
        return paqueteCrowCoinRepository.findAll();
    }

    @Override
    public PaqueteCrowCoin obtenerPaqueteCrowCoinPorId(Integer idPaquete) {
        return paqueteCrowCoinRepository.findById(idPaquete).orElse(new PaqueteCrowCoin());
    }

    @Override
    public void eliminarPaqueteCrowCoin(Integer idPaquete) {
        paqueteCrowCoinRepository.deleteById(idPaquete);
    }
}
