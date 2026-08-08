package com.styleaura.service;

import java.util.List;

import com.styleaura.dto.AddressRequest;
import com.styleaura.dto.AddressResponse;

public interface AddressService {

    AddressResponse addAddress(Long userId, AddressRequest request);

    List<AddressResponse> getUserAddresses(Long userId);

    AddressResponse getAddressById(Long id);

    AddressResponse updateAddress(Long id, AddressRequest request);

    void deleteAddress(Long id);

}