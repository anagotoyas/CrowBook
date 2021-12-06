package com.crowbook.repositories;

import com.crowbook.model.Capitulo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.crowbook.model.Historia;

import java.util.List;

@Repository
public interface CapituloRepository extends JpaRepository <Capitulo, Integer> {
    @Query("SELECT c FROM Capitulo c WHERE c.historia=:historia")
    List<Capitulo> listarCapitulosPorHistoria(@Param("historia") Historia historia);
}
