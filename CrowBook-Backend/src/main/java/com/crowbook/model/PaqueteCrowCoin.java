package com.crowbook.model;

import javax.persistence.*;

@Entity
@Table(name="paquetescrowcoin")
public class PaqueteCrowCoin {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idPaquete;

    @Column(name="precio_paquete", nullable = false)
    private float precioPaquete;

    @Column (name="cantidad_coins_paquete", nullable = false)
    private int cantidadCoinsPaquete;

    @ManyToOne
    @JoinColumn(name="usuario_paquetescrowcoin",
            foreignKey = @ForeignKey(name="FK_usuario_paquetecrowcoin"))
    private Usuario usuario;

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
