package com.crowbook.repositories;

import com.crowbook.model.Capitulo;
import com.crowbook.model.Comentario;
import com.crowbook.model.Historia;
import com.crowbook.model.Resena;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {
    @Query("SELECT c FROM Comentario c WHERE c.capitulo=:capitulo")
    List<Comentario> buscarComentarioPorIdCapitulo(@Param("capitulo") Capitulo capitulo);
}