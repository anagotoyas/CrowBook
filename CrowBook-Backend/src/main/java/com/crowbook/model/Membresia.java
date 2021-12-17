package com.crowbook.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="membresias")
public class Membresia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMembresia;

    @Column(name="costo_membresia", nullable = false)
    public float costoMembresia;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal (TemporalType.TIMESTAMP)
    @Column(name = "fecha_membresia", nullable = false)
    private Date fechaCompra;

    @PrePersist
    public void onCreate() {
        fechaCompra = new Date();
    }

    @OneToOne
    @JoinColumn(name="usuario_membresia")
    private Usuario usuario;

    public void comprarMembresia(Usuario usuario){ }

    public void cancelarMembresia(Usuario usuario){ }

    public Integer getIdMembresia() {
        return idMembresia;
    }

    public void setIdMembresia(Integer idMembresia) {
        this.idMembresia = idMembresia;
    }

    public float getCostoMembresia() {
        return costoMembresia;
    }

    public void setCostoMembresia(float costoMembresia) {
        this.costoMembresia = costoMembresia;
    }

    public Date getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
