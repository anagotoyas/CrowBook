package com.crowbook.services.impl;

import com.crowbook.model.Capitulo;
import com.crowbook.repositories.CapituloRepository;
import com.crowbook.services.CapituloService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CapituloServiceImpl implements CapituloService {

    private final CapituloRepository capituloRepository;

    public CapituloServiceImpl(CapituloRepository capituloRepository) {
        this.capituloRepository = capituloRepository;
    }

    @Override
    public Capitulo agregarCapitulo(Capitulo capitulo) {
        return null;
    }

    @Override
    public Capitulo modificarCapitulo(Capitulo capitulo) {
        return null;
    }

    @Override
    public List<Capitulo> listarCapitulo() {
        return null;
    }

    @Override
    public Capitulo obtenerCapituloPorIdCapitulo(Integer idCapitulo) {
        return null;
    }

    @Override
    public void eliminarCapitulo(Integer idCapitulo) {

    }
}
