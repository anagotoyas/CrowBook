package com.crowbook.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "favoritos")
public class Favorito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idFavorito;

    @OneToOne
    @JoinColumn(name = "usuario_favorito",
            foreignKey = @ForeignKey(name = "FK_usuario_favorito"))
    private Usuario usuario;

    @ManyToMany
    @JoinTable(name = "historia_favorito",
            foreignKey = @ForeignKey(name = "FK_historia_favorito"))
    List<Historia> historia = new ArrayList<>();

    public Integer getIdFavorito() {
        return idFavorito;
    }

    public void setIdFavorito(Integer idFavorito) {
        this.idFavorito = idFavorito;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Historia> getHistoria() {
        return historia;
    }

    public void setHistoria(List<Historia> historia) {
        this.historia = historia;
    }
}
