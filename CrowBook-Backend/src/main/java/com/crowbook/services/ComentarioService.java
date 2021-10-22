package com.crowbook.services;

import com.crowbook.model.Comentario;

import java.util.List;

public interface ComentarioService {
    Comentario crearComentario(Comentario comentario);
    Comentario modificarComentario(Comentario comentario);
    List<Comentario> listarComentario();
    Comentario obtenerComentarioPorIdComentario(Integer idComentario);

    void eliminarComentario(Integer idComentario);
}

