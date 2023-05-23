package thigassantos.github.io.MocFrota.frota.dto;

public record VeiculoRequestDTO(String placa, String modelo, String marca, String cor,
                                String ano, String chassi, String renavam, String tipo, long combustivel,
                                long km, String status) {
}
