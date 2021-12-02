package com.crowbook.services;

import com.crowbook.model.Donacion;
import com.crowbook.model.Historia;
import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Usuario;

import java.util.List;

public interface UsuarioService {

    Usuario registrarUsuario(Usuario usuario);
    Usuario modificarUsuario(Usuario usuario);
    List<Usuario> listarUsuario();
    Usuario obtenerUsuarioPorIdUsuario(Integer idUsuario);

    void eliminarUsuario(Integer idUsuario);
     void agregarHistoriaBiblioteca(Usuario usuario,Historia historia);


     void agregarHistoriaFavorito(Usuario usuario, Historia historia) ;

     void eliminarHistoriaBiblioteca(Usuario usuario, Historia historia) ;
     void eliminarHistoriaFavorito(Usuario usuario, Historia historia) ;

     Usuario fetchUserByNombreyContra(String nombreUsuario, String contrasenaUsuario);


}
