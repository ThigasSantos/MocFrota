package thigassantos.github.io.MocFrota.model.frota.dto;

public record StatusRequestDTO(String status, int km, int combustivel, Boolean farol, Boolean luzFreio, Boolean luzRe, Boolean placa, Boolean limpador, Boolean pneu, Boolean estepe, Boolean freio) {
}
