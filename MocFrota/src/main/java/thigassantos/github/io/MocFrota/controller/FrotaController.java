package thigassantos.github.io.MocFrota.controller;

import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.model.frota.Status;
import thigassantos.github.io.MocFrota.model.frota.Veiculo;
import thigassantos.github.io.MocFrota.model.frota.dto.StatusRequestDTO;
import thigassantos.github.io.MocFrota.repository.StatusRepository;
import thigassantos.github.io.MocFrota.repository.VeiculoRepository;
import thigassantos.github.io.MocFrota.model.frota.dto.VeiculoDTO;
import thigassantos.github.io.MocFrota.model.frota.dto.VeiculoRequestDTO;

import java.util.List;

@RestController
@RequestMapping("/frota")
public class FrotaController {

    @Autowired
    private VeiculoRepository veiculoRepository;
    @Autowired
    private StatusRepository statusRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity saveVeiculo(@RequestBody VeiculoRequestDTO data){
        Veiculo veiculoData = new Veiculo(data);
        veiculoRepository.save(veiculoData);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity saveStatus(@RequestBody StatusRequestDTO data){
        Status statusData = new Status(data);
        statusRepository.save(statusData);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity updateVeiculo(@RequestBody VeiculoDTO data){
        Veiculo veiculoData = veiculoRepository.getReferenceById(data.id());
        veiculoData.setPlaca(data.placa());
        veiculoData.setMarca(data.marca());
        veiculoData.setModelo(data.modelo());
        veiculoData.setCor(data.cor());
        veiculoData.setAno(data.ano());
        veiculoData.setChassi(data.chassi());
        veiculoData.setRenavam(data.renavam());
        veiculoData.setTipo(data.tipo());
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<VeiculoDTO> getAll(){

        List<VeiculoDTO> veiculos = veiculoRepository.findAll().stream().map(VeiculoDTO::new).toList();
        return veiculos;
    }
}
