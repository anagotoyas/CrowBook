package com.crowbook.services.impl;

import com.crowbook.model.Biblioteca;
import com.crowbook.model.Historia;
import com.crowbook.repositories.BibliotecaRepository;
import com.crowbook.services.BibliotecaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BibliotecaServiceImpl implements BibliotecaService {

    private final BibliotecaRepository bibliotecaRepository;

    public BibliotecaServiceImpl(BibliotecaRepository bibliotecaRepository){
        this.bibliotecaRepository=bibliotecaRepository;
    }

    @Override
    public Biblioteca registrarBiblioteca(Biblioteca biblioteca) {
        return bibliotecaRepository.save(biblioteca);
    }

    @Override
    public Biblioteca obtenerBibliotecaPorId(Integer idBiblioteca) {
        return bibliotecaRepository.findById(idBiblioteca).orElse(new Biblioteca());
    }

    @Override
    public void eliminarBiblioteca(Integer idBiblioteca) {
        bibliotecaRepository.deleteById(idBiblioteca);
    }

    @Override
    public List<Biblioteca> listarBiblioteca() {
        return bibliotecaRepository.findAll();
    }

    @Override
    public Biblioteca getHistoriaPorIdBiblioteca(Integer idBiblioteca) {
        return bibliotecaRepository.findById(idBiblioteca).orElse(new Biblioteca());
    }


}
