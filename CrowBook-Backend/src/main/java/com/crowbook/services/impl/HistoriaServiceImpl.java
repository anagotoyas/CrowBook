package com.crowbook.services.impl;

import com.crowbook.model.Categoria;
import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.CategoriaRepository;
import com.crowbook.repositories.HistoriaRepository;

import com.crowbook.services.HistoriaService;
import com.crowbook.validators.HistoriaValidator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class HistoriaServiceImpl implements HistoriaService {

    private final HistoriaRepository historiaRepository;
    private final CategoriaRepository categoriaRepository;

    public HistoriaServiceImpl(HistoriaRepository historiaRepository, CategoriaRepository categoriaRepository){
        this.historiaRepository=historiaRepository;
        this.categoriaRepository = categoriaRepository;
    }

    @Transactional
    @Override
    public Historia registrarHistoria(Historia historia) {
        HistoriaValidator.validate(historia);
        return historiaRepository.save(historia);
    }

    @Transactional
    @Override
    public Historia modificarHistoria(Historia historia) {
        HistoriaValidator.validate(historia);
        return historiaRepository.save(historia);
    }
    @Transactional(readOnly = true)
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
    public List<Historia> listarHistoriasPorIdCategoria(Integer idCategoria) {
        Categoria categoria = categoriaRepository.findById(idCategoria).orElse(new Categoria());
        List<Historia> historiasC = historiaRepository.listarHistoriaPorCategoria(categoria);
        return historiasC;
    }

    @Override
    public Page<Historia> index(Pageable pageable) {
        return historiaRepository.findAll(pageable);
    }
    @Override
    public void eliminarHistoria(Integer idHistoria) {
        historiaRepository.deleteById(idHistoria);
    }

}
