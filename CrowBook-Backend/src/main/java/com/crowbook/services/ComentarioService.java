package com.crowbook.services;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Comentario;
import com.crowbook.model.Historia;
import com.crowbook.model.Resena;

import java.util.List;

public interface ComentarioService {
    Comentario crearComentario(Comentario comentario);
    Comentario modificarComentario(Comentario comentario);
    List<Comentario> listarComentario();
    Comentario obtenerComentarioPorIdComentario(Integer idComentario);
    List<Comentario> buscarComentarioPorIdCapitulo(Capitulo capitulo);

    void eliminarComentario(Integer idComentario);
}

