package com.crowbook.services;

import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;

import java.util.List;

public interface UsuarioService {

    Usuario registrarUsuario(Usuario usuario);
    Usuario modificarUsuario(Usuario usuario);
    List<Usuario> listarUsuario();
    Usuario obtenerUsuarioPorIdUsuario(Integer idUsuario);

    void eliminarUsuario(Integer idUsuario);

}
