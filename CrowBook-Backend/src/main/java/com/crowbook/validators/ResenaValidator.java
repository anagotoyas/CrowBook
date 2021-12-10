package com.crowbook.validators;

import com.crowbook.exception.IncorrectResourceRequestException;
import com.crowbook.model.Resena;

public class ResenaValidator {

    public static void validate(Resena resena){
        if (resena.getComentarioResena() == null || resena.getComentarioResena().trim().isEmpty()) {
            throw new IncorrectResourceRequestException("El contenido de la resena no puede estar vacío");
        }

        if(resena.getComentarioResena().length() < 2) {
            throw new IncorrectResourceRequestException("El contenido de la resena debe ser mayor a 2 caracteres");

        }

        if(resena.getComentarioResena().length() > 1000) {
            throw new IncorrectResourceRequestException("El contenido de la resena debe ser menor de 1000 caracteres");

        }
    }

}
