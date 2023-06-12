package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.adress.dto.AddressDTO;
import thigassantos.github.io.MocFrota.model.user.dto.UserDTO;
import thigassantos.github.io.MocFrota.model.user.specify.Gerente;

public record GerenteDTO(Long id, String name, String cpf, String role, String telefone, AddressDTO address, UserDTO user) {

        public GerenteDTO(Gerente gerente) {
            this(gerente.getId(), gerente.getName(), gerente.getCpf(), gerente.getRole(), gerente.getTelefone(), new AddressDTO(gerente.getAddress()),new UserDTO(gerente.getUser()));
        }
}
