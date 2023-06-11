package thigassantos.github.io.MocFrota.model.partner.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;

public record CompanyRequestDTO(String cnpj, String name, String telefone, String email, AddressRequestDTO address, String status) {
}
