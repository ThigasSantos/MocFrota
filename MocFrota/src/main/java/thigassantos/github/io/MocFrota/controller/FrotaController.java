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
@RequestMapping("/veiculo")
public class FrotaController {

    @Autowired
    private VeiculoRepository veiculoRepository;
    @Autowired
    private StatusRepository statusRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping@RequestMapping("/cadastrar")
    public ResponseEntity saveVeiculo(@RequestBody VeiculoRequestDTO data){
        Veiculo veiculoData = new Veiculo(data);
        Status statusData = new Status();
        veiculoData.setStatus(statusData);
        veiculoRepository.save(veiculoData);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity saveStatus(@RequestBody StatusRequestDTO data){
        Status statusData = new Status(data);
        statusRepository.save(statusData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping@RequestMapping("/update")
    public ResponseEntity updateVeiculo(@RequestBody VeiculoDTO data){
        Veiculo veiculoData = veiculoRepository.findByPlaca(data.placa());
        veiculoData.setPlaca(data.placa());
        veiculoData.setMarca(data.marca());
        veiculoData.setModelo(data.modelo());
        veiculoData.setCor(data.cor());
        veiculoData.setAno(data.ano());
        veiculoData.setChassi(data.chassi());
        veiculoData.setRenavam(data.renavam());
        veiculoData.setTipo(data.tipo());
        veiculoRepository.save(veiculoData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping@RequestMapping("/delete")
    public ResponseEntity deleteVeiculo(@RequestBody VeiculoRequestDTO data){
        Veiculo veiculoData = veiculoRepository.findByPlaca(data.placa());
        veiculoRepository.delete(veiculoData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listar")
    public List<VeiculoDTO> getAll(){

        List<VeiculoDTO> veiculos = veiculoRepository.findAll().stream().map(VeiculoDTO::new).toList();
        return veiculos;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public VeiculoDTO getVeiculo(@RequestParam String placa){
        Veiculo veiculo = veiculoRepository.findByPlaca(placa);
        return new VeiculoDTO(veiculo);
    }

}
