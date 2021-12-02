package com.crowbook.repositories;

import com.crowbook.model.Resena;
import com.crowbook.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository

public interface ResenaRepository extends JpaRepository<Resena, Integer> {


}
