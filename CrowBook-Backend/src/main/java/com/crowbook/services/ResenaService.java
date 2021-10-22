package com.crowbook.services;

import com.crowbook.model.Resena;
import java.util.List;

public interface ResenaService {


    Resena registrarResena(Resena resena);
    List<Resena> listarResena();
    Resena obtenerResenaPorIdResena(Integer idResena);

}
