package thigassantos.github.io.MocFrota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MocFrotaApplication {

	private static PreencherBanco preencherBanco;

	@Autowired
	public MocFrotaApplication(PreencherBanco preencherBanco) {
		MocFrotaApplication.preencherBanco = preencherBanco;
	}

	public static void main(String[] args) {
		SpringApplication.run(MocFrotaApplication.class, args);
		preencherBanco.preencheBanco();
	}
}
