package thigassantos.github.io.MocFrota.model.frota;

import jakarta.persistence.*;
import lombok.*;
import thigassantos.github.io.MocFrota.model.frota.dto.StatusRequestDTO;
import thigassantos.github.io.MocFrota.model.frota.dto.VeiculoRequestDTO;

import java.util.List;

@Table(name = "veiculo")
@Entity(name = "veiculo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Veiculo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String placa;
    private String modelo;
    private String marca;
    private String cor;
    private String ano;
    private String chassi;
    private String renavam;
    private String tipo;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Status> status;

    public void addStatus(Status status){
        this.status.add(status);
    }

    public void addStatus(StatusRequestDTO data){
        this.status.add(new Status(data));
    }

    public Veiculo(VeiculoRequestDTO data){
        this.placa = data.placa();
        this.modelo = data.modelo();
        this.marca = data.marca();
        this.cor = data.cor();
        this.ano = data.ano();
        this.chassi = data.chassi();
        this.renavam = data.renavam();
        this.tipo = data.tipo();
        this.status.add(new Status());
    }

}
