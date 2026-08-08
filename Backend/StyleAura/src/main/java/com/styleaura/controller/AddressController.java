package com.styleaura.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.styleaura.dto.AddressRequest;
import com.styleaura.dto.AddressResponse;
import com.styleaura.service.AddressService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/addresses")
// @CrossOrigin(origins = "http://localhost:5173")
public class AddressController {

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<AddressResponse> addAddress(
            @PathVariable Long userId,
            @Valid @RequestBody AddressRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(addressService.addAddress(userId, request));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AddressResponse>> getUserAddresses(
            @PathVariable Long userId) {

        return ResponseEntity.ok(
                addressService.getUserAddresses(userId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressResponse> getAddressById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                addressService.getAddressById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AddressResponse> updateAddress(
            @PathVariable Long id,
            @Valid @RequestBody AddressRequest request) {

        return ResponseEntity.ok(
                addressService.updateAddress(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAddress(
            @PathVariable Long id) {

        addressService.deleteAddress(id);

        return ResponseEntity.ok("Address deleted successfully.");
    }
}