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
    @JoinTable(name = "historia_biblioteca",
            foreignKey = @ForeignKey(name = "FK_historia_biblioteca"))
    List<Historia> historia = new ArrayList<>();

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

    public List<Historia> getHistoria() {
        return historia;
    }

    public void setHistoria(List<Historia> historia) {
        this.historia = historia;
    }
}
