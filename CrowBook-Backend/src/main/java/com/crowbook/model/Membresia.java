package com.crowbook.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name="membresias")
public class Membresia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMembresia;

    @Column(name="costo_membresia", nullable = false)
    public float costoMembresia;

    @Column(name = "fecha_inicio_membresia", nullable = false)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss[.SSS][.SS][.S]")

    private LocalDateTime fechaInicioMembresia;

    @Column(name = "fecha_fin_membresia", nullable = false)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss[.SSS][.SS][.S]")
    private LocalDateTime fechaFinMembresia;

    @Column(name="descuento_membresia")
    public float descuentoMembresia;

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

    public LocalDateTime getFechaInicioMembresia() {
        return fechaInicioMembresia;
    }

    public void setFechaInicioMembresia(LocalDateTime fechaInicioMembresia) {
        this.fechaInicioMembresia = fechaInicioMembresia;
    }

    public LocalDateTime getFechaFinMembresia() {
        return fechaFinMembresia;
    }

    public void setFechaFinMembresia(LocalDateTime fechaFinMembresia) {
        this.fechaFinMembresia = fechaFinMembresia;
    }

    public float getDescuentoMembresia() {
        return descuentoMembresia;
    }

    public void setDescuentoMembresia(float descuentoMembresia) {
        this.descuentoMembresia = descuentoMembresia;
    }
}
