package com.martens.hackatonV2.controller;


import com.martens.hackatonV2.entity.Product;
import com.martens.hackatonV2.entity.ShoppingCart;
import com.martens.hackatonV2.service.ShoppingCartService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController("/shopping-cart")
@AllArgsConstructor
public class ShoppingCartController {

    ShoppingCartService shoppingCartService;

    @GetMapping("/{cartId}/add")
    public void addToShoppingCart(@PathVariable Long cartId, Product product){
        shoppingCartService.addToCart(product, cartId);
    }

    @GetMapping("/{cartId}/remove")
    public void removeFromShoppingCart(@PathVariable Long cartId, Product product) {
        shoppingCartService.removeFromCart(product, cartId);
    }
}
