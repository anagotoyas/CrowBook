package com.crowbook.services;

import com.crowbook.model.Historia;
import com.crowbook.model.Resena;

import java.util.List;

public interface ResenaService {
    Resena registrarResena(Resena resena);
    Resena modificarResena(Resena resena);
    List<Resena> listarResena();
    Resena obtenerResenaPorIdResena(Integer idResena);
    List<Resena> buscarResenaPorIdHistoria(Historia historia);
    void eliminarResena(Integer idResena);


}
