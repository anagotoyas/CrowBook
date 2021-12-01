package com.crowbook.repositories;

import com.crowbook.model.Compra;
import com.crowbook.model.Historia;
import com.crowbook.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Integer> {

    @Query("SELECT c FROM Compra c WHERE c.usuario=:usuario")
    List<Compra> buscarComprasPorIdUsuario(@Param("usuario") Usuario usuario);

}
