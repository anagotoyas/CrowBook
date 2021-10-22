package com.crowbook.services;

import com.crowbook.model.Capitulo;

import java.util.List;


public interface CapituloService {

    Capitulo agregarCapitulo(Capitulo capitulo);
    Capitulo modificarCapitulo(Capitulo capitulo);
    List<Capitulo> listarCapitulo();
    Capitulo obtenerCapituloPorIdCapitulo(Integer idCapitulo);

    void eliminarCapitulo(Integer idCapitulo);

}
