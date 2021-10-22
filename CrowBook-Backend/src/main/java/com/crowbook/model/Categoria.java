package com.crowbook.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategoria;


    @NotNull
    @Size(min = 2, max = 30, message = "La categoria tiene como maximo 50 caracteres")
    @Column(name = "nombre_categoria", nullable = false, length = 500)
    private String nombreCategoria;

    @OneToMany(mappedBy ="categoria")
    private List<Historia> historia;




    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getNombreCategoria() {
        return nombreCategoria;
    }

    public void setNombreCategoria(String nombreCategoria) {
        this.nombreCategoria = nombreCategoria;
    }
}