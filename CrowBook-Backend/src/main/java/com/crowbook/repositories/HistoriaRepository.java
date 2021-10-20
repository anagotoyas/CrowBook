package com.crowbook.repositories;

import com.crowbook.model.Historia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoriaRepository extends JpaRepository <Historia, Integer>  {
}
