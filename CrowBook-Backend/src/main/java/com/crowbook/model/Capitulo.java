package com.crowbook.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Entity
@Table(name="capitulo")
public class Capitulo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCapitulo;

    @ManyToOne
    @JoinColumn(name = "capitulo_historia", foreignKey = @ForeignKey(name = "FK_capitulo_historia"))
    private Historia historia;

    @NotNull
    @Size(min = 2, max = 25, message = "El nombre del capítulo debe tener como mínimo 2 caracteres")
    @Column(name = "nombre_capitulo", nullable = false, length = 25)
    private String nombreCapitulo;

    @Column(name = "fecha_publicacion", nullable = false)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss[.SSS][.SS][.S]")
    private LocalDateTime fechaPublicacion;

    @NotNull
    @Size(min = 2, message = "El contenido del capítulo debe tener como mínimo 2 caracteres")
    @Column(name = "contenido_capitulo", nullable = false)
    private String contenidoCapitulo;

    @NotNull
    @Column(name = "calificacion", nullable = false)
    private int calificacion;

    @NotNull
    @Column(name = "cantidad_comentarios", nullable = false)
    private int cantidadComentarios;

    public Integer getIdCapitulo() {
        return idCapitulo;
    }

    public void setIdCapitulo(Integer idCapitulo) {
        this.idCapitulo = idCapitulo;
    }

    public Historia getHistoria() {
        return historia;
    }

    public void setHistoria(Historia historia) {
        this.historia = historia;
    }

    public String getNombreCapitulo() {
        return nombreCapitulo;
    }

    public void setNombreCapitulo(String nombreCapitulo) {
        this.nombreCapitulo = nombreCapitulo;
    }

    public LocalDateTime getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(LocalDateTime fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public String getContenidoCapitulo() {
        return contenidoCapitulo;
    }

    public void setContenidoCapitulo(String contenidoCapitulo) {
        this.contenidoCapitulo = contenidoCapitulo;
    }

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

    public int getCantidadComentarios() {
        return cantidadComentarios;
    }

    public void setCantidadComentarios(int cantidadComentarios) {
        this.cantidadComentarios = cantidadComentarios;
    }
}