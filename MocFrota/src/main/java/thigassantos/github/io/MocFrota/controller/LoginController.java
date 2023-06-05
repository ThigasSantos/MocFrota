package thigassantos.github.io.MocFrota.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import thigassantos.github.io.MocFrota.model.user.User;
import thigassantos.github.io.MocFrota.model.user.dto.LoginDto;
import thigassantos.github.io.MocFrota.model.user.service.TokenService;
import thigassantos.github.io.MocFrota.repository.UserRepository;
import thigassantos.github.io.MocFrota.model.user.dto.UserRequestDTO;


@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public void saveUser(@RequestBody UserRequestDTO data){
        User userData = new User(data);
        userData.setPassword(passwordEncoder().encode(userData.getPassword()));
        userRepository.save(userData);
    }

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/usuario")
    public String login(@RequestBody LoginDto login){
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(login.email(), login.password());

        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        var user = (User) authentication.getPrincipal();

        return tokenService.generateToken(user);
    }
}
