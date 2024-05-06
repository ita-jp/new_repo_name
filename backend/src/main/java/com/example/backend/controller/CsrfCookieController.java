package com.example.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsrfCookieController {

    @GetMapping("/api/csrf-cookie")
    public ResponseEntity<Void> getCsrfCookie() {
        return ResponseEntity.ok().build();
    }
}
