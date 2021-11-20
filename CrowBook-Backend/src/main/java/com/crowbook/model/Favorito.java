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
    @JoinTable(name = "favorito_historia", joinColumns = @JoinColumn(name = "id_favorito"),
            inverseJoinColumns = @JoinColumn(name = "id_historia"))
    private List<Historia> historias_favorito = new ArrayList<>();

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

    public List<Historia> getHistorias_favorito() {
        return historias_favorito;
    }

    public void setHistorias_favorito(List<Historia> historias_favorito) {
        this.historias_favorito = historias_favorito;
    }

    public void agregarHistoriaFavorito(Historia historia){
        historias_favorito.add(historia);
    }

    public void eliminarHistoriaFavorito(Historia historia){

        historias_favorito.remove(historia);

    }
}
