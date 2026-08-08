package com.styleaura.service.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.styleaura.dto.OrderItemRequest;
import com.styleaura.dto.OrderResponse;
import com.styleaura.dto.PlaceOrderRequest;
import com.styleaura.entity.Address;
import com.styleaura.entity.Order;
import com.styleaura.entity.OrderItem;
import com.styleaura.entity.OrderStatus;
import com.styleaura.entity.PaymentStatus;
import com.styleaura.entity.Product;
import com.styleaura.entity.User;
import com.styleaura.exception.ResourceNotFoundException;
import com.styleaura.repository.AddressRepository;
import com.styleaura.repository.CartRepository;
import com.styleaura.repository.OrderItemRepository;
import com.styleaura.repository.OrderRepository;
import com.styleaura.repository.ProductRepository;
import com.styleaura.repository.UserRepository;
import com.styleaura.service.OrderService;


@Service
public class OrderServiceImpl implements OrderService {

	private final OrderRepository orderRepository;
	private final OrderItemRepository orderItemRepository;
	private final UserRepository userRepository;
	private final ProductRepository productRepository;
	private final CartRepository cartRepository;
	private final AddressRepository addressRepository;

	public OrderServiceImpl(OrderRepository orderRepository, OrderItemRepository orderItemRepository,
			UserRepository userRepository, ProductRepository productRepository, CartRepository cartRepository,
			AddressRepository addressRepository) {

		this.orderRepository = orderRepository;
		this.orderItemRepository = orderItemRepository;
		this.userRepository = userRepository;
		this.productRepository = productRepository;
		this.cartRepository = cartRepository;
		this.addressRepository = addressRepository;
	}

	@Override
	public OrderResponse placeOrder(Long userId, PlaceOrderRequest request) {

		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));

		Address address = addressRepository.findById(request.getAddressId())
				.orElseThrow(() -> new ResourceNotFoundException("Address not found"));

		Order order = new Order();

		order.setUser(user);
		order.setShippingAddress(address);

		order.setOrderDate(LocalDateTime.now());

		order.setOrderStatus(OrderStatus.PENDING);

		order.setPaymentStatus(PaymentStatus.PENDING);

		order.setPaymentMethod(request.getPaymentMethod());

		order.setOrderNumber(generateOrderNumber());
		BigDecimal totalAmount = BigDecimal.ZERO;

		List<OrderItem> orderItems = new ArrayList<>();
		
		for (OrderItemRequest itemRequest : request.getItems()) {

		    Product product = productRepository.findById(itemRequest.getProductId())
		            .orElseThrow(() ->
		                    new ResourceNotFoundException("Product not found"));

		    if (product.getStockQuantity() < itemRequest.getQuantity()) {
		        throw new RuntimeException(
		                "Insufficient stock for " + product.getName());
		    }

		    BigDecimal itemTotal = product.getPrice()
		            .multiply(BigDecimal.valueOf(itemRequest.getQuantity()));

		    totalAmount = totalAmount.add(itemTotal);
		    
		    OrderItem orderItem = new OrderItem();

		    orderItem.setOrder(order);
		    orderItem.setProduct(product);
		    orderItem.setQuantity(itemRequest.getQuantity());

		    orderItem.setPrice(product.getPrice());

		    orderItem.setTotalPrice(itemTotal);

		    orderItems.add(orderItem);
		    
		    product.setStockQuantity(
		            product.getStockQuantity() - itemRequest.getQuantity());

		    productRepository.save(product);
		    
		    
		}
		
		order.setTotalAmount(totalAmount);
	    
	    Order savedOrder = orderRepository.save(order);
	    
	    for (OrderItem item : orderItems) {

	        item.setOrder(savedOrder);

	        orderItemRepository.save(item);
	    }

		
		cartRepository.deleteByUserId(userId);

		
		
		return mapToResponse(savedOrder);
	}

	@Override
	public List<OrderResponse> getOrdersByUser(Long userId) {

	    List<Order> orders = orderRepository.findByUserId(userId);

	    List<OrderResponse> responses = new ArrayList<>();

	    for (Order order : orders) {
	        responses.add(mapToResponse(order));
	    }

	    return responses;
	}

	@Override
	public OrderResponse getOrderById(Long orderId) {

	    Order order = orderRepository.findById(orderId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("Order not found"));

	    return mapToResponse(order);
	}
	
	private OrderResponse mapToResponse(Order order) {

	    OrderResponse response = new OrderResponse();

	    response.setOrderId(order.getId());
	    response.setOrderNumber(order.getOrderNumber());

	    response.setTotalAmount(order.getTotalAmount());

	    response.setOrderStatus(order.getOrderStatus());

	    response.setPaymentStatus(order.getPaymentStatus());

	    response.setPaymentMethod(order.getPaymentMethod());

	 // ---------- Shipping address ----------
	    Address address = order.getShippingAddress();

	    response.setShippingAddress(
	            address.getFullName() + ", " +
	            address.getAddressLine1() + ", " +
	            address.getAddressLine2() + ", " +
	            address.getCity() + ", " +
	            address.getState() + " - " +
	            address.getPostalCode() + ", " +
	            address.getCountry()
	    );
	    // ---------- END ----------
	    
	    
	    response.setOrderDate(order.getOrderDate());

	    return response;
	}
	
	
	private String generateOrderNumber() {
	    return "ORD-" + System.currentTimeMillis();
	}

}