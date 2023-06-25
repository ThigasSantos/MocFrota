package thigassantos.github.io.MocFrota.model.user.service;

import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;
import com.auth0.jwt.JWT;
import thigassantos.github.io.MocFrota.model.user.User;

import java.util.Date;


@Service
public class TokenService {

    public String generateToken(User user) {
        return JWT.create()
                .withSubject(user.getEmail()).withClaim("id", user.getId()).withClaim("role", user.getRole())
                .withExpiresAt(new Date(System.currentTimeMillis() + 1 * 60 * 1000))
                .sign(Algorithm.HMAC256("secret"));
    }

    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256("secret"))
                .build().verify(token).getSubject();
    }
}
