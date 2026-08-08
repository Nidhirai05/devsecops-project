package com.styleaura.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.styleaura.dto.OrderResponse;
import com.styleaura.dto.PlaceOrderRequest;
import com.styleaura.service.OrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/orders")
// @CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // Place Order
    @PostMapping("/place/{userId}")
    public ResponseEntity<OrderResponse> placeOrder(
            @PathVariable Long userId,
            @Valid @RequestBody PlaceOrderRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(orderService.placeOrder(userId, request));
    }

    // Get All Orders of User
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderResponse>> getOrdersByUser(
            @PathVariable Long userId) {

        return ResponseEntity.ok(
                orderService.getOrdersByUser(userId));
    }

    // Get Order by ID
    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponse> getOrderById(
            @PathVariable Long orderId) {

        return ResponseEntity.ok(
                orderService.getOrderById(orderId));
    }
}