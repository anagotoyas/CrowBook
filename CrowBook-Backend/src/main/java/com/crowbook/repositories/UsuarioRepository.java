package com.crowbook.repositories;

import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByNombreUsuarioAndContrasenaUsuario (String nombreUsuario, String contrasenaUsuario);


}

