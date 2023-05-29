package thigassantos.github.io.MocFrota.model.frota.dto;

import thigassantos.github.io.MocFrota.model.frota.Status;

public record VeiculoRequestDTO(String placa, String modelo, String marca, String cor,
                                String ano, String chassi, String renavam, String tipo, Status status) {
}
