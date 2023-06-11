package thigassantos.github.io.MocFrota.model.user.dto;

import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;

public record PessoaRequestDTO(String name, String cpf, String role, String telefone, AddressRequestDTO address, UserRequestDTO user) {
}
