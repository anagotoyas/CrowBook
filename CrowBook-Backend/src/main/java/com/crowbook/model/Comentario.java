package com.crowbook.model;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;
import org.assertj.core.internal.bytebuddy.dynamic.loading.ClassReloadingStrategy;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "comentarios")
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idComentario;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false, foreignKey = @ForeignKey(name = "FK_usuario_capitulo"))
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_capitulo", nullable = false, foreignKey = @ForeignKey(name = "FK_capitulo_comentario"))
    private Capitulo capitulo;

    @NotNull
    @Size(min = 2, max = 500, message = "El comentario debe tener mínimo 2 caracteres ")
    @Column (name = "comentario_capitulo", nullable = false, length = 500)
    private String comentarioCapitulo;

    public Integer getIdComentario() {
        return idComentario;
    }

    public void setIdComentario(Integer idComentario) {
        this.idComentario = idComentario;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Capitulo getCapitulo() {
        return capitulo;
    }

    public void setCapitulo(Capitulo capitulo) {
        this.capitulo = capitulo;
    }

    public String getComentarioCapitulo() {
        return comentarioCapitulo;
    }

    public void setComentarioCapitulo(String comentarioCapitulo) {
        this.comentarioCapitulo = comentarioCapitulo;
    }
}