package com.crowbook.services;

import com.crowbook.model.Biblioteca;

import java.util.List;

public interface BibliotecaService {

    Biblioteca registrarBiblioteca(Biblioteca biblioteca);
    Biblioteca obtenerBibliotecaPorId(Integer idBiblioteca);
    void eliminarBiblioteca(Integer idBiblioteca);
    List<Biblioteca> listarBiblioteca();
    Biblioteca getHistoriaPorIdBiblioteca(Integer idBiblioteca);

}
