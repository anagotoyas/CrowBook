package com.crowbook.repositories;

import com.crowbook.model.Historia;
import com.crowbook.model.Resena;
import com.crowbook.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ResenaRepository extends JpaRepository<Resena, Integer> {

    @Query("SELECT r FROM Resena r WHERE r.historia=:historia")
    List<Resena> buscarResenaPorIdHistoria(@Param("historia") Historia historia);
}
