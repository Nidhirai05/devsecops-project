package com.styleaura.service;

import java.util.List;

import com.styleaura.dto.OrderResponse;
import com.styleaura.dto.PlaceOrderRequest;

public interface OrderService {

    OrderResponse placeOrder(Long userId, PlaceOrderRequest request);

    List<OrderResponse> getOrdersByUser(Long userId);

    OrderResponse getOrderById(Long orderId);

}