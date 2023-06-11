package thigassantos.github.io.MocFrota.model.adress;

import jakarta.persistence.*;
import lombok.*;
import thigassantos.github.io.MocFrota.model.adress.dto.AddressDTO;
import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;

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

        public Address(AddressRequestDTO data) {
                this.cep = data.cep();
                this.logradouro = data.logradouro();
                this.bairro = data.bairro();
                this.cidade = data.cidade();
                this.estado = data.estado();
                this.numero = data.numero();
                this.complemento = data.complemento();
        }

        public Address(AddressDTO data) {
                this.cep = data.cep();
                this.logradouro = data.logradouro();
                this.bairro = data.bairro();
                this.cidade = data.cidade();
                this.estado = data.estado();
                this.numero = data.numero();
                this.complemento = data.complemento();
        }
}
