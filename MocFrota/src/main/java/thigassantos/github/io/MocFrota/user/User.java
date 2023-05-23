package thigassantos.github.io.MocFrota.user;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import thigassantos.github.io.MocFrota.user.dto.UserRequestDTO;

@Table(name = "user")
@Entity(name = "user")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String role;

    public User(UserRequestDTO data){
        this.name = data.name();
        this.email = data.email();
        this.password = data.password();
        this.role = data.role();
    }
}
