package com.styleaura.service.impl;

import com.styleaura.entity.Product;
import com.styleaura.repository.ProductRepository;
import com.styleaura.service.ProductService;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {

        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {

        return productRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Product not found with id: " + id
                        )
                );
    }

    @Override
    public List<Product> getProductsByCategory(Long categoryId) {

        return productRepository.findByCategoryId(categoryId);
    }

    @Override
    public List<Product> searchProducts(String name) {

        return productRepository.findByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Product> getProductsByColor(String color) {

        return productRepository.findByColorIgnoreCase(color);
    }

    @Override
    public List<Product> getProductsBySize(String size) {

        return productRepository.findBySizeIgnoreCase(size);
    }

    @Override
    public List<Product> getProductsByPriceRange(
            BigDecimal minPrice,
            BigDecimal maxPrice
    ) {

        return productRepository.findByPriceBetween(
                minPrice,
                maxPrice
        );
    }

    @Override
    public Product createProduct(Product product) {

        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {

        Product existingProduct = getProductById(id);

        existingProduct.setName(product.getName());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setOriginalPrice(product.getOriginalPrice());
        existingProduct.setDiscount(product.getDiscount());
        existingProduct.setSize(product.getSize());
        existingProduct.setColor(product.getColor());
        existingProduct.setStockQuantity(product.getStockQuantity());
        existingProduct.setImage(product.getImage());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setRating(product.getRating());
        existingProduct.setReviews(product.getReviews());

        if (product.getCategory() != null) {
            existingProduct.setCategory(product.getCategory());
        }

        return productRepository.save(existingProduct);
    }

    @Override
    public void deleteProduct(Long id) {

        Product product = getProductById(id);

        productRepository.delete(product);
    }
}