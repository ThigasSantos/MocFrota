package thigassantos.github.io.MocFrota.model.adress.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;

public record AddressDTO(Long id, String cep, String logradouro, String bairro, String cidade, String estado, String numero, String complemento) {

    public AddressDTO(Address address){
        this(address.getId(), address.getCep(), address.getLogradouro(), address.getBairro(), address.getCidade(), address.getEstado(), address.getNumero(), address.getComplemento());
    }

}
