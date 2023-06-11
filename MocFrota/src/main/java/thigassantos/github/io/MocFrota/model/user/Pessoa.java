package thigassantos.github.io.MocFrota.model.user;

import jakarta.persistence.*;
import lombok.*;
import thigassantos.github.io.MocFrota.model.adress.Address;

@Table(name = "pessoa")
@Entity(name = "pessoa")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Pessoa {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String cpf;
    private String role;
    private String telefone;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    @OneToOne(cascade = CascadeType.REMOVE)
    private User user;

}
