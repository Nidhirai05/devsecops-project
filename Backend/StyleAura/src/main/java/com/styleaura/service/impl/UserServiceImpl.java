package com.styleaura.service.impl;

import com.styleaura.dto.RegisterRequest;

import com.styleaura.dto.UserResponse;
import com.styleaura.entity.Role;
import com.styleaura.entity.User;
import com.styleaura.exception.DuplicateResourceException;
import com.styleaura.exception.ResourceNotFoundException;
import com.styleaura.repository.UserRepository;
import com.styleaura.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {

		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public UserResponse registerUser(RegisterRequest request) {

		if (userRepository.existsByEmail(request.getEmail())) {

			throw new DuplicateResourceException("User already exists with email: " + request.getEmail());
		}

		User user = new User();

		user.setName(request.getName());
		user.setEmail(request.getEmail());
		user.setPassword(
		        passwordEncoder.encode(request.getPassword())
		);
		//user.setPassword(request.getPassword());
		user.setPhone(request.getPhone());

		// Every normal registration is CUSTOMER
		user.setRole(Role.CUSTOMER);

		User savedUser = userRepository.save(user);

		return toResponse(savedUser);
	}

	@Override
	public UserResponse getUserById(Long id) {

		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));

		return toResponse(user);
	}

	@Override
	public UserResponse getUserByEmail(String email) {

		User user = userRepository.findByEmail(email)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

		return toResponse(user);
	}

	private UserResponse toResponse(User user) {

		return new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getPhone(), user.getRole());
	}
}