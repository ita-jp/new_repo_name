package com.example.backend.controller.user;

import com.example.backend.service.UserService;
import com.example.backend.service.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserResponse> me(Principal principal) {
        // TODO put username on the principal
        return userService.findByEmail(principal.getName())
                .map(user -> new UserResponse(user.getEmail(), user.getUsername()))
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserResponse> create(@RequestBody PostUserRequest req) {
        var newUser = new User(null, req.email(), req.password(), req.username(), true);
        var savedUser = userService.register(newUser);
        var response = new UserResponse(savedUser.getEmail(), savedUser.getUsername());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    public record PostUserRequest(String email, String username, String password) {
    }

    public record UserResponse(String email, String username) {
    }
}
// TODO user settings update username and email and password