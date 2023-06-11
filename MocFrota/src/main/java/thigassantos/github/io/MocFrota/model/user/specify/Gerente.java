package thigassantos.github.io.MocFrota.model.user.specify;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.user.Pessoa;
import thigassantos.github.io.MocFrota.model.user.specify.dto.GerenteRequestDTO;

@Table(name = "gerente")
@Entity(name = "gerente")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Gerente extends Pessoa {

        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        public Gerente(GerenteRequestDTO data) {
                this.setName(data.name());
                this.setCpf(data.cpf());
                this.setRole(data.role());
                this.setTelefone(data.telefone());
                this.setAddress(new Address(data.address()));
        }
}
