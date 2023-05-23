package thigassantos.github.io.MocFrota.frota;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import thigassantos.github.io.MocFrota.frota.dto.VeiculoRequestDTO;

@Table(name = "veiculo")
@Entity(name = "veiculo")
@Getter
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
    private long combustivel;
    private long km;
    private String status;

    public Veiculo(VeiculoRequestDTO data){
        this.placa = data.placa();
        this.modelo = data.modelo();
        this.marca = data.marca();
        this.cor = data.cor();
        this.ano = data.ano();
        this.chassi = data.chassi();
        this.renavam = data.renavam();
        this.tipo = data.tipo();
        this.combustivel = data.combustivel();
        this.km = data.km();
        this.status = data.status();
    }
}
