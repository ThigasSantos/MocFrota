package thigassantos.github.io.MocFrota.model.frota.dto;

import thigassantos.github.io.MocFrota.model.frota.Veiculo;

public record VeiculoDTO(Long id, String placa, String modelo, String marca, String cor,
                         String ano, String chassi, String renavam, String tipo, Long statusId) {

    public VeiculoDTO(Veiculo veiculo){
        this(veiculo.getId(), veiculo.getPlaca(), veiculo.getModelo(),
                veiculo.getMarca(), veiculo.getCor(), veiculo.getAno(),
                veiculo.getChassi(), veiculo.getRenavam(), veiculo.getTipo(), veiculo.getStatus().getId());
    }
}
