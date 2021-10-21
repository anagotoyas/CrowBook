package com.crowbook.services.impl;

import com.crowbook.model.Comentario;
import com.crowbook.repositories.ComentarioRepository;
import com.crowbook.services.ComentarioService;
import org.springframework.stereotype.Service;

@Service
public class ComentarioServiceImpl implements ComentarioService {


    private final ComentarioRepository comentarioRepository;

    public ComentarioServiceImpl(ComentarioRepository comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }


    @Override
    public Comentario crearComentario(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }
}
