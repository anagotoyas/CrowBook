package com.crowbook.repositories;

import com.crowbook.model.Historia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoriaRepository extends JpaRepository <Historia, Integer>  {
    @Query("SELECT h FROM Historia h WHERE h.nombreHistoria LIKE %:nombreHistoria%")
    List<Historia> buscarHistoriaPorNombre(@Param("nombreHistoria") String nombreHistoria);
}
