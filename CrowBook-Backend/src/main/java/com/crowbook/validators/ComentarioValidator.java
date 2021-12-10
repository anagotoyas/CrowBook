package com.crowbook.validators;

import com.crowbook.exception.IncorrectResourceRequestException;
import com.crowbook.model.Comentario;

public class ComentarioValidator {

    public static void validate(Comentario comentario){
        if (comentario.getComentarioCapitulo() == null || comentario.getComentarioCapitulo().trim().isEmpty()) {
            throw new IncorrectResourceRequestException("El contenido del comentario no puede estar vacío");

        }

        if(comentario.getComentarioCapitulo().length() < 2) {
            throw new IncorrectResourceRequestException("El contenido del comentario debe ser mayor a 2 caracteres");

        }

        if(comentario.getComentarioCapitulo().length() > 1000) {
            throw new IncorrectResourceRequestException("El contenido del comentario debe ser menor de 1000 caracteres");

        }
    }

}
