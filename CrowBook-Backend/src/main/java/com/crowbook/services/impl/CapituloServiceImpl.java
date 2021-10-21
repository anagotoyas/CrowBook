package com.crowbook.services.impl;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;
import com.crowbook.repositories.CapituloRepository;
import com.crowbook.repositories.HistoriaRepository;
import com.crowbook.repositories.UsuarioRepository;
import com.crowbook.services.CapituloService;
import org.springframework.stereotype.Service;

@Service
public class CapituloServiceImpl implements CapituloService {

    private final CapituloRepository capituloRepository;

    public CapituloServiceImpl(CapituloRepository capituloRepository){
        this.capituloRepository=capituloRepository;
    }

    @Override
    public Capitulo agregarCapitulo(Capitulo capitulo) {
        return capituloRepository.save(capitulo);
    }




}
