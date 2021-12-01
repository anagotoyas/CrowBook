package com.crowbook.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="paquetescrowcoins")
public class PaqueteCrowCoin {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idPaquete;

    @Column(name="precio_paquete", nullable = false)
    private float precioPaquete;

    @Column (name="cantidad_coins_paquete", nullable = false)
    private int cantidadCoinsPaquete;

    @OneToMany(mappedBy ="paqueteComprado", cascade ={CascadeType.ALL})
    private List<Compra> compra;

    public void comprarPaqueteCoins(Usuario usuario){ }

    public Integer getIdPaquete() {
        return idPaquete;
    }

    public void setIdPaquete(Integer idPaquete) {
        this.idPaquete = idPaquete;
    }

    public float getPrecioPaquete() {
        return precioPaquete;
    }

    public void setPrecioPaquete(float precioPaquete) {
        this.precioPaquete = precioPaquete;
    }

    public int getCantidadCoinsPaquete() {
        return cantidadCoinsPaquete;
    }

    public void setCantidadCoinsPaquete(int cantidadCoinsPaquete) {
        this.cantidadCoinsPaquete = cantidadCoinsPaquete;
    }
}
