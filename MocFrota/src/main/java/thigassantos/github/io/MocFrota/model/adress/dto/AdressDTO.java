package thigassantos.github.io.MocFrota.model.adress.dto;

import thigassantos.github.io.MocFrota.model.adress.Address;

public record AdressDTO(Long id, String cep, String logradouro, String bairro,String numero, String complemento) {

    public AdressDTO(Address address){
        this(address.getId(), address.getCep(), address.getLogradouro(), address.getBairro(), address.getNumero(), address.getComplemento());
    }

}
