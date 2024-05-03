package com.example.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;

@RestController
public class IndexController {

    @GetMapping
    public ResponseEntity<IndexResponse> index() {
        return ResponseEntity.ok(new IndexResponse("Hello, World! " + LocalTime.now()));
    }

    public record IndexResponse(String message) {
    }
}
