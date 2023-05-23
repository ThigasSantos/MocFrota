package thigassantos.github.io.MocFrota.user.specify;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import thigassantos.github.io.MocFrota.user.User;

@Table(name = "gerente")
@Entity(name = "gerente")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Gerente extends User {

        private String cpf;
        private String telefone;

}
