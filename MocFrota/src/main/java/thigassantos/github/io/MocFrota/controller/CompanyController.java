package thigassantos.github.io.MocFrota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.partner.Company;
import thigassantos.github.io.MocFrota.model.partner.dto.CompanyDTO;
import thigassantos.github.io.MocFrota.model.partner.dto.CompanyRequestDTO;
import thigassantos.github.io.MocFrota.repository.AddressRepository;
import thigassantos.github.io.MocFrota.repository.CompanyRepository;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private AddressRepository addressRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    @RequestMapping("/cadastrar")
    public ResponseEntity saveCompany(@RequestBody CompanyRequestDTO data){
        Company companyData = new Company(data);
        companyRepository.save(companyData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping
    @RequestMapping("/update")
    public ResponseEntity updateCompany(@RequestBody CompanyDTO data){
        Company companyData = companyRepository.findByCnpj(data.cnpj());
        companyData.setCnpj(data.cnpj());
        companyData.setName(data.name());
        companyData.setEmail(data.email());
        companyData.setTelefone(data.telefone());

        Address address = addressRepository.findById(companyData.getAddress().getId()).get();
        address.setCep(data.address().cep());
        address.setLogradouro(data.address().logradouro());
        address.setBairro(data.address().bairro());
        address.setCidade(data.address().cidade());
        address.setEstado(data.address().estado());
        address.setNumero(data.address().numero());
        address.setComplemento(data.address().complemento());
        addressRepository.save(address);
        companyData.setStatus(data.status());

        companyRepository.save(companyData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping@RequestMapping("/delete")
    public ResponseEntity deleteCompany(@RequestBody CompanyRequestDTO data){
        Company companyData = companyRepository.findByCnpj(data.cnpj());
        companyRepository.delete(companyData);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listar")
    public List<CompanyDTO> getAll(){

        List<CompanyDTO> companys = companyRepository.findAll().stream().map(CompanyDTO::new).toList();
        return companys;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/buscar")
    public CompanyDTO getEmpresa(@RequestParam String cnpj){
        Company company = companyRepository.findByCnpj(cnpj);
        return new CompanyDTO(company);
    }

}
