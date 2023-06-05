package thigassantos.github.io.MocFrota.model.adress;

import jakarta.persistence.*;
import lombok.*;
import thigassantos.github.io.MocFrota.model.partner.Company;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "address")
@Table(name = "address")
@EqualsAndHashCode(of="id")
public class Address {

        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String cep;
        private String logradouro;
        private String bairro;
        private String cidade;
        private String estado;
        private String numero;
        private String complemento;

}
