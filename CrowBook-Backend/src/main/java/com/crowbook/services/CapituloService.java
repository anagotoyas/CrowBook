package com.crowbook.services;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Historia;

import java.util.List;


public interface CapituloService {

    Capitulo agregarCapitulo(Capitulo capitulo);
    Capitulo modificarCapitulo(Capitulo capitulo);
    List<Capitulo> listarCapitulo();
    Capitulo obtenerCapituloPorIdCapitulo(Integer idCapitulo);
    List<Capitulo> listarCapitulosPorHistoria(Historia historia);

    void eliminarCapitulo(Integer idCapitulo);

}
