package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.user.specify.Condutor;

public record CondutorDTO(String cnh, String cpf, String telefone, Address address) {

        public CondutorDTO(Condutor condutor){
            this(condutor.getCnh(), condutor.getCpf(), condutor.getTelefone(), condutor.getAddress());
        }
}
