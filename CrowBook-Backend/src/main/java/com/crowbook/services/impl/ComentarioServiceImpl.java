package com.crowbook.services.impl;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Comentario;
import com.crowbook.repositories.ComentarioRepository;
import com.crowbook.services.ComentarioService;
import com.crowbook.validators.ComentarioValidator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ComentarioServiceImpl implements ComentarioService {


    private final ComentarioRepository comentarioRepository;

    public ComentarioServiceImpl(ComentarioRepository comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }

    @Transactional
    @Override
    public Comentario crearComentario(Comentario comentario) {
        ComentarioValidator.validate(comentario);
        return comentarioRepository.save(comentario);
    }

    @Override
    public Comentario modificarComentario(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }

    @Override
    public List<Comentario> listarComentario() {
        return comentarioRepository.findAll();
    }

    @Override
    public Comentario obtenerComentarioPorIdComentario(Integer idComentario) {
        return comentarioRepository.findById(idComentario).orElse(new Comentario());
    }

    @Override
    public List<Comentario> buscarComentarioPorIdCapitulo(Capitulo capitulo) {
        List<Comentario> capituloId = comentarioRepository.buscarComentarioPorIdCapitulo(capitulo);
        return capituloId;
    }

    @Override
    public void eliminarComentario(Integer idComentario) {
        comentarioRepository.deleteById(idComentario);
    }

}