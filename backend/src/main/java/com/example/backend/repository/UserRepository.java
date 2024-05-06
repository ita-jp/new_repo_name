package com.example.backend.repository;

import com.example.backend.service.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email); // TODO return Optional?
}