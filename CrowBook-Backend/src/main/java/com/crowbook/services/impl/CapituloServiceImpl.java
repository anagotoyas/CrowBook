package com.crowbook.services.impl;

import com.crowbook.model.Capitulo;
import com.crowbook.repositories.CapituloRepository;
import com.crowbook.services.CapituloService;
import com.crowbook.validators.CapituloValidator;
import org.springframework.stereotype.Service;
import com.crowbook.model.Historia;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CapituloServiceImpl implements CapituloService {

    private final CapituloRepository capituloRepository;

    public CapituloServiceImpl(CapituloRepository capituloRepository) {
        this.capituloRepository = capituloRepository;
    }

    @Transactional
    @Override
    public Capitulo agregarCapitulo(Capitulo capitulo) {
        CapituloValidator.validate(capitulo);
        return capituloRepository.save(capitulo);
    }

    @Transactional
    @Override
    public Capitulo modificarCapitulo(Capitulo capitulo) {
        CapituloValidator.validate(capitulo);
        return capituloRepository.save(capitulo);
    }

    @Override
    public List<Capitulo> listarCapitulo() {
        return capituloRepository.findAll();
    }

    @Override
    public Capitulo obtenerCapituloPorIdCapitulo(Integer idCapitulo) {
        return capituloRepository.findById(idCapitulo).orElse(new Capitulo());
    }

    @Override
    public void eliminarCapitulo(Integer idCapitulo) {
        capituloRepository.deleteById(idCapitulo);
    }

    @Override
    public List<Capitulo> listarCapitulosPorHistoria(Historia historia) {
        List<Capitulo> capitulos = capituloRepository.listarCapitulosPorHistoria(historia);
        return capitulos;
    }

}
