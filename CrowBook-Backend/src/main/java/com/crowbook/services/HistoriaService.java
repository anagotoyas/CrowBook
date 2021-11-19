package com.crowbook.services;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoriaService {


    Historia registrarHistoria(Historia historia);
    Historia modificarHistoria(Historia historia);
    List<Historia> listarHistoria();
    Historia obtenerHistoriaPorIdHistoria(Integer idHistoria);
    List<Historia> buscarHistoriaPorNombre(String nombreHistoria);
    List<Historia> listarHistoriaPorCategoria(Categoria categoria);
    List<Historia> buscarHistoriaPorIdUsuario(Usuario usuario);

    void eliminarHistoria(Integer idHistoria);
}
