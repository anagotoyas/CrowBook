package com.crowbook.services.impl;

import com.crowbook.model.Compra;
import com.crowbook.model.Membresia;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.CompraRepository;
import com.crowbook.repositories.MembresiaRepository;
import com.crowbook.services.MembresiaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MembresiaServiceImpl implements MembresiaService {

    private final MembresiaRepository membresiaRepository;

    public MembresiaServiceImpl(MembresiaRepository membresiaRepository) {
        this.membresiaRepository = membresiaRepository;
    }

    @Override
    public Membresia crearMembresia(Membresia membresia) {
        return membresiaRepository.save(membresia);
    }

    @Override
    public List<Membresia> listarMembresia() {
        return membresiaRepository.findAll();
    }

    @Override
    public Membresia obtenerMembresiaPorID(Integer idMembresia) {
        return membresiaRepository.findById(idMembresia).orElse(new Membresia());
    }

    @Override
    public Membresia obtenerMembresiaPorIdUsuario(Usuario usuario) {
        Membresia membresia = membresiaRepository.buscarMembresiaPorIdUsuario(usuario);
        return membresia;
    }

    @Override
    public void otorgarMembresia(Usuario usuario) {
        usuario.setEsMiembro(true);
    }

    @Override
    public void cancelarMembresia(Usuario usuario) {
        usuario.setEsMiembro(false);
    }


}
