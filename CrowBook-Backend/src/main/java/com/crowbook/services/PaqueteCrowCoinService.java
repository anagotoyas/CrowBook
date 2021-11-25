package com.crowbook.services;

import com.crowbook.model.Comentario;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Resena;

import java.util.List;

public interface PaqueteCrowCoinService {

    PaqueteCrowCoin crearPaqueteCrowCoin(PaqueteCrowCoin coin);
    PaqueteCrowCoin modificarPaqueteCrowCoin(PaqueteCrowCoin coin);
    List<PaqueteCrowCoin> listarPaqueteCrowCoin();
    PaqueteCrowCoin obtenerPaqueteCrowCoinPorId(Integer idPaquete);
    void eliminarPaqueteCrowCoin(Integer idPaquete);
}
