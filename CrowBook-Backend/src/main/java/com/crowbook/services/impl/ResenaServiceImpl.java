package com.crowbook.services.impl;

import com.crowbook.model.Historia;
import com.crowbook.model.Resena;
import com.crowbook.repositories.ResenaRepository;

import com.crowbook.services.ResenaService;
import com.crowbook.validators.ResenaValidator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ResenaServiceImpl implements ResenaService {

    private final ResenaRepository resenaRepository;

    public ResenaServiceImpl(ResenaRepository resenaRepository){
        this.resenaRepository=resenaRepository;
    }

    @Transactional
    @Override
    public Resena registrarResena(Resena resena) {
        ResenaValidator.validate(resena);
        return resenaRepository.save(resena);
    }

    @Transactional
    @Override
    public Resena modificarResena(Resena resena) {
        ResenaValidator.validate(resena);
        return resenaRepository.save(resena);
    }

    @Override

    public List<Resena> listarResena() {
        return resenaRepository.findAll();
    }

    @Override
    public Resena obtenerResenaPorIdResena(Integer idResena) {
        return resenaRepository.findById(idResena).orElse(new Resena());
    }

    @Override
    public List<Resena> buscarResenaPorIdHistoria(Historia historia) {
        List<Resena> historiaId = resenaRepository.buscarResenaPorIdHistoria(historia);
        return historiaId;
    }

    @Override
    public void eliminarResena(Integer idResena) {
        resenaRepository.deleteById(idResena);
    }
}



