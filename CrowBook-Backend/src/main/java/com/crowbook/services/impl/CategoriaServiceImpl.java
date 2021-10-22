package com.crowbook.services.impl;

import com.crowbook.model.Categoria;
import com.crowbook.model.Comentario;
import com.crowbook.repositories.CategoriaRepository;
import com.crowbook.repositories.ComentarioRepository;
import com.crowbook.services.CategoriaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaServiceImpl(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public Categoria crearCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Categoria modificarCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public List<Categoria> listarCategorias() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria obtenerCategoriaPorIdCategoria(Integer idCategoria) {

         return categoriaRepository.findById(idCategoria).orElse(new Categoria());
    }

    @Override
    public void eliminarCategoria(Integer idCategoria) {
        categoriaRepository.deleteById(idCategoria);

    }

}

