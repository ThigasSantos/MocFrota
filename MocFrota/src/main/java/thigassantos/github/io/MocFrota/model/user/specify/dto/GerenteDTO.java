package thigassantos.github.io.MocFrota.model.user.specify.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;

public record GerenteDTO(String cpf, String telefone, Address address) {

        public GerenteDTO(String cpf, String telefone, Address address) {
            this.cpf = cpf;
            this.telefone = telefone;
            this.address = address;
        }
}
