package com.styleaura.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.styleaura.entity.Cart;
import com.styleaura.entity.Product;
import com.styleaura.entity.User;

public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUser(User user);

    Optional<Cart> findByUserAndProduct(User user, Product product);

    void deleteByUserAndProduct(User user, Product product);
    
    void deleteByUserId(Long userId);
}