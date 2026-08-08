package com.styleaura.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.styleaura.jwt.JwtAuthenticationFilter;


@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager(
            AuthenticationConfiguration configuration)
            throws Exception {

        return configuration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http

            .csrf(csrf -> csrf.disable())

            .cors(Customizer.withDefaults())

            .sessionManagement(session ->
                    session.sessionCreationPolicy(
                            SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(auth -> auth

            	    .requestMatchers(
            	            "/swagger-ui/**",
            	            "/swagger-ui.html",
            	            "/v3/api-docs/**",
            	            "/api/auth/login",
            	            "/api/users/register"
            	    ).permitAll()

            	    // Public APIs
            	    .requestMatchers(HttpMethod.GET,
            	            "/api/products/**",
            	            "/api/categories/**")
            	    .permitAll()

            	    // Admin APIs
            	    .requestMatchers(HttpMethod.POST,
            	            "/api/products/**",
            	            "/api/categories/**")
            	    .hasRole("ADMIN")

            	    .requestMatchers(HttpMethod.PUT,
            	            "/api/products/**",
            	            "/api/categories/**")
            	    .hasRole("ADMIN")

            	    .requestMatchers(HttpMethod.DELETE,
            	            "/api/products/**",
            	            "/api/categories/**")
            	    .hasRole("ADMIN")

            	    .anyRequest().authenticated()
            	)

            .addFilterBefore(
                    jwtAuthenticationFilter,
                    UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}