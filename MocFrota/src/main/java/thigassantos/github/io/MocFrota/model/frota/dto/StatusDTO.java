package thigassantos.github.io.MocFrota.model.frota.dto;

import thigassantos.github.io.MocFrota.model.frota.Status;

import java.time.LocalDateTime;

public record StatusDTO(Long id, String placa, String status, String data,String estado, int km, int combustivel, Boolean farol, Boolean luzFreio, Boolean luzRe, Boolean limpador, Boolean pneu, Boolean estepe, Boolean freio) {
    public StatusDTO(Status status) {
        this(status.getId(), status.getPlaca(), status.getStatus(),status.getData(), status.getEstado(), status.getKm(), status.getCombustivel(), status.getFarol(), status.getLuzFreio(), status.getLuzRe(), status.getLimpador(), status.getPneu(), status.getEstepe(), status.getFreio());
    }
}
