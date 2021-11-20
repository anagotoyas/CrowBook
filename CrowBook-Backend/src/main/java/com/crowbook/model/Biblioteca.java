package com.crowbook.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="bibliotecas")
public class Biblioteca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idBiblioteca;

    @OneToOne
    @JoinColumn(name = "usuario_biblioteca",
            foreignKey = @ForeignKey(name = "FK_usuario_biblioteca"), nullable=false)
    private Usuario usuario;

    @ManyToMany
    @JoinTable(name = "biblioteca_historia", joinColumns = @JoinColumn(name = "id_biblioteca"),
            inverseJoinColumns = @JoinColumn(name = "id_historia"))
    private List<Historia> historias_biblioteca = new ArrayList<>();

    public Integer getIdBiblioteca() {
        return idBiblioteca;
    }

    public void setIdBiblioteca(Integer idBiblioteca) {
        this.idBiblioteca = idBiblioteca;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Historia> getHistorias_biblioteca() {
        return historias_biblioteca;
    }

    public void setHistorias_biblioteca(List<Historia> historias_biblioteca) {
        this.historias_biblioteca = historias_biblioteca;
    }

    public void agregarHistoriaBiblioteca(Historia historia){
        historias_biblioteca.add(historia);
    }

    public void eliminarHistoriaBiblioteca(Historia historia){

        historias_biblioteca.remove(historia);

    }
}
