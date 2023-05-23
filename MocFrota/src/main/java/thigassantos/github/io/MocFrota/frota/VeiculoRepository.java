package thigassantos.github.io.MocFrota.frota;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EntityScan
@EnableJpaRepositories
@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

}
