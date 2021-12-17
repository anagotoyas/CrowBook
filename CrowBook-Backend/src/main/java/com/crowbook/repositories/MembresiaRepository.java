package com.crowbook.repositories;

import com.crowbook.model.Compra;
import com.crowbook.model.Membresia;
import com.crowbook.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembresiaRepository extends JpaRepository<Membresia, Integer>{

        @Query("SELECT m FROM Membresia m WHERE m.usuario=:usuario")
        Membresia buscarMembresiaPorIdUsuario(@Param("usuario") Usuario usuario);

}

