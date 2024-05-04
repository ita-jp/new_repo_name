package com.example.backend.controller;

import com.example.backend.config.SecurityConfig;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsrfController {

    /**
     * The path used to expose the CSRF token retrieval endpoint.
     * This path is integrated into the security configuration set up by {@link SecurityConfig#securityFilterChain(HttpSecurity)}
     * to effectively mitigate CSRF attacks.
     */
    public static final String CSRF_PATH = "/api/csrf";

    /**
     * Retrieves the CSRF token. This endpoint does not accept any user inputs to mitigate the risk of BREACH attacks.
     *
     * @param csrfToken The CSRF token from the request attributes.
     * @return The CSRF token as a response, ensuring it is only read, not modified.
     */
    @GetMapping(CSRF_PATH)
    public CsrfToken csrf(CsrfToken csrfToken) {
        return csrfToken;
    }

}
