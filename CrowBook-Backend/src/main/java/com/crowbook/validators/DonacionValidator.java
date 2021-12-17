package com.crowbook.validators;

import com.crowbook.exception.IncorrectResourceRequestException;
import com.crowbook.model.Donacion;

public class DonacionValidator {

    public static void validate(Donacion donacion){

        if (donacion.getEmisor() == null) {
            throw new IncorrectResourceRequestException("La donacion necesita de un emisor");

        }

        if (donacion.getReceptor() == null) {
            throw new IncorrectResourceRequestException("La donacion necesita de un receptor");

        }

        if (donacion.getCantidadCoinsDonacion() == null) {
            throw new IncorrectResourceRequestException("La cantidad de crowcoins a donar no puede ser nula");

        }

        if (donacion.getCantidadCoinsDonacion() <= 0) {
            throw new IncorrectResourceRequestException("La cantidad de crowcoins a donar debe ser mayor y diferente de cero");

        }

        //if (donacion.getEmisor().getCantidadCrowCoins() > donacion.getCantidadCoinsDonacion()) {
        //    throw new IncorrectResourceRequestException("La cantidad de crowcoins a donar supera la cantidad que usted tiene");

       // }

    }

}
