package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;

public record GerenteRequestDTO(String name, String cpf, String role, String telefone, AddressRequestDTO address, Long idUser) {
}
