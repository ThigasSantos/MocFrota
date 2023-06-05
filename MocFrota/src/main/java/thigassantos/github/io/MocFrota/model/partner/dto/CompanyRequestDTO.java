package thigassantos.github.io.MocFrota.model.partner.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;

import java.util.List;

public record CompanyRequestDTO(String cnpj, String name, String telefone, String email, Address address, String status) {
}
