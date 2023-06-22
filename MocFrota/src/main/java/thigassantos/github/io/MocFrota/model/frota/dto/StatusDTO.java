package thigassantos.github.io.MocFrota.model.frota.dto;

import thigassantos.github.io.MocFrota.model.frota.Status;

public record StatusDTO(String placa, String status, int km, int combustivel, Boolean farol, Boolean luzFreio, Boolean luzRe, Boolean limpador, Boolean pneu, Boolean estepe, Boolean freio) {
    public StatusDTO(Status status) {
        this(status.getPlaca(), status.getStatus(), status.getKm(), status.getCombustivel(), status.getFarol(), status.getLuzFreio(), status.getLuzRe(), status.getLimpador(), status.getPneu(), status.getEstepe(), status.getFreio());
    }
}
