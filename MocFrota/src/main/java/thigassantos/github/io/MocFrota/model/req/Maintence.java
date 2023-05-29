package thigassantos.github.io.MocFrota.model.req;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import thigassantos.github.io.MocFrota.model.frota.Veiculo;
import thigassantos.github.io.MocFrota.model.user.specify.Gerente;

import java.time.LocalDateTime;

@Entity(name = "maintence")
@Table(name = "maintence")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Maintence {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String description;
    private LocalDateTime dateInit;
    private LocalDateTime dateEnd;
    private String status;
    @ManyToOne
    private Veiculo veiculo;
    @ManyToOne
    private Gerente responsavel;
}
