package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.dto.AddressDTO;
import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;

public record CondutorRequestDTO(String name,String cnh, String cpf, String role, String telefone, AddressRequestDTO address, Long idUser) {
}
