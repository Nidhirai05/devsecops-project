package com.styleaura.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.styleaura.dto.AddressRequest;
import com.styleaura.dto.AddressResponse;
import com.styleaura.entity.Address;
import com.styleaura.entity.User;
import com.styleaura.exception.ResourceNotFoundException;
import com.styleaura.repository.AddressRepository;
import com.styleaura.repository.UserRepository;
import com.styleaura.service.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    public AddressServiceImpl(AddressRepository addressRepository,
                              UserRepository userRepository) {
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
    }

    @Override
    public AddressResponse addAddress(Long userId, AddressRequest request) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        Address address = new Address();

        address.setFullName(request.getFullName());
        address.setMobileNumber(request.getMobileNumber());
        address.setAddressLine1(request.getAddressLine1());
        address.setAddressLine2(request.getAddressLine2());
        address.setCity(request.getCity());
        address.setState(request.getState());
        address.setCountry(request.getCountry());
        address.setPostalCode(request.getPostalCode());
        address.setDefaultAddress(request.isDefaultAddress());
        address.setUser(user);

        Address savedAddress = addressRepository.save(address);

        return mapToResponse(savedAddress);
    }

    
    @Override
    public List<AddressResponse> getUserAddresses(Long userId) {

        return addressRepository.findByUserId(userId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public AddressResponse getAddressById(Long id) {

        Address address = addressRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Address not found"));

        return mapToResponse(address);
    }
   
    @Override
    public AddressResponse updateAddress(Long id, AddressRequest request) {

        Address address = addressRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Address not found"));

        address.setFullName(request.getFullName());
        address.setMobileNumber(request.getMobileNumber());
        address.setAddressLine1(request.getAddressLine1());
        address.setAddressLine2(request.getAddressLine2());
        address.setCity(request.getCity());
        address.setState(request.getState());
        address.setCountry(request.getCountry());
        address.setPostalCode(request.getPostalCode());
        address.setDefaultAddress(request.isDefaultAddress());

        Address updatedAddress = addressRepository.save(address);

        return mapToResponse(updatedAddress);
    }

    @Override
    public void deleteAddress(Long id) {

        Address address = addressRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Address not found"));

        addressRepository.delete(address);
    }
    
    private AddressResponse mapToResponse(Address address) {

        return AddressResponse.builder()
                .id(address.getId())
                .fullName(address.getFullName())
                .mobileNumber(address.getMobileNumber())
                .addressLine1(address.getAddressLine1())
                .addressLine2(address.getAddressLine2())
                .city(address.getCity())
                .state(address.getState())
                .country(address.getCountry())
                .postalCode(address.getPostalCode())
                .defaultAddress(address.isDefaultAddress())
                .build();
    }
}