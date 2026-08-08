package com.styleaura.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.styleaura.dto.CartRequest;
import com.styleaura.dto.CartResponse;
import com.styleaura.service.CartService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/cart")
// @CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    // Add Product to Cart
    @PostMapping("/{userId}")
    public ResponseEntity<CartResponse> addToCart(
            @PathVariable Long userId,
            @Valid @RequestBody CartRequest request) {

        return ResponseEntity.ok(cartService.addToCart(userId, request));
    }

    // Get User Cart
    @GetMapping("/{userId}")
    public ResponseEntity<List<CartResponse>> getCart(
            @PathVariable Long userId) {

        return ResponseEntity.ok(cartService.getCart(userId));
    }

    // Update Quantity
    @PutMapping("/{cartId}")
    public ResponseEntity<CartResponse> updateQuantity(
            @PathVariable Long cartId,
            @RequestParam Integer quantity) {

        return ResponseEntity.ok(
                cartService.updateQuantity(cartId, quantity));
    }

    // Remove Item
    @DeleteMapping("/{cartId}")
    public ResponseEntity<String> removeItem(
            @PathVariable Long cartId) {

        cartService.removeFromCart(cartId);

        return ResponseEntity.ok("Item removed successfully.");
    }

    // Clear Cart
    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<String> clearCart(
            @PathVariable Long userId) {

        cartService.clearCart(userId);

        return ResponseEntity.ok("Cart cleared successfully.");
    }
}