package com.styleaura.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.styleaura.entity.Order;
import com.styleaura.entity.OrderStatus;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByUserId(Long userId);

    List<Order> findByOrderStatus(OrderStatus status);

    Order findByOrderNumber(String orderNumber);

}