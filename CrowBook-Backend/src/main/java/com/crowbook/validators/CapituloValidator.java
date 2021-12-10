package com.crowbook.validators;

import com.crowbook.exception.IncorrectResourceRequestException;
import com.crowbook.model.Capitulo;

public class CapituloValidator {

    public static void validate(Capitulo capitulo){

        if (capitulo.getNombreCapitulo() == null || capitulo.getNombreCapitulo().trim().isEmpty()) {
            throw new IncorrectResourceRequestException("El nombre del capitulo no puede estar vacío");
        }

        if(capitulo.getNombreCapitulo().length() < 2) {
            throw new IncorrectResourceRequestException("El nombre del capitulo debe ser mayor a 2 caracteres");

        }

        if(capitulo.getNombreCapitulo().length() > 100) {
            throw new IncorrectResourceRequestException("El nombre del capitulo debe ser menor de 100 caracteres");

        }

        if(capitulo.getContenidoCapitulo().length() < 2) {
            throw new IncorrectResourceRequestException("El contenido del capitulo debe ser mayor a 2 caracteres");

        }


    }

}
