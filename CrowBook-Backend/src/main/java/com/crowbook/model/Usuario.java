package com.crowbook.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer idUsuario;

    @NotNull
    @Size(min=3, max=25, message = "El nombre de usuario debe tener como mínimo 3 caracteres")
    @Column (name="nombre_usuario", nullable = false, length = 25, unique = true)
    private String nombreUsuario;


    @Size( max=100, message = "La descripcion de usuario debe tener como maximo 100 caracteres")
    @Column (name="descripcion_usuario", length = 100)
    private String descripcionUsuario;

    @NotNull
    @Email(message = "Formato incorrecto del correo electrónico")
    @Column (name="correo", nullable = false)
    private String correo;

    @NotNull
    @Size(min=6, max=25, message = "La contraseña debe tener como mínimo 6 caracteres")
    @Column (name="contrasena_usuario", nullable = false, length = 25)
    private String contrasenaUsuario;

    @Column (name="cantidad_crowcoins")
    private int cantidadCrowCoins;

    @Column (name="es_miembro", nullable = false)
    private boolean esMiembro;

    @OneToMany(mappedBy ="usuario", cascade ={CascadeType.ALL})
    private List<Historia> historias;

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasenaUsuario() {
        return contrasenaUsuario;
    }

    public void setContrasenaUsuario(String contrasenaUsuario) {
        this.contrasenaUsuario = contrasenaUsuario;
    }

    public int getCantidadCrowCoins() {
        return cantidadCrowCoins;
    }

    public void setCantidadCrowCoins(int cantidadCrowCoins) {
        this.cantidadCrowCoins = cantidadCrowCoins;
    }

    public boolean isEsMiembro() {
        return esMiembro;
    }

    public void setEsMiembro(boolean esMiembro) {
        this.esMiembro = esMiembro;
    }
}
