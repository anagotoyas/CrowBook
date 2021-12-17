package com.crowbook.model;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "donaciones")
public class Donacion {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private  Integer idDonacion;

    @ManyToOne
    @JoinColumn(name = "id_emisor", nullable = false, foreignKey = @ForeignKey(name = "FK_usuario_emisor"))
    private Usuario emisor;

    @ManyToOne
    @JoinColumn(name = "id_receptor", nullable = false, foreignKey = @ForeignKey(name = "FK_usuario_donacion"))
    private Usuario receptor;


    @Column (name = "cantidad_coins_donacion", nullable = false)
    private Integer cantidadCoinsDonacion;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal (TemporalType.TIMESTAMP)
    @Column(name = "fecha_donacion", nullable = false)
    private Date fechaDonacion;

    @PrePersist
    public void onCreate() {
        fechaDonacion = new Date();
    }

    public Integer getIdDonacion() {
        return idDonacion;
    }

    public void setIdDonacion(Integer idDonacion) {
        this.idDonacion = idDonacion;
    }

    public Usuario getEmisor() {
        return emisor;
    }

    public Date getFechaDonacion() {
        return fechaDonacion;
    }

    public void setFechaDonacion(Date fechaDonacion) {
        this.fechaDonacion = fechaDonacion;
    }

    public void setEmisor(Usuario emisor) {
        this.emisor = emisor;
    }

    public Usuario getReceptor() {
        return receptor;
    }

    public void setReceptor(Usuario receptor) {
        this.receptor = receptor;
    }

    public Integer getCantidadCoinsDonacion() {
        return cantidadCoinsDonacion;
    }

    public void setCantidadCoinsDonacion(Integer cantidadCoinsDonacion) {
        this.cantidadCoinsDonacion = cantidadCoinsDonacion;
    }
}