package thigassantos.github.io.MocFrota.model.frota.dto;

public record StatusRequestDTO(String placa,String status,String estado, int km, int combustivel, Boolean farol, Boolean luzFreio, Boolean luzRe, Boolean limpador, Boolean pneu, Boolean estepe, Boolean freio) {
}
