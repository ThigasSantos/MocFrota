package thigassantos.github.io.MocFrota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.frota.Veiculo;
import thigassantos.github.io.MocFrota.frota.VeiculoRepository;
import thigassantos.github.io.MocFrota.frota.dto.VeiculoDTO;
import thigassantos.github.io.MocFrota.frota.dto.VeiculoRequestDTO;

import java.util.List;

@RestController
@RequestMapping("/frota")
public class FrotaController {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveVeiculo(@RequestBody VeiculoRequestDTO data){
        Veiculo veiculoData = new Veiculo(data);
        veiculoRepository.save(veiculoData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<VeiculoDTO> getAll(){

        List<VeiculoDTO> veiculos = veiculoRepository.findAll().stream().map(VeiculoDTO::new).toList();
        return veiculos;
    }
}
