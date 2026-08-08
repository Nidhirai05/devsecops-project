package com.styleaura.service;

import com.styleaura.entity.Product;

import java.math.BigDecimal;
import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();

    Product getProductById(Long id);

    List<Product> getProductsByCategory(Long categoryId);

    List<Product> searchProducts(String name);

    List<Product> getProductsByColor(String color);

    List<Product> getProductsBySize(String size);

    List<Product> getProductsByPriceRange(
            BigDecimal minPrice,
            BigDecimal maxPrice
    );

    Product createProduct(Product product);

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);
}