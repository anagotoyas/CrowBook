package com.crowbook.services;

import com.crowbook.model.Categoria;
import com.crowbook.model.Comentario;

import java.util.List;

public interface CategoriaService {

    Categoria crearCategoria(Categoria categoria);
    Categoria modificarCategoria(Categoria categoria);
    List<Categoria> listarCategorias();
    Categoria obtenerCategoriaPorIdCategoria(Integer idCategoria);

    void eliminarCategoria(Integer idCategoria);
}
