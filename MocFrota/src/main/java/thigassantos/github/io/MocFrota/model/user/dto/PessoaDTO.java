package thigassantos.github.io.MocFrota.model.user.dto;

import thigassantos.github.io.MocFrota.model.adress.dto.AddressDTO;
import thigassantos.github.io.MocFrota.model.user.Pessoa;

public record PessoaDTO(Long id,String name, String cpf, String role, String telefone, AddressDTO address, UserDTO user) {
    public PessoaDTO(Pessoa pessoa) {
        this(pessoa.getId(), pessoa.getName(), pessoa.getCpf(), pessoa.getRole(), pessoa.getTelefone(), new AddressDTO(pessoa.getAddress()),new UserDTO(pessoa.getUser()));
    }
}
