package com.crowbook.repositories;

import com.crowbook.model.Donacion;
import com.crowbook.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonacionRepository extends JpaRepository<Donacion, Integer> {

    @Query("SELECT c FROM Donacion c WHERE c.emisor=:emisor")
    List<Donacion> buscarDonacionesPorEmisor(@Param("emisor") Usuario usuario);

}
