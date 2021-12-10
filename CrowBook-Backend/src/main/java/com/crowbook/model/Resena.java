package com.crowbook.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="resenas")
public class Resena {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idResena;

    @ManyToOne
    @JoinColumn(name="id_usuario", nullable = false,
            foreignKey = @ForeignKey(name="FK_usuario_historia"))
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name="id_historia", nullable = false,
            foreignKey = @ForeignKey(name="FK_historia_resena"))
    private Historia historia;


    @NotNull
    @Size(min=2, max=1000, message = "Tú opinión o comentario de la historia debe tener como minimo 2 caracteres o maximo 1000 caracteres")
    @Column (name="comentario_Resena", nullable = false, length = 1000)
    private String comentarioResena;

    

    public Integer getIdResena() {
        return idResena;
    }

    public void setIdResena(Integer idResena) {
        this.idResena = idResena;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Historia getHistoria() {
        return historia;
    }

    public void setHistoria(Historia historia) {
        this.historia = historia;
    }

    public String getComentarioResena() {
        return comentarioResena;
    }

    public void setComentarioResena(String comentarioResena) {
        this.comentarioResena = comentarioResena;
    }
}
