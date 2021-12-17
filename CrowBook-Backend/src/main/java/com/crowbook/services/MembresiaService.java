package com.crowbook.services;

import com.crowbook.model.Membresia;
import com.crowbook.model.Usuario;

import java.util.List;

public interface MembresiaService {

    Membresia crearMembresia(Membresia membresia);
    List<Membresia> listarMembresia();
    Membresia obtenerMembresiaPorID(Integer idMembresia);
    Membresia obtenerMembresiaPorIdUsuario(Usuario usuario);
    void otorgarMembresia(Usuario usuario);
    void cancelarMembresia(Usuario usuario);

}
