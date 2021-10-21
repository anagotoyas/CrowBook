package com.crowbook.repositories;

import com.crowbook.model.Capitulo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CapituloRepository extends JpaRepository <Capitulo, Integer> {
}
