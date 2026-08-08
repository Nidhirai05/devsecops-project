package com.styleaura.service;

import com.styleaura.dto.RegisterRequest;
import com.styleaura.dto.UserResponse;

public interface UserService {

    UserResponse registerUser(RegisterRequest request);

    UserResponse getUserById(Long id);

    UserResponse getUserByEmail(String email);
}