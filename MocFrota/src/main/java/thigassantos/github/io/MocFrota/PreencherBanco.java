package thigassantos.github.io.MocFrota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import thigassantos.github.io.MocFrota.controller.FrotaController;
import thigassantos.github.io.MocFrota.controller.LoginController;
import thigassantos.github.io.MocFrota.controller.UserController;
import thigassantos.github.io.MocFrota.model.adress.dto.AddressRequestDTO;
import thigassantos.github.io.MocFrota.model.frota.Status;
import thigassantos.github.io.MocFrota.model.frota.dto.StatusRequestDTO;
import thigassantos.github.io.MocFrota.model.frota.dto.VeiculoRequestDTO;
import thigassantos.github.io.MocFrota.model.user.dto.UserRequestDTO;
import thigassantos.github.io.MocFrota.model.user.specify.dto.GerenteRequestDTO;

@Component
public class PreencherBanco {
    private FrotaController frotaController;
    private LoginController loginController;
    private UserController userController;

    @Autowired
    public PreencherBanco(FrotaController frotaController, LoginController loginController, UserController userController) {
        this.frotaController = frotaController;
        this.loginController = loginController;
        this.userController = userController;
    }

    public void preencheBanco(){
        StatusRequestDTO status11 = new StatusRequestDTO("Disponível", 32, 55, true, false, false, false, false, false, false, false);
        Status status1 = new Status(status11);
        Status status2 = new Status(status11);
        Status status3 = new Status(status11);
        Status status4 = new Status(status11);

        VeiculoRequestDTO veiculo1 = new VeiculoRequestDTO("ABC-1234", "Uno", "Fiat", "Branco", "2010", "123456789", "123456789", "Passeio", status1);
        VeiculoRequestDTO veiculo2 = new VeiculoRequestDTO("DEF-5678", "Gol", "Volkswagen", "Preto", "2015", "987654321", "987654321", "Passeio", status2);
        VeiculoRequestDTO veiculo3 = new VeiculoRequestDTO("GHI-9012", "Celta", "Chevrolet", "Prata", "2012", "123456789", "123456789", "Passeio", status3);
        VeiculoRequestDTO veiculo4 = new VeiculoRequestDTO("JKL-3456", "Palio", "Fiat", "Vermelho", "2013", "987654321", "987654321", "Passeio",  status4);

        frotaController.saveVeiculo(veiculo1);
        frotaController.saveVeiculo(veiculo2);
        frotaController.saveVeiculo(veiculo3);
        frotaController.saveVeiculo(veiculo4);

        UserRequestDTO user1 = new UserRequestDTO("Thiago","aaaaa","123456","gerente");
        UserRequestDTO user2 = new UserRequestDTO("Emilly","bbbbb","123456","condutor");

        loginController.saveUser(user1);
        loginController.saveUser(user2);

        AddressRequestDTO address1 = new AddressRequestDTO("39400-000", "Rua 1", "Bairro 1", "Cidade 1", "Estado 1","12","sem complemento");
        GerenteRequestDTO gerente1 = new GerenteRequestDTO("Thiago", "123.456.789-10", "gerente", "123456789", address1, 1L);

        userController.saveGerente(gerente1);

    }
}
