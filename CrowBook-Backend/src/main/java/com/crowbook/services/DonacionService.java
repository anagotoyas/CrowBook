package com.crowbook.services;


import com.crowbook.model.Donacion;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;

import java.util.List;

public interface DonacionService {

    Donacion crearDonacion(Donacion donacion);
    List<Donacion> listarDonacion();
    Donacion obtenerDonacionPorID(Integer idDonacion);
    void donarCrowCoins (Usuario e, Usuario r, Integer coins);
    List<Donacion> verMisDonaciones(Integer idEmisor);
    List<Donacion>  buscarDonacionesPorEmisor(Usuario emisor);

}