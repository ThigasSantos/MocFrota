package thigassantos.github.io.MocFrota.model.frota;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import thigassantos.github.io.MocFrota.model.frota.dto.StatusRequestDTO;

@Entity(name = "status")
@Table(name = "status")
@Getter
@Setter
@AllArgsConstructor
public class Status {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String status;
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
        this.status = data.status();
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

    public Status() {
        status = "Disponível";
        km = 0;
        combustivel = 100;
        farol = true;
        luzFreio = true;
        luzRe = true;
        limpador = true;
        pneu = true;
        estepe = true;
        freio = true;
    }
}
