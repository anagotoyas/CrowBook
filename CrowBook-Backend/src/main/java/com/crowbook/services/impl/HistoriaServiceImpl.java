package com.crowbook.services.impl;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.HistoriaRepository;

import com.crowbook.services.HistoriaService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public List<Historia> buscarHistoriaPorNombre(String nombreHistoria) {
        List<Historia> historiasN = historiaRepository.buscarHistoriaPorNombre(nombreHistoria);
        return historiasN;
    }

    @Override
    public List<Historia> listarHistoriaPorCategoria(Categoria categoria) {
        List<Historia> historiasC = historiaRepository.listarHistoriaPorCategoria(categoria);
        return historiasC;
    }

    @Override
    public List<Historia> buscarHistoriaPorIdUsuario(Usuario usuario) {
        List<Historia> usuarioId = historiaRepository.buscarHistoriaPorIdUsuario(usuario);
        return usuarioId;
    }
    @Override
    public Page<Historia> index(Pageable pageable) {
        return historiaRepository.findAll(pageable);
    }
    @Override
    public void eliminarHistoria(Integer idHistoria) {
        historiaRepository.deleteById(idHistoria);
    }

    @Override
    public List<Historia> fetchHistoria(Usuario usuario) {
        return historiaRepository.findByUsuario(usuario);
    }
}
