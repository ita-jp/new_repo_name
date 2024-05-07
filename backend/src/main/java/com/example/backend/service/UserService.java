package com.example.backend.service;

import com.example.backend.repository.UserRepository;
import com.example.backend.service.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public User register(User newUser) {
        var rawPassword = newUser.getPassword();
        var encodedPassword = passwordEncoder.encode(rawPassword);
        newUser.setPassword(encodedPassword);
        return userRepository.save(newUser);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
