package com.martens.hackatonV2.service;


import com.martens.hackatonV2.entity.Product;
import com.martens.hackatonV2.entity.ShoppingCart;
import com.martens.hackatonV2.repository.ShoppingCartRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Getter
@RequiredArgsConstructor
public class ShoppingCartService {

    ShoppingCartRepository shoppingCartRepository;

    public void addToCart(Product product, Long cartId) {
        ShoppingCart currentCart = shoppingCartRepository.getById(cartId);
        currentCart.getProductList().add(product);
        shoppingCartRepository.save(currentCart);

    }

    public void removeFromCart(Product product, Long cartId) {
        ShoppingCart currentCart = shoppingCartRepository.getById(cartId);
        currentCart.getProductList().remove(product);
        shoppingCartRepository.save(currentCart);
    }
}
