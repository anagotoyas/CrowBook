package com.crowbook.repositories;

import com.crowbook.model.PaqueteCrowCoin;
import com.crowbook.model.Resena;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaqueteCrowCoinRepository extends JpaRepository<PaqueteCrowCoin, Integer> {
}
