package com.martens.hackatonV2.service;

import com.martens.hackatonV2.entity.Product;
import com.martens.hackatonV2.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Getter
@AllArgsConstructor
public class ProductService {

    ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<List<Product>> getByName(String name) {
        return productRepository.findByName(name);
    }

    public Optional<List<Product>> getByProductType(String productType) {
        return productRepository.findByProductType(productType);
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }
}
