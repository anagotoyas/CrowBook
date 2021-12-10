package com.crowbook.validators;

import com.crowbook.exception.IncorrectResourceRequestException;
import com.crowbook.model.Historia;

public class HistoriaValidator {

    public static void validate(Historia historia) {

        if (historia.getNombreHistoria() == null || historia.getNombreHistoria().trim().isEmpty()) {
            throw new IncorrectResourceRequestException("El nombre de historia no puede estar vacío");
        }

        if(historia.getNombreHistoria().length() < 2) {
            throw new IncorrectResourceRequestException("El nombre de historia debe ser mayor a 2 caracteres");

        }

        if(historia.getNombreHistoria().length() > 100) {
            throw new IncorrectResourceRequestException("El nombre de historia debe ser menor de 100 caracteres");

        }

        if(historia.getDescripcionHistoria().length() > 1000) {
            throw new IncorrectResourceRequestException("La descripcion de historia debe ser menor de 1000 caracteres");

        }

        if (historia.getDescripcionHistoria() == null || historia.getDescripcionHistoria().trim().isEmpty()) {
            throw new IncorrectResourceRequestException("La descripcion de historia no puede estar vacía");
        }

        if (historia.getCategoria() == null) {
            throw new IncorrectResourceRequestException("La categoria de la historia no puede ser nula");
        }

    }

}
