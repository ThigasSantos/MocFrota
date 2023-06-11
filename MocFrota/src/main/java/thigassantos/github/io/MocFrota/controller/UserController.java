package thigassantos.github.io.MocFrota.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.user.Pessoa;
import thigassantos.github.io.MocFrota.model.user.User;
import thigassantos.github.io.MocFrota.model.user.dto.PessoaDTO;
import thigassantos.github.io.MocFrota.model.user.dto.PessoaRequestDTO;
import thigassantos.github.io.MocFrota.model.user.dto.UserRequestDTO;
import thigassantos.github.io.MocFrota.model.user.specify.Condutor;
import thigassantos.github.io.MocFrota.model.user.specify.Gerente;
import thigassantos.github.io.MocFrota.model.user.specify.dto.CondutorRequestDTO;
import thigassantos.github.io.MocFrota.model.user.specify.dto.GerenteRequestDTO;
import thigassantos.github.io.MocFrota.repository.CondutorRepository;
import thigassantos.github.io.MocFrota.repository.GerenteRepository;
import thigassantos.github.io.MocFrota.repository.PessoaRepository;
import thigassantos.github.io.MocFrota.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private PessoaRepository pessoaRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private GerenteRepository gerenteRepository;
    @Autowired
    private CondutorRepository condutorRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/cadastrar")
    public ResponseEntity saveUser(@RequestBody UserRequestDTO data){
        User usdata = new User(data);
        userRepository.save(usdata);
        return ResponseEntity.ok(usdata.getId());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/cadastrar/gerente")
    public ResponseEntity saveGerente(@RequestBody GerenteRequestDTO data){

        Gerente gerenteData = new Gerente(data);
        gerenteData.setUser(userRepository.findById(data.idUser()).get());
        gerenteRepository.save(gerenteData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/cadastrar/condutor")
    public ResponseEntity saveCondutor(@RequestBody CondutorRequestDTO data){

        Condutor condutorData = new Condutor(data);
        condutorData.setUser(userRepository.findById(data.idUser()).get());
        condutorRepository.save(condutorData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listar")
    public List<PessoaDTO> getAll(){

        List<PessoaDTO> usuarios = pessoaRepository.findAll().stream().map(PessoaDTO::new).toList();
        return usuarios;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public PessoaDTO getPessoa(@RequestParam String cpf){
        Pessoa pessoa = pessoaRepository.findByCpf(cpf);
        return new PessoaDTO(pessoa);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping@RequestMapping("/update")
    public ResponseEntity updatePessoa(@RequestBody PessoaDTO data){
        Pessoa pessoaData = pessoaRepository.findByCpf(data.cpf());
        pessoaData.setName(data.name());
        pessoaData.setCpf(data.cpf());
        pessoaData.setTelefone(data.telefone());
        Address address = new Address(data.address());
        pessoaData.setAddress(address);
        pessoaRepository.save(pessoaData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping@RequestMapping("/delete")
    public ResponseEntity deleteVeiculo(@RequestBody PessoaRequestDTO data){
        Pessoa pessoaData = pessoaRepository.findByCpf(data.cpf());
        pessoaRepository.delete(pessoaData);
        return ResponseEntity.ok().build();
    }


}
