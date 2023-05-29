package thigassantos.github.io.MocFrota.model.user.dto;

import thigassantos.github.io.MocFrota.model.user.User;

public record UserDTO(Long id, String name, String email, String role) {

    public UserDTO(User user){
        this(user.getId(), user.getName(), user.getEmail(), user.getRole());
    }
}
