package thigassantos.github.io.MocFrota.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.user.Pessoa;
import thigassantos.github.io.MocFrota.model.user.User;
import thigassantos.github.io.MocFrota.model.user.dto.PessoaDTO;
import thigassantos.github.io.MocFrota.model.user.dto.PessoaRequestDTO;
import thigassantos.github.io.MocFrota.model.user.specify.Condutor;
import thigassantos.github.io.MocFrota.model.user.specify.Gerente;
import thigassantos.github.io.MocFrota.model.user.specify.dto.CondutorRequestDTO;
import thigassantos.github.io.MocFrota.model.user.specify.dto.GerenteRequestDTO;
import thigassantos.github.io.MocFrota.repository.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private PessoaRepository pessoaRepository;
    @Autowired
    private GerenteRepository gerenteRepository;
    @Autowired
    private CondutorRepository condutorRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/cadastrar/gerente")
    public ResponseEntity saveGerente(@RequestBody GerenteRequestDTO data){

        Gerente gerenteData = new Gerente(data);
        gerenteRepository.save(gerenteData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @RequestMapping("/cadastrar/condutor")
    public ResponseEntity saveCondutor(@RequestBody CondutorRequestDTO data){

        Condutor condutorData = new Condutor(data);
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

        Address address = addressRepository.findById(pessoaData.getAddress().getId()).get();
        address.setCep(data.address().cep());
        address.setLogradouro(data.address().logradouro());
        address.setBairro(data.address().bairro());
        address.setCidade(data.address().cidade());
        address.setEstado(data.address().estado());
        address.setNumero(data.address().numero());
        address.setComplemento(data.address().complemento());
        addressRepository.save(address);

        User user = userRepository.findById(pessoaData.getUser().getId()).get();
        user.setName(data.user().name());
        user.setEmail(data.user().email());

        if(!Objects.equals(user.getPassword(), data.user().password())){
        user.setPassword(data.user().password());
        }

        user.setRole(data.user().role());
        userRepository.save(user);

        pessoaRepository.save(pessoaData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping@RequestMapping("/delete")
    public ResponseEntity deletePessoa(@RequestBody PessoaRequestDTO data){
        Pessoa pessoaData = pessoaRepository.findByCpf(data.cpf());
        pessoaRepository.delete(pessoaData);
        return ResponseEntity.ok().build();
    }


}
