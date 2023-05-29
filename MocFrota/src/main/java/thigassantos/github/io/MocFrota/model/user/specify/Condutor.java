package thigassantos.github.io.MocFrota.model.user.specify;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.user.User;

@Entity(name = "condutor")
@Table(name = "condutor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Condutor extends User {

    private String cnh;
    private String cpf;
    private String telefone;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
}
