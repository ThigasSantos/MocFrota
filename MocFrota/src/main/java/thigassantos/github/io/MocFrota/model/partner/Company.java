package thigassantos.github.io.MocFrota.model.partner;

import jakarta.persistence.*;
import lombok.*;
import thigassantos.github.io.MocFrota.model.adress.Address;
import thigassantos.github.io.MocFrota.model.partner.dto.CompanyRequestDTO;

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

    public Company(CompanyRequestDTO data) {
        this.cnpj = data.cnpj();
        this.name = data.name();
        this.telefone = data.telefone();
        this.email = data.email();
        this.setAddress(new Address(data.address()));
        this.status = data.status();
    }
}
