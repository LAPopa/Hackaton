package com.martens.hackatonV2.controller;

import com.martens.hackatonV2.entity.Product;
import com.martens.hackatonV2.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController("/product")
@AllArgsConstructor
public class ProductController {

    ProductService productService;


    @GetMapping("/get-all")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/get/{name}")
    public Optional<List<Product>> getByName(@PathVariable String name) {
        return productService.getByName(name);
    }

    @GetMapping("/get/{productType}")
    public Optional<List<Product>> getByProductType(@PathVariable String productType) {
        return productService.getByProductType(productType);
    }

    @PostMapping("/add-product")
    public void addProduct(@RequestBody Product product){
        productService.addProduct(product);
    }
}
