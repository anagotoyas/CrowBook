package com.crowbook.services.impl;

import com.crowbook.model.Favorito;
import com.crowbook.repositories.FavoritoRepository;
import com.crowbook.services.FavoritoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritoServiceImpl implements FavoritoService {

    private final FavoritoRepository favoritoRepository;

    public FavoritoServiceImpl(FavoritoRepository favoritoRepository){
        this.favoritoRepository = favoritoRepository;
    }

    @Override
    public Favorito registrarFavorito(Favorito favorito) {
        return favoritoRepository.save(favorito);
    }

    @Override
    public Favorito obtenerFavoritoPorId(Integer idFavorito) {
        return favoritoRepository.findById(idFavorito).orElse(new Favorito());
    }

    @Override
    public void eliminarFavorito(Integer idFavorito) {
        favoritoRepository.deleteById(idFavorito);
    }

    @Override
    public List<Favorito> listarFavorito() {
        return favoritoRepository.findAll();
    }

    @Override
    public Favorito getFavoritoPorIdFavorito(Integer idFavorito) {
        return favoritoRepository.findById(idFavorito).orElse(new Favorito());
    }

}
