package com.crowbook.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="capitulos")
public class Capitulo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCapitulo;

    @ManyToOne
    @JoinColumn(name = "capitulo_historia", foreignKey = @ForeignKey(name = "FK_capitulo_historia"))
    private Historia historia;

    @NotNull
    @Size(min = 2, max = 100, message = "El nombre del capítulo debe tener como mínimo 2 caracteres")
    @Column(name = "nombre_capitulo", nullable = false, length = 100)
    private String nombreCapitulo;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal (TemporalType.TIMESTAMP)
    @Column(name = "fecha_publicacion", nullable = false)
    private Date fechaPublicacion;


    @PrePersist
    private void Creacion(){
        fechaPublicacion=new Date();
    }
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


    @OneToMany(mappedBy ="capitulo", cascade ={CascadeType.ALL})
    private List<Comentario> comentario;

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

    public Date getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(Date fechaPublicacion) {
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