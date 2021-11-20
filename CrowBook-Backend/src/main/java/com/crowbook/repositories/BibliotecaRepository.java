package com.crowbook.repositories;

import com.crowbook.model.Biblioteca;
import com.crowbook.model.Historia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BibliotecaRepository extends JpaRepository<Biblioteca, Integer> {

    @Modifying
    @Query(value = "INSERT INTO Biblioteca b (b.libray) VALUES (:historia) WHERE b.idBiblioteca LIKE %:idBiblioteca%", nativeQuery = true)
    Biblioteca agregarHistoria(@Param("historia") Historia historia);

}
