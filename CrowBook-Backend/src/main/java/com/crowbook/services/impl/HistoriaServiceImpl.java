package com.crowbook.services.impl;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;
import com.crowbook.repositories.HistoriaRepository;

import com.crowbook.services.HistoriaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoriaServiceImpl implements HistoriaService {

    private final HistoriaRepository historiaRepository;

    public HistoriaServiceImpl(HistoriaRepository historiaRepository){
        this.historiaRepository=historiaRepository;
    }

    @Override
    public Historia registrarHistoria(Historia historia) {
        return historiaRepository.save(historia);
    }

    @Override
    public Historia modificarHistoria(Historia historia) {
        return historiaRepository.save(historia);
    }

    @Override
    public List<Historia> listarHistoria() {
        return historiaRepository.findAll();
    }



    @Override
    public Historia obtenerHistoriaPorIdHistoria(Integer idHistoria) {
        return historiaRepository.findById(idHistoria).orElse(new Historia());
    }

    @Override
    public void eliminarHistoria(Integer idHistoria) {
        historiaRepository.deleteById(idHistoria);
    }


}
