package com.crowbook.services.impl;

import com.crowbook.model.Compra;
import com.crowbook.model.Historia;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.CompraRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.CompraService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraServiceImpl implements CompraService {

    private final CompraRepository compraRepository;
    private UsuarioRepository usuarioRepository;

    public CompraServiceImpl(CompraRepository compraRepository) {
        this.compraRepository = compraRepository;
    }

    @Override
    public Compra crearCompra(Compra compra) {
        return compraRepository.save(compra);
    }

    @Override
    public List<Compra> listarCompra() {
        return compraRepository.findAll();
    }

    @Override
    public Compra obtenerCompraPorID(Integer idCompra) {
        return compraRepository.findById(idCompra).orElse(new Compra());
    }

    @Override
    public List<Compra> obtenerComprasPorIdUsuario(Usuario usuario) {
        List<Compra> compras = compraRepository.buscarComprasPorIdUsuario(usuario);
        return compras;
    }

    @Override
    public void comprarCrowCoins(Usuario usuario, PaqueteCrowCoin paquete) {

        int compra= paquete.getCantidadCoinsPaquete();
        int coins= usuario.getCantidadCrowCoins();
        int total=compra+coins;
        usuario.setCantidadCrowCoins(total);

    }

}
