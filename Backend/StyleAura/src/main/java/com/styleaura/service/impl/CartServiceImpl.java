package com.styleaura.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.styleaura.dto.CartRequest;
import com.styleaura.dto.CartResponse;
import com.styleaura.entity.Cart;
import com.styleaura.entity.Product;
import com.styleaura.entity.User;
import com.styleaura.exception.ResourceNotFoundException;
import com.styleaura.repository.CartRepository;
import com.styleaura.repository.ProductRepository;
import com.styleaura.repository.UserRepository;
import com.styleaura.service.CartService;
import java.math.BigDecimal;

@Service
public class CartServiceImpl implements CartService {

	private final CartRepository cartRepository;
	private final UserRepository userRepository;
	private final ProductRepository productRepository;

	public CartServiceImpl(CartRepository cartRepository, UserRepository userRepository,
			ProductRepository productRepository) {

		this.cartRepository = cartRepository;
		this.userRepository = userRepository;
		this.productRepository = productRepository;
	}

	@Override
	public CartResponse addToCart(Long userId, CartRequest request) {

		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));

		Product product = productRepository.findById(request.getProductId())
				.orElseThrow(() -> new ResourceNotFoundException("Product not found"));

		Cart cart = cartRepository.findByUserAndProduct(user, product).orElse(null);

		if (cart == null) {

			cart = new Cart();
			cart.setUser(user);
			cart.setProduct(product);
			cart.setQuantity(request.getQuantity());

		} else {

			cart.setQuantity(cart.getQuantity() + request.getQuantity());

		}

		Cart savedCart = cartRepository.save(cart);

		return mapToResponse(savedCart);
	}

	@Override
	public List<CartResponse> getCart(Long userId) {

		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));

		List<Cart> cartItems = cartRepository.findByUser(user);

		return cartItems.stream().map(this::mapToResponse).collect(Collectors.toList());
	}

	private CartResponse mapToResponse(Cart cart) {

		return new CartResponse(

				cart.getCartId(),

				cart.getProduct().getId(),

				cart.getProduct().getName(),

				cart.getProduct().getPrice(),

				cart.getQuantity(),

				cart.getProduct()
			    .getPrice()
			    .multiply(BigDecimal.valueOf(cart.getQuantity())));
	}

	@Override
	public CartResponse updateQuantity(Long cartId, Integer quantity) {

		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(() -> new ResourceNotFoundException("Cart item not found"));

		cart.setQuantity(quantity);

		Cart updatedCart = cartRepository.save(cart);

		return mapToResponse(updatedCart);
	}

	@Override
	public void removeFromCart(Long cartId) {

		Cart cart = cartRepository.findById(cartId)
				.orElseThrow(() -> new ResourceNotFoundException("Cart item not found"));

		cartRepository.delete(cart);
	}

	@Override
	public void clearCart(Long userId) {

	    User user = userRepository.findById(userId)
	            .orElseThrow(() ->
	                    new ResourceNotFoundException("User not found"));

	    List<Cart> cartItems = cartRepository.findByUser(user);

	    cartRepository.deleteAll(cartItems);
	}
}
