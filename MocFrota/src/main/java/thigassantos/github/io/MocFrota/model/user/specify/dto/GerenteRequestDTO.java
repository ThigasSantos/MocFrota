package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;
import thigassantos.github.io.MocFrota.model.user.dto.UserRequestDTO;

public record GerenteRequestDTO(String name, String cpf, String role, String telefone, AddressRequestDTO address, UserRequestDTO user) {
}
