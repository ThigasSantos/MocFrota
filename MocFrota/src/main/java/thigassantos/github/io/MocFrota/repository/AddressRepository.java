package thigassantos.github.io.MocFrota.repository;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import thigassantos.github.io.MocFrota.model.adress.Address;

@EntityScan
@EnableJpaRepositories
@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
