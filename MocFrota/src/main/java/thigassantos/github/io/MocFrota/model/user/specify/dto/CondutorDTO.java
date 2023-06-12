package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.dto.AddressDTO;
import thigassantos.github.io.MocFrota.model.user.dto.UserDTO;
import thigassantos.github.io.MocFrota.model.user.specify.Condutor;

public record CondutorDTO(Long id, String name, String cnh, String cpf, String role, String telefone, AddressDTO address, UserDTO user) {

        public CondutorDTO(Condutor condutor){
            this(condutor.getId(), condutor.getName(), condutor.getCnh(), condutor.getCpf(), condutor.getRole(), condutor.getTelefone(), new AddressDTO(condutor.getAddress()),new UserDTO(condutor.getUser()));
        }
}
