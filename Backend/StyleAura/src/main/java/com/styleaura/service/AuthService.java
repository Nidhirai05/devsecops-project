package com.styleaura.service;

import com.styleaura.dto.LoginRequest;
import com.styleaura.dto.LoginResponse;

public interface AuthService {

    LoginResponse login(LoginRequest request);

}