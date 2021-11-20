package com.crowbook.services;

import com.crowbook.model.Biblioteca;
import com.crowbook.model.Favorito;

import java.util.List;

public interface FavoritoService {

    Favorito registrarFavorito(Favorito favorito);
    Favorito obtenerFavoritoPorId(Integer idFavorito);
    void eliminarFavorito(Integer idFavorito);
    List<Favorito> listarFavorito();
    Favorito getFavoritoPorIdFavorito(Integer idFavorito);

}
