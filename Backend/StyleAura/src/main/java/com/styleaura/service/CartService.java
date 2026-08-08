package com.styleaura.service;

import java.util.List;

import com.styleaura.dto.CartRequest;
import com.styleaura.dto.CartResponse;

public interface CartService {

    CartResponse addToCart(Long userId, CartRequest request);

    List<CartResponse> getCart(Long userId);

    CartResponse updateQuantity(Long cartId, Integer quantity);

    void removeFromCart(Long cartId);

    void clearCart(Long userId);
}