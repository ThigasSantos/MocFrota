package thigassantos.github.io.MocFrota.model.frota;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import thigassantos.github.io.MocFrota.model.frota.dto.StatusRequestDTO;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity(name = "status")
@Table(name = "status")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Status {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String placa;
    private String status;
    private String data;
    private String estado;
    private int km;
    private int combustivel;

    private Boolean farol;
    private Boolean luzFreio;
    private Boolean luzRe;
    private Boolean limpador;
    private Boolean pneu;
    private Boolean estepe;
    private Boolean freio;

    public Status(StatusRequestDTO data){
        this.placa = data.placa();
        this.status = data.status();
        this.data = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"));
        this.estado = data.estado();
        this.km = data.km();
        this.combustivel = data.combustivel();
        this.farol = data.farol();
        this.luzFreio = data.luzFreio();
        this.luzRe = data.luzRe();
        this.limpador = data.limpador();
        this.pneu = data.pneu();
        this.estepe = data.estepe();
        this.freio = data.freio();
    }

    public Status(String placa) {
        this.placa = placa;
        status = "Aberto";
        data = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss"));
        km = 0;
        combustivel = 100;
        farol = false;
        luzFreio = false;
        luzRe = false;
        limpador = false;
        pneu = false;
        estepe = false;
        freio = false;
    }

}
