package thigassantos.github.io.MocFrota.model.user.specify;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.user.User;

@Table(name = "gerente")
@Entity(name = "gerente")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Gerente extends User {

        private String cpf;
        private String telefone;
        @OneToOne(cascade = CascadeType.ALL)
        private Address address;

}
