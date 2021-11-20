package com.crowbook.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="historias")
public class Historia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHistoria;


    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false,
            foreignKey = @ForeignKey(name = "FK_usuario_historia"))
    private Usuario usuario;

    @NotNull
    @Size(min = 2, max = 25, message = "El nombre de la historia debe tener como mínimo 2 caracteres")
    @Column(name = "nombre_historia", nullable = false, length = 25)
    private String nombreHistoria;


    @Column(name = "imagen_portada", nullable = true)
    private String imagenPortada;

    @NotNull
    @Size(max = 500, message = "La descripcion de la historia debe tener como maximo 500 caracteres")
    @Column(name = "descripcion_historia", nullable = false, length = 500)
    private String descripcionHistoria;

    @NotNull
    @Column(name = "cantidad_resenas", nullable = false)
    private int cantidadResenas;

    @NotNull
    @Column(name = "calificacion_total", nullable = false)
    private int calificacionTotal;

    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false,
            foreignKey = @ForeignKey(name = "FK_id_categoria"))
    private Categoria categoria;

    @OneToMany(mappedBy ="historia", cascade ={CascadeType.ALL})
    private List<Capitulo> capitulo;

    @OneToMany(mappedBy ="historia", cascade ={CascadeType.ALL})
    private List<Resena> resena;

    @JsonIgnore
    @ManyToMany(mappedBy = "historias_biblioteca")
    private List<Biblioteca> bibliotecas = new ArrayList<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "historias_favorito")
    private List<Favorito> favoritos = new ArrayList<>();


    public Integer getIdHistoria() {
        return idHistoria;
    }

    public void setIdHistoria(Integer idHistoria) {
        this.idHistoria = idHistoria;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getNombreHistoria() {
        return nombreHistoria;
    }

    public void setNombreHistoria(String nombreHistoria) {
        this.nombreHistoria = nombreHistoria;
    }

    public String getImagenPortada() {
        return imagenPortada;
    }

    public void setImagenPortada(String imagenPortada) {
        this.imagenPortada = imagenPortada;
    }

    public String getDescripcionHistoria() {
        return descripcionHistoria;
    }

    public void setDescripcionHistoria(String descripcionHistoria) {
        this.descripcionHistoria = descripcionHistoria;
    }

    public int getCantidadResenas() {
        return cantidadResenas;
    }

    public void setCantidadResenas(int cantidadResenas) {
        this.cantidadResenas = cantidadResenas;
    }

    public int getCalificacionTotal() {
        return calificacionTotal;
    }

    public void setCalificacionTotal(int calificacionTotal) {
        this.calificacionTotal = calificacionTotal;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }


}