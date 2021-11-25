package com.crowbook.services.impl;

import com.crowbook.model.Historia;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.UsuarioService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;


    public UsuarioServiceImpl(UsuarioRepository usuarioRepository){
        this.usuarioRepository=usuarioRepository;
    }


    @Override
    public Usuario registrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario modificarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public List<Usuario> listarUsuario() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario obtenerUsuarioPorIdUsuario(Integer idUsuario) {
        return usuarioRepository.findById(idUsuario).orElse(new Usuario());
    }

    @Override
    public void eliminarUsuario(Integer idUsuario) {
        usuarioRepository.deleteById(idUsuario);


    }
    @Override
    public void agregarHistoriaBiblioteca(Usuario usuario, Historia historia) {
        usuario.getBiblioteca().add(historia);


    }
    @Override
    public void agregarHistoriaFavorito(Usuario usuario,Historia historia) {
        usuario.getFavorito().add(historia);
    }

    @Override
    public void eliminarHistoriaBiblioteca(Usuario usuario,Historia historia) {

        usuario.getBiblioteca().remove(historia);


    }
    @Override
    public void eliminarHistoriaFavorito(Usuario usuario,Historia historia) {

        usuario.getFavorito().remove(historia);


    }
    @Override
    public void comprarCrowCoins(Usuario usuario,PaqueteCrowCoin paquete) {

        int compra=paquete.getCantidadCoinsPaquete();
        int coins= usuario.getCantidadCrowCoins();
        int total=compra+coins;
        usuario.setCantidadCrowCoins(total);
    }


}
