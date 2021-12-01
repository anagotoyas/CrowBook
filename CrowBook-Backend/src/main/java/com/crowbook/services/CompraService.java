package com.crowbook.services;

import com.crowbook.model.*;

import java.util.List;

public interface CompraService {

    Compra crearCompra(Compra compra);
    List<Compra> listarCompra();
    Compra obtenerCompraPorID(Integer idCompra);
    void comprarCrowCoins(Usuario usuario, PaqueteCrowCoin paquete);
    List<Compra> obtenerComprasPorIdUsuario(Usuario usuario);

}
