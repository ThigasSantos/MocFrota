package thigassantos.github.io.MocFrota.model.partner;

import jakarta.persistence.*;
import lombok.*;
import thigassantos.github.io.MocFrota.model.adress.Address;

import java.util.List;

@Entity(name = "company")
@Table(name = "company")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Company {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cnpj;
    private String name;
    private String telefone;
    private String email;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    private String status;
}
