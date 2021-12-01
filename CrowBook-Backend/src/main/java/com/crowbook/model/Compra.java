package com.crowbook.model;


import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "compras")
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCompra;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false, foreignKey = @ForeignKey(name = "FK_usuario_compra"))
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_paquete", nullable = false, foreignKey = @ForeignKey(name = "FK_paquete_compra"))
    private PaqueteCrowCoin paqueteComprado;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_compra")
    private Date FechaCompra;

    @PrePersist
    public void onCreate() {
        FechaCompra = new Date();
    }

    public Integer getIdCompra() {
        return idCompra;
    }

    public void setIdCompra(Integer idCompra) {
        this.idCompra = idCompra;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public PaqueteCrowCoin getPaqueteComprado() {
        return paqueteComprado;
    }

    public void setPaqueteComprado(PaqueteCrowCoin paqueteComprado) {
        this.paqueteComprado = paqueteComprado;
    }

    public Date getFechaCompra() {
        return FechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        FechaCompra = fechaCompra;
    }
}
