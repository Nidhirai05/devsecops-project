package com.styleaura.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import com.styleaura.dto.LoginRequest;
import com.styleaura.dto.LoginResponse;
import com.styleaura.entity.User;
import com.styleaura.exception.ResourceNotFoundException;
import com.styleaura.repository.UserRepository;
import com.styleaura.service.AuthService;
import com.styleaura.jwt.JwtUtil;

@Service
public class AuthServiceImpl implements AuthService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtUtil jwtUtil;

	public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {

		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtUtil = jwtUtil;
	}

	@Override
	public LoginResponse login(LoginRequest request) {

		User user = userRepository.findByEmail(request.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid email or password"));

		if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			throw new ResourceNotFoundException("Invalid email or password");
		}

		// JWT will be added in next step
		String token = jwtUtil.generateToken(
		        user.getEmail(),
		        user.getRole().name()
		);

		return new LoginResponse(
		        token,
		        "Bearer",
		        user.getName(),
		        user.getEmail(),
		        user.getRole().name()
		);
	}
}