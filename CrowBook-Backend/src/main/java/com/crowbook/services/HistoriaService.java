package com.crowbook.services;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;
import java.util.List;

public interface HistoriaService {


    Historia registrarHistoria(Historia historia);
    Historia modificarHistoria(Historia historia);
    List<Historia> listarHistoria();
    Historia obtenerHistoriaPorIdHistoria(Integer idHistoria);

    void eliminarHistoria(Integer idHistoria);
}
