package thigassantos.github.io.MocFrota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.model.frota.Status;
import thigassantos.github.io.MocFrota.model.frota.Veiculo;
import thigassantos.github.io.MocFrota.model.frota.dto.StatusDTO;
import thigassantos.github.io.MocFrota.model.frota.dto.VeiculoDTO;
import thigassantos.github.io.MocFrota.repository.StatusRepository;

import java.util.List;

@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    private StatusRepository statusRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listar")
    public List<StatusDTO> getAll(){
        List<StatusDTO> status = statusRepository.findAll().stream().map(StatusDTO::new).toList();
        return status;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping @RequestMapping("/update")
    public ResponseEntity updateStatus(@RequestBody StatusDTO data){
        Status statusData = statusRepository.findById(data.id()).get();
        statusData.setStatus(data.status());
        statusData.setEstado(data.estado());
        statusData.setKm(data.km());
        statusData.setCombustivel(data.combustivel());
        statusData.setFarol(data.farol());
        statusData.setLuzFreio(data.luzFreio());
        statusData.setLuzRe(data.luzRe());
        statusData.setLimpador(data.limpador());
        statusData.setPneu(data.pneu());
        statusData.setEstepe(data.estepe());
        statusData.setFreio(data.freio());
        statusRepository.save(statusData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public StatusDTO getStatus(@RequestParam String id){
        Status status = statusRepository.findById(Long.parseLong(id)).get();
        return new StatusDTO(status);
    }
}
