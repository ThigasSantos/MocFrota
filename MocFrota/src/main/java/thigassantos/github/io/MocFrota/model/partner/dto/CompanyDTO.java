package thigassantos.github.io.MocFrota.model.partner.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.partner.Company;

import java.util.List;

public record CompanyDTO(Long id, String cnpj, String name, String telefone, String email, List<Address> adresses, String status) {
    public CompanyDTO(Company company){
        this(company.getId(), company.getCnpj(), company.getName(), company.getTelefone(), company.getEmail(), company.getAddresses(), company.getStatus());
    }
}
