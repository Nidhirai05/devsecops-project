package com.styleaura.controller;

import com.styleaura.entity.Product;
import org.springframework.security.access.prepost.PreAuthorize;
import com.styleaura.service.ProductService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/products")
// @CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // =========================
    // GET ALL PRODUCTS
    // GET /api/products
    // =========================

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {

        return ResponseEntity.ok(
                productService.getAllProducts()
        );
    }

    // =========================
    // GET PRODUCT BY ID
    // GET /api/products/{id}
    // =========================

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                productService.getProductById(id)
        );
    }

    // =========================
    // GET PRODUCTS BY CATEGORY
    // GET /api/products/category/{categoryId}
    // =========================

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Product>> getProductsByCategory(
            @PathVariable Long categoryId) {

        return ResponseEntity.ok(
                productService.getProductsByCategory(categoryId)
        );
    }

    // =========================
    // SEARCH PRODUCTS
    // GET /api/products/search?name=kurti
    // =========================

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(
            @RequestParam String name) {

        return ResponseEntity.ok(
                productService.searchProducts(name)
        );
    }

    // =========================
    // FILTER BY COLOR
    // GET /api/products/color?color=Purple
    // =========================

    @GetMapping("/color")
    public ResponseEntity<List<Product>> getProductsByColor(
            @RequestParam String color) {

        return ResponseEntity.ok(
                productService.getProductsByColor(color)
        );
    }

    // =========================
    // FILTER BY SIZE
    // GET /api/products/size?size=M
    // =========================

    @GetMapping("/size")
    public ResponseEntity<List<Product>> getProductsBySize(
            @RequestParam String size) {

        return ResponseEntity.ok(
                productService.getProductsBySize(size)
        );
    }

    // =========================
    // FILTER BY PRICE RANGE
    // GET /api/products/price?minPrice=500&maxPrice=1500
    // =========================

    @GetMapping("/price")
    public ResponseEntity<List<Product>> getProductsByPriceRange(

            @RequestParam BigDecimal minPrice,

            @RequestParam BigDecimal maxPrice

    ) {

        return ResponseEntity.ok(

                productService.getProductsByPriceRange(
                        minPrice,
                        maxPrice
                )

        );
    }

    // =========================
    // CREATE PRODUCT
    // POST /api/products
    // =========================

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Product> createProduct(
            @RequestBody Product product) {
        Product savedProduct =
                productService.createProduct(product);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedProduct);
    }

    // =========================
    // UPDATE PRODUCT
    // PUT /api/products/{id}
    // =========================

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(

            @PathVariable Long id,

            @RequestBody Product product

    ) {

        Product updatedProduct =
                productService.updateProduct(id, product);

        return ResponseEntity.ok(updatedProduct);
    }

    // =========================
    // DELETE PRODUCT
    // DELETE /api/products/{id}
    // =========================

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(
            @PathVariable Long id) {

        productService.deleteProduct(id);

        return ResponseEntity
                .noContent()
                .build();
    }
}