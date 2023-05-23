package thigassantos.github.io.MocFrota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import thigassantos.github.io.MocFrota.controller.FrotaController;
import thigassantos.github.io.MocFrota.frota.Veiculo;
import thigassantos.github.io.MocFrota.frota.dto.VeiculoRequestDTO;

@Component
public class PreencherBanco {
    private FrotaController frotaController;

    @Autowired
    public PreencherBanco(FrotaController frotaController){
        this.frotaController = frotaController;
    }

    public void preencheBanco(){

        VeiculoRequestDTO veiculoRequestDTO = new VeiculoRequestDTO( "ABC-1234", "Gol", "Volkswagen", "Branco",
                "2021", "123456789", "123456789", "Carro", 100, 100, "Disponível");
        frotaController.saveVeiculo(veiculoRequestDTO);
    }
}
