package com.styleaura.repository;

import com.styleaura.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategoryId(Long categoryId);

    List<Product> findByNameContainingIgnoreCase(String name);

    List<Product> findByColorIgnoreCase(String color);

    List<Product> findBySizeIgnoreCase(String size);

    List<Product> findByPriceBetween(
            java.math.BigDecimal minPrice,
            java.math.BigDecimal maxPrice
    );
}