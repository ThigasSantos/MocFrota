package thigassantos.github.io.MocFrota.frota.dto;

import thigassantos.github.io.MocFrota.frota.Veiculo;

public record VeiculoDTO(Long id, String placa, String modelo, String marca, String cor,
                         String ano, String chassi, String renavam, String tipo, long combustivel,
                         long km, String status) {

    public VeiculoDTO(Veiculo veiculo){
        this(veiculo.getId(), veiculo.getPlaca(), veiculo.getModelo(),
                veiculo.getMarca(), veiculo.getCor(), veiculo.getAno(),
                veiculo.getChassi(), veiculo.getRenavam(), veiculo.getTipo(),
                veiculo.getCombustivel(), veiculo.getKm(), veiculo.getStatus());
    }
}
